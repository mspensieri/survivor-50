"use client";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useContext } from "react";

import { PlayerRankings, TeamRankings } from "../providers/types";
import { airDates } from "../data/weeks";
import { SWAP_DEADLINE } from "../data/teams";
import PlayerList from "./playerList";
import RuleSetContext from "../context/ruleSetContext";

const styles: Record<string, React.CSSProperties> = {
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

export default function Teams(props: {
  thisWeekRankings: TeamRankings;
  playerRankings: Array<PlayerRankings>;
  currentWeek: number;
}) {
  const { thisWeekRankings = [], currentWeek } = props;
  const ruleSet = useContext(RuleSetContext);

  return (
    <Row style={{ marginTop: "10px" }}>
      {...thisWeekRankings.map((teamScore) => {
        let accoladesComponent;
        const { team } = teamScore;

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
                  {teamScore[ruleSet].rank === 0
                    ? "👑"
                    : `#${teamScore[ruleSet].rank + 1}`}{" "}
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
                <PlayerList
                  currentWeek={currentWeek}
                  teamScore={teamScore}
                ></PlayerList>
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
