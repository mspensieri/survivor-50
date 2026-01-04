import {
  Player,
  PlayerScore,
  Team,
  TeamScore,
  UpsideDownPlayerScore,
} from "../data/types";
import { weeks } from "../data/weeks";
import {
  computePlayerScore,
  computePlayerStatus,
  computeUpsideDownPlayerScore,
  getPlayerUpsideDownAchievements,
} from "./playerStatsProvider";
import {
  computeTeamScore,
  computeUpsideDownTeamScore,
} from "./teamStatsProvider";
import {
  PlayerRankings,
  TeamRankings,
  UpsideDownPlayerRankings,
} from "./types";

function assignRanks<T extends { total: number; rank: number }>(
  items: Array<T>
): Array<T> {
  for (let i = 1; i < items.length; i++) {
    const curr = items[i];
    const prev = items[i - 1];

    curr.rank = curr.total === prev.total ? prev.rank : prev.rank + 1;
  }

  return items;
}

function getTeamRankingsForWeek(
  teams: Array<Team>,
  weekNumber: number
): TeamRankings {
  return assignRanks<TeamScore>(
    teams
      .map((team) => {
        return {
          team,
          total: computeTeamScore(team, weekNumber),
          rank: 0,
        };
      })
      .sort((a, b) => {
        return b.total - a.total;
      })
  );
}

function getUpsideDownTeamRankingsForWeek(
  teams: Array<Team>,
  weekNumber: number
): TeamRankings {
  return assignRanks<TeamScore>(
    teams
      .map((team) => {
        return {
          team,
          total: computeUpsideDownTeamScore(team, weekNumber),
          rank: 0,
        };
      })
      .sort((a, b) => {
        return b.total - a.total;
      })
  );
}

export function getTeamRankings(teams: Array<Team>): {
  standard: Array<TeamRankings>;
  upsideDown: Array<TeamRankings>;
} {
  return {
    standard: new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
      return getTeamRankingsForWeek(teams, weekNumber);
    }),
    upsideDown: new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
      return getUpsideDownTeamRankingsForWeek(teams, weekNumber);
    }),
  };
}

function getPlayerRankingsForWeek(
  players: Array<Player>,
  weekNumber: number
): PlayerRankings {
  return assignRanks<PlayerScore>(
    players
      .map((player) => {
        return {
          player,
          total: computePlayerScore(player, weekNumber, "total"),
          points: {
            survival: computePlayerScore(player, weekNumber, "survival"),
            votes: computePlayerScore(player, weekNumber, "votes"),
            teamImmunity: computePlayerScore(
              player,
              weekNumber,
              "teamImmunity"
            ),
            individualImmunity: computePlayerScore(
              player,
              weekNumber,
              "individualImmunity"
            ),
            advantage: computePlayerScore(player, weekNumber, "advantage"),
            idolFound: computePlayerScore(player, weekNumber, "idolFound"),
            voteNullified: computePlayerScore(
              player,
              weekNumber,
              "voteNullified"
            ),
            placement: computePlayerScore(player, weekNumber, "placement"),
            fire: computePlayerScore(player, weekNumber, "fire"),
          },
          status: computePlayerStatus(player, weekNumber),
          rank: 0,
        };
      })
      .sort((a, b) => {
        return b.total - a.total;
      })
  );
}

function getUpsideDownPlayerRankingsForWeek(
  players: Array<Player>,
  weekNumber: number
): UpsideDownPlayerRankings {
  return assignRanks<UpsideDownPlayerScore>(
    players
      .map((player) => {
        return {
          player,
          total: computeUpsideDownPlayerScore(player, weekNumber),
          achievements: getPlayerUpsideDownAchievements(player, weekNumber),
          status: computePlayerStatus(player, weekNumber),
          rank: 0,
        };
      })
      .sort((a, b) => {
        return b.total - a.total;
      })
  );
}

export function getPlayerRankings(players: Array<Player>): {
  standard: Array<PlayerRankings>;
  upsideDown: Array<UpsideDownPlayerRankings>;
} {
  return {
    standard: new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
      return getPlayerRankingsForWeek(players, weekNumber);
    }),
    upsideDown: new Array(weeks.length).fill(undefined).map((_, weekNumber) => {
      return getUpsideDownPlayerRankingsForWeek(players, weekNumber);
    }),
  };
}
