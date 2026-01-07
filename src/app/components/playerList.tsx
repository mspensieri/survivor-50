"use client";

import React, { useContext } from "react";

import { TeamScore } from "../data/types";
import RuleSetContext from "../context/ruleSetContext";
import PlayerContext from "../context/playerContext";

const styles: Record<string, React.CSSProperties> = {
  indicatorGreenLarge: {
    fontSize: "12pt",
    color: "var(--green-indicator-color)",
  },
  playerEliminated: {
    textDecoration: "line-through",
    color: "var(--red-indicator-color)",
  },
};

export default function PlayerList(props: {
  currentWeek: number;
  teamScore: TeamScore;
}) {
  const { currentWeek, teamScore } = props;
  const { team } = teamScore;

  const ruleSet = useContext(RuleSetContext);
  const playerRankings = useContext(PlayerContext);

  const swapInPlay = team.swap && team.swap.week <= currentWeek;
  const players = [...team.players].concat(
    swapInPlay ? [team.swap!.playerIn] : []
  );

  return (
    <>
      {...players
        .map((player) => {
          if (swapInPlay && team.swap!.playerIn === player) {
            return {
              player,
              scoreForTeam:
                playerRankings[currentWeek].find((r) => r.player === player)![
                  ruleSet
                ].total -
                playerRankings[team.swap!.week - 1]?.find(
                  (r) => r.player === player
                )![ruleSet].total,
            };
          } else if (swapInPlay && team.swap!.playerOut === player) {
            return {
              player,
              scoreForTeam: playerRankings[team.swap!.week - 1]?.find(
                (r) => r.player === player
              )![ruleSet].total,
            };
          } else {
            return {
              player,
              scoreForTeam: playerRankings[currentWeek].find(
                (r) => r.player === player
              )![ruleSet].total,
            };
          }
        })
        .sort((a, b) => (b.scoreForTeam || 0) - (a.scoreForTeam || 0))
        .map(({ player, scoreForTeam: score }, j) => {
          const playerScore = playerRankings[currentWeek].find(
            (r) => r.player === player
          )!;

          return (
            <div key={j}>
              {player === teamScore.team.winner ? (
                <span style={styles.indicatorGreenLarge}>[W] </span>
              ) : (
                ""
              )}
              {["eliminated", "jury"].includes(playerScore.status) ? (
                <span style={styles.playerEliminated}>{player.name}</span>
              ) : (
                player.name
              )}{" "}
              ({score || 0})
            </div>
          );
        })}
    </>
  );
}
