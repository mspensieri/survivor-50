import {
  Player,
  PlayerStatus,
  Points,
  UpsideDownAchievement,
} from "../data/types";
import { airDates, weeks } from "../data/weeks";

export function computePlayerScore(
  player: Player,
  weekNumber: number,
  scoreKey: keyof Omit<Points, "upsideDown"> | "total"
) {
  let score = 0;

  for (const week of weeks.slice(0, weekNumber + 1)) {
    if (scoreKey === "total") {
      score +=
        (week[player.key]?.survival || 0) +
        (week[player.key]?.votes || 0) +
        (week[player.key]?.teamImmunity || 0) +
        (week[player.key]?.individualImmunity || 0) +
        (week[player.key]?.advantage || 0) +
        (week[player.key]?.idolFound || 0) +
        (week[player.key]?.voteNullified || 0) +
        (week[player.key]?.placement || 0) +
        (week[player.key]?.fire || 0);
    } else {
      score += week[player.key]?.[scoreKey] || 0;
    }
  }

  return score;
}

export function computeUpsideDownPlayerScore(
  player: Player,
  weekNumber: number
) {
  const achievements = getPlayerUpsideDownAchievements(player, weekNumber);

  return achievements.reduce(
    (total, achievement) => total + achievement.points,
    0
  );
}

export function getPlayerUpsideDownAchievements(
  player: Player,
  weekNumber: number
): Array<UpsideDownAchievement> {
  let achievements: Array<UpsideDownAchievement> = [];

  for (const week of weeks.slice(0, weekNumber + 1)) {
    const achievementsThisWeek = week[player.key]?.upsideDown || [];

    for (const achievement of achievementsThisWeek) {
      const alreadyEarnedAchievement = achievements.find(
        (a) => a.reason === achievement.reason
      );

      if (alreadyEarnedAchievement) {
        alreadyEarnedAchievement.points += achievement.points;
      } else {
        achievements.push({
          ...achievement,
        });
      }
    }
  }

  return achievements;
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
