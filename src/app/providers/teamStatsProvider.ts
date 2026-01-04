import { RuleSet, Team } from "../data/types";
import { computePlayerTotal } from "./playerStatsProvider";

export function computeTeamScore(
  team: Team,
  weekNumber: number,
  ruleSet: RuleSet
) {
  let score = 0;
  let fullTimePlayers = [...team.players];

  if (team.swap && weekNumber >= team.swap.week) {
    fullTimePlayers.splice(fullTimePlayers.indexOf(team.swap.playerOut), 1);

    score += computePlayerTotal(team.swap.playerIn, weekNumber, ruleSet);
    score += computePlayerTotal(team.swap.playerOut, team.swap.week, ruleSet);
    score -= computePlayerTotal(
      team.swap.playerIn,
      team.swap.week - 1,
      ruleSet
    );
  }

  for (const player of fullTimePlayers) {
    score += computePlayerTotal(player, weekNumber, ruleSet);
  }

  return score;
}
