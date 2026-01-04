import { Player, PlayerStatus, RuleSet } from "../data/types";
import { airDates, weeks } from "../data/weeks";

export function computePlayerTotal(
  player: Player,
  weekNumber: number,
  ruleSet: RuleSet
) {
  let score = 0;

  for (const week of weeks.slice(0, weekNumber + 1)) {
    const scoreForWeek = week[player.key];

    if (!scoreForWeek) {
      continue;
    }

    for (const scoreValue of Object.values(scoreForWeek[ruleSet] || {})) {
      score += scoreValue;
    }
  }

  return score;
}

export function computePlayerPoints(
  player: Player,
  weekNumber: number,
  ruleSet: RuleSet
) {
  const points: Record<string, number> = {};

  for (const week of weeks.slice(0, weekNumber + 1)) {
    const scoreForWeek = week[player.key];

    if (!scoreForWeek) {
      continue;
    }

    const pointsForWeek = scoreForWeek[ruleSet] || {};

    for (const [key, value] of Object.entries(pointsForWeek)) {
      points[key] = (points[key] || 0) + value;
    }
  }

  return points;
}

export function computePlayerStatus(
  player: Player,
  weekNumber: number
): PlayerStatus {
  const precedingWeeks = weeks.slice(0, weekNumber + 1);
  const eliminated = precedingWeeks.some((week) =>
    week.eliminated?.includes(player.key)
  );
  const inJury = precedingWeeks.some((week) => week.jury?.includes(player.key));

  if (eliminated) {
    return "eliminated";
  } else if (inJury) {
    return "jury";
  } else if (weekNumber === airDates.length - 1) {
    return "winner";
  } else {
    return "active";
  }
}
