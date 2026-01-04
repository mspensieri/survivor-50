"use client";

import Badge from "react-bootstrap/Badge";
import React from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

import { PlayerRankings, UpsideDownPlayerRankings } from "../providers/types";
import { PlayerScore, Team, UpsideDownPlayerScore } from "../data/types";

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
  },
  popularityEmoji: {
    filter: "var(--upside-down-image-filter)",
  },
};

class Scores extends React.Component<{
  thisWeekRankings?: PlayerRankings;
  lastWeekRankings?: PlayerRankings;
  thisWeekUpsideDownRankings?: UpsideDownPlayerRankings;
  lastWeekUpsideDownRankings?: UpsideDownPlayerRankings;
  teams: Array<Team>;
  isSmallScreen: boolean;
  screenWidth: number;
}> {
  getBadge(playerScore: PlayerScore | UpsideDownPlayerScore) {
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

  getScoreElement(
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

  getDetailsView(thisWeekScore: PlayerScore, lastWeekScore?: PlayerScore) {
    return (
      <>
        {thisWeekScore.total! === 0 && <>No points earned yet :(</>}
        {thisWeekScore.points.survival! > 0 && (
          <>
            <strong>Survived: </strong>
            {this.getScoreElement(
              thisWeekScore.points.survival,
              lastWeekScore?.points.survival
            )}
            <br />
          </>
        )}
        {thisWeekScore.points.votes! > 0 && (
          <>
            <strong>Correct votes: </strong>
            {this.getScoreElement(
              thisWeekScore.points.votes,
              lastWeekScore?.points.votes
            )}
            <br />
          </>
        )}
        {thisWeekScore.points.teamImmunity! > 0 && (
          <>
            <strong>Immunity (team): </strong>
            {this.getScoreElement(
              thisWeekScore.points.teamImmunity,
              lastWeekScore?.points.teamImmunity
            )}
            <br />
          </>
        )}
        {thisWeekScore.points.individualImmunity! > 0 && (
          <>
            <strong>Immunity (indiv.): </strong>
            {this.getScoreElement(
              thisWeekScore.points.individualImmunity,
              lastWeekScore?.points.individualImmunity
            )}
            <br />
          </>
        )}
        {thisWeekScore.points.advantage! > 0 && (
          <>
            <strong>Advantage: </strong>
            {this.getScoreElement(
              thisWeekScore.points.advantage,
              lastWeekScore?.points.advantage
            )}
            <br />
          </>
        )}
        {thisWeekScore.points.idolFound! > 0 && (
          <>
            <strong>Idol found: </strong>
            {this.getScoreElement(
              thisWeekScore.points.idolFound,
              lastWeekScore?.points.idolFound
            )}
            <br />
          </>
        )}
        {thisWeekScore.points.voteNullified! > 0 && (
          <>
            <strong>Votes nullified: </strong>
            {this.getScoreElement(
              thisWeekScore.points.voteNullified,
              lastWeekScore?.points.voteNullified
            )}
            <br />
          </>
        )}
        {thisWeekScore.points.placement! > 0 && (
          <>
            <strong>Jury placement: </strong>
            {this.getScoreElement(
              thisWeekScore.points.placement,
              lastWeekScore?.points.placement
            )}
            <br />
          </>
        )}
        {thisWeekScore.points.fire! > 0 && (
          <>
            <strong>Fire: </strong>
            {this.getScoreElement(
              thisWeekScore.points.fire,
              lastWeekScore?.points.fire
            )}
          </>
        )}
      </>
    );
  }

  getUpsideDownDetailsView(
    thisWeekScore: UpsideDownPlayerScore,
    lastWeekScore?: UpsideDownPlayerScore
  ) {
    return (
      <>
        {thisWeekScore.total! === 0 && <>No points earned yet :(</>}
        {thisWeekScore.achievements.map((a, index) => {
          const lastWeekAchievementScore = lastWeekScore?.achievements.find(
            (la) => la.reason === a.reason
          );

          return (
            <React.Fragment key={index}>
              <span style={styles.scoreLabel}>{a.reason}: </span>
              {this.getScoreElement(
                a.points,
                lastWeekScore
                  ? lastWeekAchievementScore?.points || 0
                  : undefined
              )}
              <br />
            </React.Fragment>
          );
        })}
      </>
    );
  }

  render() {
    const {
      thisWeekRankings,
      lastWeekRankings,
      thisWeekUpsideDownRankings,
      lastWeekUpsideDownRankings,
      teams,
      isSmallScreen,
      screenWidth,
    } = this.props;

    return (
      <Container>
        {...(thisWeekRankings || thisWeekUpsideDownRankings || []).map(
          (thisWeekScore) => {
            const lastWeekScore =
              lastWeekRankings?.find(
                (p) => p.player === thisWeekScore.player
              ) ||
              lastWeekUpsideDownRankings?.find(
                (p) => p.player === thisWeekScore.player
              );

            let rank;

            if (lastWeekScore) {
              if (thisWeekScore.rank < lastWeekScore.rank) {
                rank = (
                  <span>
                    #{thisWeekScore.rank + 1}{" "}
                    <span style={styles.indicatorGreen}>
                      (▲ {lastWeekScore.rank - thisWeekScore.rank})
                    </span>
                  </span>
                );
              } else if (thisWeekScore.rank > lastWeekScore.rank) {
                rank = (
                  <span>
                    #{thisWeekScore.rank + 1}{" "}
                    <span style={styles.indicatorRed}>
                      (▼ {thisWeekScore.rank - lastWeekScore.rank})
                    </span>
                  </span>
                );
              } else {
                rank = <span>#{thisWeekScore.rank + 1}</span>;
                rank = (
                  <span>
                    #{thisWeekScore.rank + 1}{" "}
                    <span style={styles.indicatorNeutral}>(-)</span>
                  </span>
                );
              }
            } else {
              rank = <span>#{thisWeekScore.rank + 1}</span>;
            }

            const popularity = teams.reduce((acc, curr) => {
              return curr.players.includes(thisWeekScore.player)
                ? acc + 1
                : acc;
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
                          screenWidth < 768
                            ? styles.leftCardSmall
                            : styles.leftCard
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
                            <strong style={styles.scoreLabel}>
                              Total:{" "}
                            </strong>{" "}
                            {this.getScoreElement(
                              thisWeekScore.total,
                              lastWeekScore?.total
                            )}
                            <br />
                            <strong style={styles.scoreLabel}>
                              Popularity:{" "}
                            </strong>
                            {popularity}{" "}
                            <span style={styles.units}> teams</span>{" "}
                            <span style={styles.popularityEmoji}>
                              {popularityEmoji}
                            </span>
                          </div>
                          {this.getBadge(thisWeekScore)}
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
                              <Accordion
                                flush
                                className="player-details-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Show details
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    {"points" in thisWeekScore
                                      ? this.getDetailsView(
                                          thisWeekScore,
                                          lastWeekScore as
                                            | PlayerScore
                                            | undefined
                                        )
                                      : this.getUpsideDownDetailsView(
                                          thisWeekScore,
                                          lastWeekScore as
                                            | UpsideDownPlayerScore
                                            | undefined
                                        )}
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            ) : "points" in thisWeekScore ? (
                              this.getDetailsView(
                                thisWeekScore,
                                lastWeekScore as PlayerScore | undefined
                              )
                            ) : (
                              this.getUpsideDownDetailsView(
                                thisWeekScore,
                                lastWeekScore as
                                  | UpsideDownPlayerScore
                                  | undefined
                              )
                            )}
                          </Card.Body>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            );
          }
        )}
      </Container>
    );
  }
}

export default Scores;
