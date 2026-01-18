"use client";

import React, { useContext, useState } from "react";

import { TeamRankings } from "../providers/types";
import { TeamScore } from "../data/types";
import RuleSetContext from "../context/ruleSetContext";
import PlayerContext from "../context/playerContext";
import PlacementChart from "./placementChart";
import Sidebar from "./sidebar";
import { captainNames, stars } from "../utils/format";

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      style={{ display: "inline" }}
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
    borderRadius: "var(--border-radius-standard)",
    backgroundColor: "var(--component-background-color-secondary)",
  },
  placementHistory: {
    paddingTop: "8px",
    gridColumn: "span 2",
    justifySelf: "end",
    marginRight: "-4px",
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
  screenWidth: number;
}) {
  const {
    lastWeekRankings = [],
    thisWeekRankings = [],
    currentWeek,
    screenWidth,
  } = props;
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
                {activePlayers.map((_, i) => (
                  <UserIcon key={i} />
                ))}
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

  function sizeForSegments(segmentCount: number) {
    const segmentWidth = 350;
    const segmentMargin = 15;

    const elementWidth =
      segmentCount * segmentWidth +
      2 * segmentMargin +
      segmentMargin * (segmentCount - 1);

    if (segmentCount === 1) {
      return Math.min(screenWidth - 2 * segmentMargin, elementWidth);
    } else {
      return elementWidth;
    }
  }

  let numberOfSegments = 1;
  for (let i = 1; i <= 10; i++) {
    if (screenWidth <= sizeForSegments(i + 1)) {
      numberOfSegments = i;
      break;
    }
  }

  return (
    <>
      {firstPlaceGroup.length && (
        <div
          className="leaderboard-flex-container first-place-group"
          style={{
            maxWidth: sizeForSegments(numberOfSegments),
          }}
        >
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
