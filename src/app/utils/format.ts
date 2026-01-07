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
