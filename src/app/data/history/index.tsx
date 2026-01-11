import { SeasonHistory, Team } from "../types";
import standings49 from "./49";
import standings48 from "./48";
import standings47 from "./47";
import standings46 from "./46";
import standings45 from "./45";
import standings44 from "./44";
import standings43 from "./43";
import standings42 from "./42";
import standings41 from "./41";
import standings40 from "./40";

const seasons: Array<SeasonHistory> = [
  standings49,
  standings48,
  standings47,
  standings46,
  standings45,
  standings44,
  standings43,
  standings42,
  standings41,
  standings40,
];

function calculateRating(rank: number, teamCount: number): number {
  if (rank === 1) {
    return 5;
  } else if (rank <= 3) {
    return 4;
  } else if (rank <= 10) {
    return 3;
  } else if (rank <= Math.ceil(teamCount / 2)) {
    return 2;
  } else {
    return 1;
  }
}

export function computeHistory(
  teams: Array<Omit<Team, "history">>
): Array<Team> {
  return teams.map((team) => {
    const history: Team["history"] = {
      overallRating: 0,
      placements: [],
    };

    for (const seasonResults of seasons) {
      const placement = seasonResults.placements.find((r) =>
        r.cids.some((cid) => team.captain?.ids.includes(cid))
      );

      if (placement) {
        const rating = calculateRating(
          placement.rank,
          seasonResults.placements.length
        );

        history.placements.push({
          season: seasonResults.season,
          rating,
        });

        if (rating > history.overallRating) {
          history.overallRating = rating;
        }
      }
    }

    return {
      ...team,
      history,
    };
  });
}
