"use client";

import Badge from "react-bootstrap/Badge";
import React, { useContext } from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

import { PlayerRankings } from "../providers/types";
import { PlayerScore, RuleSet, Team } from "../data/types";
import RuleSetContext from "../context/ruleSetContext";

const styles: Record<string, React.CSSProperties> = {
  badge: { width: "90px", position: "absolute", top: "16px", right: "16px" },
  indicatorGreen: {
    fontSize: "10pt",
    color: "var(--green-indicator-color)",
  },
  indicatorRed: {
    fontSize: "10pt",
    color: "var(--red-indicator-color)",
  },
  indicatorNeutral: {
    fontSize: "10pt",
  },
  avatar: {
    borderRadius: "12px",
    marginTop: "20px",
    marginLeft: "16px",
    filter: "var(--upside-down-image-filter)",
    transform: "var(--upside-down-image-transform)",
  },
  name: {
    fontSize: "25pt",
    marginLeft: "16px",
  },
  units: {
    fontSize: "10pt",
  },
  details: {
    position: "absolute",
    top: "74px",
    left: "145px",
  },
  hr: {
    margin: "16px",
    marginTop: "4px",
    marginBottom: "10px",
  },
  leftCard: {
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    minHeight: "215px",
  },
  leftCardSmall: {
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",
    marginBottom: "0px",
    minHeight: "215px",
  },
  rightCard: {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    borderLeft: "0px",
    minHeight: "215px",
  },
  rightCardSmall: {
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "0px",
    borderTop: "0px",
    marginTop: "0px",
  },
  scoreLabel: {
    color: "var(--score-label-color-override)",
    fontWeight: "var(--score-label-font-weight-override)",
  },
  popularityEmoji: {
    filter: "var(--upside-down-image-filter)",
  },
};

