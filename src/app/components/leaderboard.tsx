"use client";

import React, { useContext, useState } from "react";

import { TeamRankings } from "../providers/types";
import { TeamScore } from "../data/types";
import RuleSetContext from "../context/ruleSetContext";
import PlayerContext from "../context/playerContext";
import PlacementChart from "./placementChart";
import Sidebar from "./sidebar";
import { captainNames, stars } from "../utils/format";

const styles: Record<string, React.CSSProperties> = {
  indicatorGreen: {
    color: "var(--green-indicator-color)",
  },
  indicatorRed: {
    color: "var(--red-indicator-color)",
  },
  rank: {
    fontSize: "12pt",
    padding: "2px 6px",
    marginBottom: "5px",
    borderRadius: "6px",
    backgroundColor: "var(--component-background-color-secondary)",
  },
  placementHistory: {
    paddingTop: "8px",
    gridColumn: "span 2",
    justifySelf: "end",
  },
  rankContainer: {
    justifySelf: "center",
  },
  teamName: {
    textAlign: "center",
    justifySelf: "center",
    gridRow: "span 2",
    gridColumn: "span 2",
  },
  captain: {
    fontSize: "9pt",
    color: "var(--component-text-color-secondary)",
  },
  points: {
    textAlign: "center",
    justifySelf: "center",
  },
  playerCount: {
    fontSize: "11pt",
    gridColumn: "span 2",
    justifySelf: "start",
    alignSelf: "end",
    paddingTop: "8px",
  },
  diff: {
    justifySelf: "center",
    fontSize: "8pt",
  },
  units: {
    fontSize: "10pt",
  },
  divider: {
    borderBottom: "1px solid var(--component-text-color-secondary)",
    gridColumn: "span 4",
  },
};

export default function Leaderboard(props: {
  thisWeekRankings: TeamRankings;
  lastWeekRankings: TeamRankings;
  currentWeek: number;
}) {
  const { lastWeekRankings = [], thisWeekRankings = [], currentWeek } = props;
  const ruleSet = useContext(RuleSetContext);
  const playerRankings = useContext(PlayerContext);

  const [selectedTeam, setSelectedTeam] = useState<TeamScore | null>(null);
  const [offcanvasShown, setOffcanvasShown] = useState(false);

  function displayTeamDetails(teamScore: TeamScore) {
    if (selectedTeam === teamScore) {
      setOffcanvasShown(!offcanvasShown);
    } else {
      setSelectedTeam(teamScore);
      setOffcanvasShown(true);
    }
  }

  let firstPlaceGroup = thisWeekRankings.filter(
    (teamScore) => teamScore[ruleSet].rank === 1
  );

  let remainingTeams: TeamRankings;
  if (firstPlaceGroup.length > 5) {
    firstPlaceGroup = [];
    remainingTeams = thisWeekRankings;
  } else {
    remainingTeams = thisWeekRankings.filter(
      (teamScore) => teamScore[ruleSet].rank > 1
    );
  }

  function teamFlexGroup(rankings: TeamRankings) {
    return (
      <>
        {...rankings.map((thisWeekScore, index) => {
          const lastWeekScore = lastWeekRankings?.find(
            (r) => r.team === thisWeekScore.team
          );

          function getScoreDiff() {
            const scoreDiff =
              thisWeekScore[ruleSet].total -
              (lastWeekScore ? lastWeekScore[ruleSet].total : 0);

            if (scoreDiff > 0) {
              return (
                <>
                  <span style={styles.indicatorGreen}>
                    (+
                    {scoreDiff})
                  </span>
                </>
              );
            } else {
              return "(-)";
            }
          }

          function getRankDiff() {
            if (lastWeekScore) {
              if (thisWeekScore[ruleSet].rank < lastWeekScore[ruleSet].rank) {
                return (
                  <>
                    <span style={styles.indicatorGreen}>
                      (▲{" "}
                      {lastWeekScore[ruleSet].rank -
                        thisWeekScore[ruleSet].rank}
                      )
                    </span>
                  </>
                );
              } else if (
                thisWeekScore[ruleSet].rank > lastWeekScore[ruleSet].rank
              ) {
                return (
                  <>
                    <span style={styles.indicatorRed}>
                      (▼{" "}
                      {thisWeekScore[ruleSet].rank -
                        lastWeekScore[ruleSet].rank}
                      )
                    </span>
                  </>
                );
              } else {
                return "(-)";
              }
            } else {
              return "(-)";
            }
          }

          const { team } = thisWeekScore;

          const players = [...team.players].concat(
            team.swap && team.swap.week <= currentWeek
              ? [team.swap.playerIn]
              : []
          );
          const activePlayers = players.filter((player) => {
            const playerScore = playerRankings[currentWeek].find(
              (r) => r.player === player
            );

            return (
              playerScore &&
              !["eliminated", "jury"].includes(playerScore.status)
            );
          });

          return (
            <div
              key={team.name}
              className={`flex-item-card team-grid-container ${
                selectedTeam?.team === thisWeekScore.team && offcanvasShown
                  ? "active"
                  : ""
              }`}
              onClick={() => displayTeamDetails(thisWeekScore)}
            >
              <div style={styles.rankContainer}>
                <span style={styles.rank}>
                  {`#${thisWeekScore[ruleSet].rank}`}
                </span>
              </div>
              <div style={styles.teamName}>
                {team.name} <br />
                <span style={styles.captain}>
                  {captainNames(team)} ({stars(team.history.overallRating)})
                </span>
              </div>
              <div style={styles.points}>
                {thisWeekScore[ruleSet].total}
                <span style={styles.units}>pts</span>
              </div>
              <div style={styles.diff}>{getRankDiff()}</div>
              <div style={styles.diff}>{getScoreDiff()}</div>
              <div style={styles.divider}></div>
              <div style={styles.playerCount}>
                {activePlayers.length} active player
                {activePlayers.length !== 1 ? "s" : ""}
              </div>
              <div style={styles.placementHistory}>
                <PlacementChart
                  team={team}
                  currentWeek={currentWeek}
                  simple={true}
                ></PlacementChart>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      {firstPlaceGroup.length && (
        <div className="leaderboard-flex-container first-place-group">
          {teamFlexGroup(firstPlaceGroup)}
        </div>
      )}
      <div className="leaderboard-flex-container">
        {teamFlexGroup(remainingTeams)}
      </div>

      {selectedTeam && (
        <Sidebar
          shown={offcanvasShown}
          onHide={() => setOffcanvasShown(false)}
          teamScore={selectedTeam}
          currentWeek={currentWeek}
        ></Sidebar>
      )}
    </>
  );
}
