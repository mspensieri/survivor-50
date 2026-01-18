"use client";

import Badge from "react-bootstrap/Badge";
import React, { useContext } from "react";

import { PlayerRankings } from "../providers/types";
import { Player, PlayerScore, Team, PlayerTribes } from "../data/types";
import RuleSetContext from "../context/ruleSetContext";
import { players } from "../data/players";

const styles: Record<string, React.CSSProperties> = {
  badgeContainer: { width: "100%" },
  badge: {
    width: "100%",
    lineHeight: "inherit",
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  indicatorGreen: {
    color: "var(--green-indicator-color)",
  },
  indicatorRed: {
    color: "var(--red-indicator-color)",
  },
  smallText: {
    fontSize: "10pt",
  },
  notQuiteTinyText: { fontSize: "9pt" },
  tinyText: {
    fontSize: "8pt",
  },
  tribeDetailsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "10px",
    paddingBottom: "5px",
    borderBottom: "1px solid var(--component-text-color-secondary)",
  },
  tribeName: {
    fontSize: "16pt",
  },
  tribeColorIndicator: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    border: "2px solid var(--component-text-color-primary)",
  },
  legend: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "15px",
    padding: "10px",
    gap: "15px",
    backgroundColor: "var(--component-background-color-primary)",
    width: "fit-content",
    fontSize: "10pt",
  },
  playersGroup: {
    gap: "15px",
    marginBottom: "15px",
  },
  playerCard: {
    maxWidth: "350px",
    border: "none",
  },
  playerCardHeader: {
    gridTemplateRows: "25px 15px",
    gridTemplateColumns: "44px auto 44px",
    marginBottom: "10px",
    paddingTop: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderTopLeftRadius: "var(--border-radius-standard)",
    borderTopRightRadius: "var(--border-radius-standard)",
  },
  rank: {
    fontSize: "12pt",
    padding: "0px 6px",
    borderRadius: "var(--border-radius-standard)",
    backgroundColor: "var(--component-background-color-secondary)",
  },
  playerName: {
    fontSize: "14pt",
    textAlign: "center",
    justifySelf: "center",
    alignSelf: "center",
  },
  playerCardBody: {
    marginBottom: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  avatarImg: { borderRadius: "var(--border-radius-rounded)" },
  tableContainer: {
    marginBottom: "0px",
    paddingLeft: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  table: {
    marginBottom: "0px",
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  tableHeader: {
    height: "25px",
  },
  tableBody: { verticalAlign: "bottom", height: "25px" },
  historyContainer: {
    borderLeft: "1px solid var(--component-text-color-secondary)",
  },
  playerCardFooter: { marginBottom: "5px" },
};

const tribeColors = {
  [PlayerTribes.ORANGE]: "#fe9824",
  [PlayerTribes.PURPLE]: "#8246fa",
  [PlayerTribes.TEAL]: "#46d1db",
};

const tribeGroups: Record<PlayerTribes, Player[]> = players.reduce(
  (acc, player) => {
    const { tribe } = player;
    if (!acc[tribe]) {
      acc[tribe] = [];
    }
    acc[tribe].push(player);
    return acc;
  },
  {} as Record<PlayerTribes, Player[]>
);
const PointStringMap: Record<string, string> = {
  survival: "Survived",
  votes: "Correct votes",
  teamImmunity: "Immunity (team)",
  individualImmunity: "Immunity (indiv.)",
  advantage: "Advantage",
  idolFound: "Idol found",
  voteNullified: "Votes nullified",
  fire: "Fire",
  placement: "Jury placement",
};

function getBadge(playerScore: PlayerScore) {
  if (playerScore.status === "eliminated") {
    return (
      <Badge bg="danger" style={styles.badge}>
        Eliminated
      </Badge>
    );
  } else if (playerScore.status === "jury") {
    return (
      <Badge bg="info" style={styles.badge}>
        Jury
      </Badge>
    );
  } else if (playerScore.status === "winner") {
    return (
      <Badge bg="success" style={styles.badge}>
        Winner
      </Badge>
    );
  } else {
    return (
      <Badge bg="secondary" style={styles.badge}>
        Active
      </Badge>
    );
  }
}

function getRankDiff(rank: number, lastRank: number = 0) {
  if (lastRank) {
    if (rank < lastRank) {
      return (
        <>
          <span style={styles.indicatorGreen}>(▲ {lastRank - rank})</span>
        </>
      );
    } else if (rank > lastRank) {
      return (
        <>
          <span style={styles.indicatorRed}>(▼ {rank - lastRank})</span>
        </>
      );
    } else {
      return "(-)";
    }
  } else {
    return "(-)";
  }
}

function getScoreDiff(
  score: number,
  lastScore: number = 0,
  useBrackets: boolean = true
) {
  const scoreDiff = score - lastScore;

  if (scoreDiff > 0) {
    const scoreString = useBrackets ? `(+${scoreDiff})` : `+${scoreDiff}`;

    return (
      <>
        <span style={styles.indicatorGreen}>{scoreString}</span>
      </>
    );
  } else {
    return useBrackets ? "(-)" : "-";
  }
}

export default function Scores(props: {
  thisWeekRankings: PlayerRankings;
  lastWeekRankings?: PlayerRankings;
  teams: Array<Team>;
  hideSpoilers?: boolean;
}) {
  const { thisWeekRankings, lastWeekRankings, teams, hideSpoilers } = props;
  const ruleSet = useContext(RuleSetContext);

  return (
    <>
      <h1>Original Tribes</h1>
      <div className="tribes-flex-container">
        {...Object.entries(tribeGroups).map(([tribe, tribePlayers], i) => (
          <div key={i} className="tribe-container">
            <div style={styles.tribeDetailsContainer}>
              <div style={styles.tribeName}>{tribe}</div>
              <div
                style={{
                  ...styles.tribeColorIndicator,
                  backgroundColor: tribeColors[tribe as PlayerTribes],
                }}
              ></div>
            </div>
            <div className="tribe-members-flex-container">
              {...tribePlayers.map((player) => {
                const thisWeekScore = (thisWeekRankings || []).find(
                  (p) => p.player === player
                );

                const isActive =
                  thisWeekScore &&
                  ["active", "winner"].includes(thisWeekScore.status);

                return (
                  <img
                    key={player.key}
                    src={
                      hideSpoilers
                        ? "mystery-man.png"
                        : `${player.name.toLowerCase()}.jpg`
                    }
                    alt={player.name}
                    width={72}
                    height={72}
                    className={isActive || hideSpoilers ? "" : "eliminated"}
                  ></img>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <h1>Players</h1>
      <div
        className="flex flex-wrap items-center justify-center flex-item-card"
        style={styles.legend}
      >
        {...Object.keys(PointStringMap).map((key) => (
          <div key={key}>
            <img src={`${key}.svg`} style={{ margin: "auto" }}></img>
            {PointStringMap[key]}
          </div>
        ))}
      </div>

      <div
        className="flex flex-wrap items-center justify-center"
        style={styles.playersGroup}
      >
        {...(thisWeekRankings || []).map((score) => {
          const { player } = score;
          const lastWeekScore = lastWeekRankings?.find(
            (p) => p.player === score.player
          );

          const popularity = teams.reduce((acc, curr) => {
            return curr.players.includes(player) ? acc + 1 : acc;
          }, 0);

          return (
            <div
              key={player.name}
              className="flex-item-card"
              style={styles.playerCard}
            >
              <div
                className="grid"
                style={{
                  ...styles.playerCardHeader,
                  borderTop: `10px solid ${tribeColors[score.player.tribe]}`,
                }}
              >
                <div className="justify-self-center">
                  <div style={styles.rank}>#{score[ruleSet].rank}</div>
                </div>
                <div style={styles.playerName}>{player.name}</div>

                <div className="justify-self-center self-center text-center">
                  {score[ruleSet].total}
                  <span style={styles.smallText}>pts</span>
                </div>
                <div className="justify-self-center" style={styles.tinyText}>
                  {getRankDiff(
                    score[ruleSet].rank,
                    lastWeekScore?.[ruleSet].rank
                  )}
                </div>
                <div>{/* Empty div for spacing */}</div>
                <div className="justify-self-center" style={styles.tinyText}>
                  {getScoreDiff(
                    score[ruleSet].total,
                    lastWeekScore?.[ruleSet].total
                  )}
                </div>
              </div>
              <div className="flex flex-wrap" style={styles.playerCardBody}>
                <img
                  src={
                    hideSpoilers
                      ? "mystery-man.png"
                      : `${player.name.toLowerCase()}.jpg`
                  }
                  alt={player.name}
                  width={95}
                  height={95}
                  style={styles.avatarImg}
                ></img>
                <div className="flex-grow" style={styles.tableContainer}>
                  <table style={styles.table}>
                    <thead style={styles.tableHeader}>
                      <tr>
                        {...Object.keys(PointStringMap).map((key) => (
                          <th key={key}>
                            <img
                              src={`${key}.svg`}
                              style={{ margin: "auto" }}
                            ></img>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody style={styles.tableBody}>
                      <tr>
                        {...Object.keys(PointStringMap).map((key) => {
                          return (
                            <td key={key} style={styles.notQuiteTinyText}>
                              {getScoreDiff(
                                (score[ruleSet] as any).points?.[key] || 0,
                                (lastWeekScore?.[ruleSet].points as any)?.[
                                  key
                                ] || 0,
                                false
                              )}
                            </td>
                          );
                        })}
                      </tr>
                      <tr>
                        {...Object.keys(PointStringMap).map((key) => {
                          const points = score[ruleSet].points as any;
                          return (
                            <td key={key} style={styles.smallText}>
                              {points[key] || 0}
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid grid-cols-2" style={styles.playerCardFooter}>
                <div className="text-center">
                  <span style={styles.smallText}>{popularity} teams</span>
                </div>
                <div className="text-center" style={styles.historyContainer}>
                  <span style={styles.smallText}>{player.history}</span>
                </div>
              </div>
              <div style={styles.badgeContainer}>{getBadge(score)}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
