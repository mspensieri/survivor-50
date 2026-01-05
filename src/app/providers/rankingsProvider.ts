import { Player, PlayerScore, RuleSet, Team, TeamScore } from "../data/types";
import { weeks } from "../data/weeks";
import {
  computePlayerPoints,
  computePlayerStatus,
  computePlayerTotal,
} from "./playerStatsProvider";
import { computeTeamScore } from "./teamStatsProvider";
import { PlayerRankings, TeamRankings } from "./types";

function assignRanks<T extends { total: number; rank: number }>(
  items: Array<T>
): Array<T> {
  for (let i = 1; i < items.length; i++) {
    const curr = items[i];
    const prev = items[i - 1];

    curr.rank = curr.total === prev.total ? prev.rank : i + 1;
  }

  return items;
}

function getTeamRankingsForWeek(
  teams: Array<Team>,
  weekNumber: number
): {
  standardOrder: Array<TeamScore>;
  upsideDownOrder: Array<TeamScore>;
} {
  const unsortedTeams = teams.map((team) => {
    return {
      team,
      [RuleSet.STANDARD]: {
        total: computeTeamScore(team, weekNumber, RuleSet.STANDARD),
        rank: 1,
      },
      [RuleSet.UPSIDE_DOWN]: {
        total: computeTeamScore(team, weekNumber, RuleSet.UPSIDE_DOWN),
        rank: 1,
      },
    };
  });

  const standardOrder = [...unsortedTeams].sort(
    (a, b) => b[RuleSet.STANDARD].total - a[RuleSet.STANDARD].total
  );
  const upsideDownOrder = [...unsortedTeams].sort(
    (a, b) => b[RuleSet.UPSIDE_DOWN].total - a[RuleSet.UPSIDE_DOWN].total
  );

  assignRanks(standardOrder.map((player) => player[RuleSet.STANDARD]));
  assignRanks(upsideDownOrder.map((player) => player[RuleSet.UPSIDE_DOWN]));

  return {
    standardOrder: standardOrder,
    upsideDownOrder: upsideDownOrder,
  };
}

export function getTeamRankings(teams: Array<Team>): {
  standard: Array<TeamRankings>;
  upsideDown: Array<TeamRankings>;
} {
  const standardWeeklyRankings: Array<TeamRankings> = [];
  const upsideDownWeeklyRankings: Array<TeamRankings> = [];

  for (let weekNumber = 0; weekNumber < weeks.length; weekNumber++) {
    const weeklyRankings = getTeamRankingsForWeek(teams, weekNumber);

    standardWeeklyRankings.push(weeklyRankings.standardOrder);
    upsideDownWeeklyRankings.push(weeklyRankings.upsideDownOrder);
  }

  return {
    standard: standardWeeklyRankings,
    upsideDown: upsideDownWeeklyRankings,
  };
}

function getPlayerRankingsForWeek(
  players: Array<Player>,
  weekNumber: number
): {
  standardOrder: Array<PlayerScore>;
  upsideDownOrder: Array<PlayerScore>;
} {
  const unsortedPlayers = players.map((player) => {
    return {
      player,
      status: computePlayerStatus(player, weekNumber),
      [RuleSet.STANDARD]: {
        rank: 1,
        total: computePlayerTotal(player, weekNumber, RuleSet.STANDARD),
        points: computePlayerPoints(player, weekNumber, RuleSet.STANDARD),
      },
      [RuleSet.UPSIDE_DOWN]: {
        rank: 1,
        total: computePlayerTotal(player, weekNumber, RuleSet.UPSIDE_DOWN),
        points: computePlayerPoints(player, weekNumber, RuleSet.UPSIDE_DOWN),
      },
    };
  });

  const standardOrder = [...unsortedPlayers].sort(
    (a, b) => b[RuleSet.STANDARD].total - a[RuleSet.STANDARD].total
  );
  const upsideDownOrder = [...unsortedPlayers].sort(
    (a, b) => b[RuleSet.UPSIDE_DOWN].total - a[RuleSet.UPSIDE_DOWN].total
  );

  assignRanks(standardOrder.map((player) => player[RuleSet.STANDARD]));
  assignRanks(upsideDownOrder.map((player) => player[RuleSet.UPSIDE_DOWN]));

  return {
    standardOrder: standardOrder,
    upsideDownOrder: upsideDownOrder,
  };
}

export function getPlayerRankings(players: Array<Player>): {
  standard: Array<PlayerRankings>;
  upsideDown: Array<PlayerRankings>;
} {
  const standardWeeklyRankings: Array<PlayerRankings> = [];
  const upsideDownWeeklyRankings: Array<PlayerRankings> = [];

  for (let weekNumber = 0; weekNumber < weeks.length; weekNumber++) {
    const weeklyRankings = getPlayerRankingsForWeek(players, weekNumber);

    standardWeeklyRankings.push(weeklyRankings.standardOrder);
    upsideDownWeeklyRankings.push(weeklyRankings.upsideDownOrder);
  }

  return {
    standard: standardWeeklyRankings,
    upsideDown: upsideDownWeeklyRankings,
  };
}
