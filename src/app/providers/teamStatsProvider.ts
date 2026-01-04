import { Player, Team } from "../data/types";
import {
  computePlayerScore,
  computeUpsideDownPlayerScore,
} from "./playerStatsProvider";

function computeScore(
  team: Team,
  weekNumber: number,
  computeFn: (player: Player, week: number) => number
) {
  let score = 0;
  let fullTimePlayers = [...team.players];

  if (team.swap && weekNumber >= team.swap.week) {
    fullTimePlayers.splice(fullTimePlayers.indexOf(team.swap.playerOut), 1);

    score += computeFn(team.swap.playerIn, weekNumber);
    score += computeFn(team.swap.playerOut, team.swap.week);
    score -= computeFn(team.swap.playerIn, team.swap.week - 1);
  }

  for (const player of fullTimePlayers) {
    score += computeFn(player, weekNumber);
  }

  return score;
}

export function computeTeamScore(team: Team, weekNumber: number) {
  return computeScore(team, weekNumber, (p, w) =>
    computePlayerScore(p, w, "total")
  );
}

export function computeUpsideDownTeamScore(team: Team, weekNumber: number) {
  return computeScore(team, weekNumber, (p, w) =>
    computeUpsideDownPlayerScore(p, w)
  );
}
