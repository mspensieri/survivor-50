import { Captains, Team } from "../data/types";

export function captainNames(team: Team): string | null {
  if (!team.captain) {
    return null;
  }

  const names = team.captain.ids.map((id) => Captains[id]);
  return names.join(" and ");
}

export function stars(rating: number) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

export function ratingDescription(rating: number) {
  switch (rating) {
    case 0:
      return "First time in the pool. Good luck!";
    case 1:
      return "No significant placements yet";
    case 2:
      return "Finished in the top 50% in a past season";
    case 3:
      return "Finished in the top 10 in a past season";
    case 4:
      return "Finished in the top 3 in a past season";
    case 5:
      return "Winner of a past season";
    default:
      return "";
  }
}

export function ratingTitle(rating: number) {
  switch (rating) {
    case 0:
      return "Rookie";
    case 1:
      return "Amateur";
    case 2:
      return "Apprentice";
    case 3:
      return "Contender";
    case 4:
      return "Expert";
    case 5:
      return "Champion";
    default:
      return "";
  }
}

export function ratingSummary(rating: number) {
  switch (rating) {
    case 1:
      return "Bottom 50%";
    case 2:
      return "Top 50%";
    case 3:
      return "Top 10";
    case 4:
      return "Top 3";
    case 5:
      return "Winner";
    default:
      return "";
  }
}