const PointStringMap: Record<string, string> = {
  survival: "Survived",
  votes: "Correct votes",
  teamImmunity: "Immunity (team)",
  individualImmunity: "Immunity (indiv.)",
  advantage: "Advantage",
  idolFound: "Idol found",
  voteNullified: "Votes nullified",
  placement: "Jury placement",
  fire: "Fire",
  losingTeam: "Losing team",
  abysmalChallenge: "Abysmal challenge",
  crying: "Random crying",
  wrongVote: "Voted wrong",
  blindsided: "Blindsided at tribal",
  outFirst: "Voted out first",
  outPreMerge: "Voted out pre-merge",
  outPostMerge: "Voted out post-merge",
  medEvac: "Med evac pre-merge",
  threatenedToQuit: "Threatening to quit",
  vomit: "Vomit",
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

function getScoreElement(
  thisWeekPoints: number = 0,
  lastWeekPoints: number | undefined
) {
  if (typeof lastWeekPoints !== "undefined") {
    if (thisWeekPoints > lastWeekPoints) {
      return (
        <span>
          {thisWeekPoints}
          <span style={styles.units}>pts</span>{" "}
          <span style={styles.indicatorGreen}>
            (+{thisWeekPoints - lastWeekPoints})
          </span>
        </span>
      );
    } else {
      return (
        <span>
          {thisWeekPoints}
          <span style={styles.units}>pts</span>{" "}
          <span style={styles.indicatorNeutral}>(-)</span>
        </span>
      );
    }
  } else {
    return (
      <span>
        {thisWeekPoints}
        <span style={styles.units}>pts</span>
      </span>
    );
  }
}

function getDetailsView(
  ruleSet: RuleSet,
  thisWeekScore: PlayerScore,
  lastWeekScore?: PlayerScore
) {
  return (
    <>
      {thisWeekScore[ruleSet].total! === 0 && <>No points earned yet :(</>}

      {...Object.entries(PointStringMap).map(([key, label]) => {
        const pointsThisWeek = thisWeekScore[ruleSet].points as any;
        const pointsLastWeek = lastWeekScore?.[ruleSet].points as any;

        return (
          pointsThisWeek[key] > 0 && (
            <>
              <span style={styles.scoreLabel}>{label}: </span>
              {getScoreElement(
                pointsThisWeek[key],
                pointsLastWeek && (pointsLastWeek[key] || 0)
              )}
              <br />
            </>
          )
        );
      })}
    </>
  );
}

export default function Scores(props: {
  thisWeekRankings?: PlayerRankings;
  lastWeekRankings?: PlayerRankings;
  teams: Array<Team>;
  isSmallScreen: boolean;
  screenWidth: number;
}) {
  const {
    thisWeekRankings,
    lastWeekRankings,
    teams,
    isSmallScreen,
    screenWidth,
  } = props;

  const ruleSet = useContext(RuleSetContext);

  return (
    <Container>
      {...(thisWeekRankings || []).map((thisWeekScore) => {
        const lastWeekScore = lastWeekRankings?.find(
          (p) => p.player === thisWeekScore.player
        );

        let rank;

        if (lastWeekScore && lastWeekScore[ruleSet]) {
          if (thisWeekScore[ruleSet].rank < lastWeekScore[ruleSet].rank) {
            rank = (
              <span>
                #{thisWeekScore[ruleSet].rank}{" "}
                <span style={styles.indicatorGreen}>
                  (▲ {lastWeekScore[ruleSet].rank - thisWeekScore[ruleSet].rank}
                  )
                </span>
              </span>
            );
          } else if (
            thisWeekScore[ruleSet].rank > lastWeekScore[ruleSet].rank
          ) {
            rank = (
              <span>
                #{thisWeekScore[ruleSet].rank}{" "}
                <span style={styles.indicatorRed}>
                  (▼ {thisWeekScore[ruleSet].rank - lastWeekScore[ruleSet].rank}
                  )
                </span>
              </span>
            );
          } else {
            rank = (
              <span>
                #{thisWeekScore[ruleSet].rank}{" "}
                <span style={styles.indicatorNeutral}>(-)</span>
              </span>
            );
          }
        } else {
          rank = <span>#{thisWeekScore[ruleSet].rank}</span>;
        }

        const popularity = teams.reduce((acc, curr) => {
          return curr.players.includes(thisWeekScore.player) ? acc + 1 : acc;
        }, 0);

        const popularityEmoji =
          popularity >= 17
            ? "⭐️"
            : popularity >= 13
            ? "🔥"
            : popularity >= 11
            ? "👍"
            : "☘️";

        return (
          <Row
            key={thisWeekScore.player.name}
            className="justify-content-center gx-0"
          >
            <Col xs={12} lg={9} xl={8} xxl={7}>
              <Row className="justify-content-center gx-0">
                <Col xs={12} md={6}>
                  <Card
                    style={
                      screenWidth < 768 ? styles.leftCardSmall : styles.leftCard
                    }
                  >
                    <div>
                      <span style={styles.name}>
                        {thisWeekScore.player.name}
                      </span>
                      <hr style={styles.hr} />
                      <img
                        src={`${thisWeekScore.player.name.toLowerCase()}.jpg`}
                        alt={thisWeekScore.player.name}
                        width={115}
                        height={115}
                        style={styles.avatar}
                      ></img>
                      <div style={styles.details}>
                        <br />
                        <strong style={styles.scoreLabel}>Rank: </strong>
                        {rank}
                        <br />
                        <strong style={styles.scoreLabel}>Total: </strong>{" "}
                        {getScoreElement(
                          thisWeekScore[ruleSet].total,
                          lastWeekScore?.[ruleSet]?.total
                        )}
                        <br />
                        <strong style={styles.scoreLabel}>Popularity: </strong>
                        {popularity} <span style={styles.units}> teams</span>{" "}
                        <span style={styles.popularityEmoji}>
                          {popularityEmoji}
                        </span>
                      </div>
                      {getBadge(thisWeekScore)}
                    </div>
                  </Card>
                </Col>
                <Col xs={12} md={5}>
                  <Card
                    style={
                      screenWidth < 768
                        ? styles.rightCardSmall
                        : styles.rightCard
                    }
                  >
                    <div>
                      <Card.Body>
                        {isSmallScreen ? (
                          <Accordion flush className="player-details-accordion">
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Show details</Accordion.Header>
                              <Accordion.Body>
                                {getDetailsView(
                                  ruleSet,
                                  thisWeekScore,
                                  lastWeekScore
                                )}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        ) : (
                          getDetailsView(ruleSet, thisWeekScore, lastWeekScore)
                        )}
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
