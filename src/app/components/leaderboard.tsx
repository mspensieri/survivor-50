"use client";

import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import Offcanvas from "react-bootstrap/Offcanvas";

import { TeamRankings } from "../providers/types";
import { TeamScore } from "../data/types";
import PlayerList from "./playerList";
import RuleSetContext from "../context/ruleSetContext";

const styles = {
  indicatorGreen: {
    fontSize: "10pt",
    color: "var(--green-indicator-color)",
  },
  indicatorRed: {
    fontSize: "10pt",
    color: "var(--red-indicator-color)",
  },
  medals: {
    fontSize: "17pt",
    filter: "var(--upside-down-image-filter)",
  },
  captain: {
    fontSize: "8pt",
    color: "var(--player-caption-color)",
  },
  row: {
    lineHeight: "1",
  },
};

export default function Leaderboard(props: {
  thisWeekRankings: TeamRankings;
  lastWeekRankings: TeamRankings;
  currentWeek: number;
}) {
  const { thisWeekRankings = [], lastWeekRankings = [], currentWeek } = props;
  const ruleSet = useContext(RuleSetContext);

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

  return (
    <>
      <Table striped responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {...thisWeekRankings.map((thisWeekScore) => {
            const lastWeekScore = lastWeekRankings?.find(
              (r) => r.team === thisWeekScore.team
            );

            function getScore() {
              if (lastWeekScore) {
                if (
                  thisWeekScore[ruleSet].total > lastWeekScore[ruleSet].total
                ) {
                  return (
                    <>
                      {thisWeekScore[ruleSet].total}{" "}
                      <span style={styles.indicatorGreen}>
                        (+
                        {thisWeekScore[ruleSet].total -
                          lastWeekScore[ruleSet].total}
                        )
                      </span>
                    </>
                  );
                } else {
                  return <>{thisWeekScore[ruleSet].total || "-"}</>;
                }
              } else {
                return <>{thisWeekScore[ruleSet].total || "-"}</>;
              }
            }

            let rank;
            if (lastWeekScore) {
              if (thisWeekScore[ruleSet].rank < lastWeekScore[ruleSet].rank) {
                rank = (
                  <td>
                    #{thisWeekScore[ruleSet].rank + 1}{" "}
                    <span style={styles.indicatorGreen}>
                      (▲{" "}
                      {lastWeekScore[ruleSet].rank -
                        thisWeekScore[ruleSet].rank}
                      )
                    </span>
                  </td>
                );
              } else if (
                thisWeekScore[ruleSet].rank > lastWeekScore[ruleSet].rank
              ) {
                rank = (
                  <td>
                    #{thisWeekScore[ruleSet].rank + 1}{" "}
                    <span style={styles.indicatorRed}>
                      (▼{" "}
                      {thisWeekScore[ruleSet].rank -
                        lastWeekScore[ruleSet].rank}
                      )
                    </span>
                  </td>
                );
              } else {
                rank = <td>#{thisWeekScore[ruleSet].rank + 1}</td>;
              }
            } else {
              rank = <td>#{thisWeekScore[ruleSet].rank + 1}</td>;
            }

            let medals;
            if (thisWeekScore.team.accolades) {
              const { first, second, third } = thisWeekScore.team.accolades;

              const medalsString = [
                first && "🥇".repeat(first.length),
                second && "🥈".repeat(second.length),
                third && "🥉".repeat(third.length),
              ]
                .filter((a) => a)
                .join("");

              medals = (
                <span>
                  {" "}
                  (<span style={styles.medals}>{medalsString}</span>)
                </span>
              );
            }

            return (
              <tr key={thisWeekScore.team.name}>
                {rank}
                <td
                  style={styles.row}
                  onClick={() => displayTeamDetails(thisWeekScore)}
                >
                  {thisWeekScore.team.name}
                  {medals}
                  <br />
                  <span style={styles.captain}>
                    {thisWeekScore.team.captain}
                  </span>
                </td>
                <td>{getScore()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Offcanvas
        show={offcanvasShown}
        onHide={() => setOffcanvasShown(false)}
        placement="end"
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Team stats</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedTeam && (
            <>
              <h1>{selectedTeam.team.name}</h1>
              <h3>{selectedTeam.team.captain}</h3>
              Rank: #
              {selectedTeam &&
                thisWeekRankings.findIndex(
                  (r) => r.team === selectedTeam.team
                ) + 1}
              <PlayerList
                currentWeek={currentWeek}
                teamScore={selectedTeam}
              ></PlayerList>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
