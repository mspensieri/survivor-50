"use client";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

import {
  PlayerRankings,
  TeamRankings,
  UpsideDownPlayerRankings,
} from "../providers/types";
import { airDates } from "../data/weeks";
import { SWAP_DEADLINE } from "../data/teams";

const styles: Record<string, React.CSSProperties> = {
  indicatorGreenLarge: {
    fontSize: "12pt",
    color: "var(--green-indicator-color)",
  },
  cardNumber: {
    fontSize: "40pt",
    marginTop: "-5px",
    filter: "var(--upside-down-image-filter)",
  },
  accolades: {
    textAlign: "center",
    position: "absolute",
    right: "10px",
    top: "20px",
    fontSize: "12pt",
    lineHeight: "1",
    fontWeight: "400",
  },
  medalContainer: {
    backgroundColor: "var(--medal-background-color)",
    borderRadius: "5px",
    padding: "5px",
    paddingTop: "10px",
    marginRight: "5px",
  },
  medal: {
    fontSize: "17pt",
    filter: "var(--upside-down-image-filter)",
  },
  playerEliminated: {
    textDecoration: "line-through",
    color: "var(--red-indicator-color)",
  },
  card: {
    minHeight: "270px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  teamName: {
    fontSize: "20pt",
    marginBottom: "20px",
  },
  teamNameSmall: {
    fontSize: "17pt",
    paddingBottom: "5px",
    marginBottom: "20px",
  },
};

class Teams extends React.Component<{
  thisWeekRankings: TeamRankings;
  playerRankings: Array<PlayerRankings> | Array<UpsideDownPlayerRankings>;
  currentWeek: number;
}> {
  render() {
    const {
      thisWeekRankings = [],
      playerRankings = [],
      currentWeek,
    } = this.props;

    return (
      <Row style={{ marginTop: "10px" }}>
        {...thisWeekRankings.map((teamScore) => {
          let accoladesComponent;
          const { team } = teamScore;
          const players = [...team.players].concat(
            team.swap ? [team.swap.playerIn] : []
          );

          if (team.accolades) {
            const { first, second, third } = team.accolades;
            accoladesComponent = (
              <div style={styles.accolades}>
                {first && (
                  <span style={styles.medalContainer}>
                    <span style={styles.medal}>🥇</span>S{first.join(", ")}
                  </span>
                )}
                {second && (
                  <span style={styles.medalContainer}>
                    <span style={styles.medal}>🥈</span>S{second.join(", ")}
                  </span>
                )}
                {third && (
                  <span style={styles.medalContainer}>
                    <span style={styles.medal}>🥉</span>S{third.join(", ")}
                  </span>
                )}
              </div>
            );
          }

          return (
            <Col key={team.name} xs={12} sm={6} md={4} lg={3}>
              <Card style={styles.card}>
                {accoladesComponent}
                <Card.Body>
                  <Card.Title style={styles.cardNumber}>
                    {teamScore.rank === 0 ? "👑" : `#${teamScore.rank + 1}`}{" "}
                  </Card.Title>
                  <Card.Title
                    style={
                      team.name.length > 21
                        ? styles.teamNameSmall
                        : styles.teamName
                    }
                  >
                    {team.name}
                  </Card.Title>
                  <hr />
                  {...players
                    .map((player) => {
                      if (team.swap?.playerIn === player) {
                        return {
                          player,
                          scoreForTeam:
                            playerRankings[currentWeek].find(
                              (r) => r.player === player
                            )!.total -
                            playerRankings[team.swap.week - 1]?.find(
                              (r) => r.player === player
                            )!.total,
                        };
                      } else if (team.swap?.playerOut === player) {
                        return {
                          player,
                          scoreForTeam: playerRankings[
                            team.swap.week - 1
                          ]?.find((r) => r.player === player)!.total,
                        };
                      } else {
                        return {
                          player,
                          scoreForTeam: playerRankings[currentWeek].find(
                            (r) => r.player === player
                          )!.total,
                        };
                      }
                    })
                    .sort(
                      (a, b) => (b.scoreForTeam || 0) - (a.scoreForTeam || 0)
                    )
                    .map(({ player, scoreForTeam: score }, j) => {
                      const playerScore = playerRankings[currentWeek].find(
                        (r) => r.player === player
                      )!;

                      return (
                        <Card.Text key={j}>
                          {player === teamScore.team.winner ? (
                            <span style={styles.indicatorGreenLarge}>[W] </span>
                          ) : (
                            ""
                          )}
                          {["eliminated", "jury"].includes(
                            playerScore.status
                          ) ? (
                            <span style={styles.playerEliminated}>
                              {player.name}
                            </span>
                          ) : (
                            player.name
                          )}{" "}
                          ({score || 0})
                        </Card.Text>
                      );
                    })}
                  {team.swap ? (
                    <>
                      <hr />
                      <Card.Text>
                        {team.swap.playerOut.name} ➔ {team.swap.playerIn.name} (
                        {airDates[team.swap.week]})
                      </Card.Text>
                    </>
                  ) : (
                    <>
                      <Card.Text>&nbsp;</Card.Text>
                      <hr />
                      <Card.Text>
                        {currentWeek > SWAP_DEADLINE
                          ? "Swap expired"
                          : "Swap available"}
                      </Card.Text>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Teams;
