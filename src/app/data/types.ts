export enum PlayerKeys {
  ALEX = "ALEX",
  ANNIE = "ANNIE",
  JAKE = "JAKE",
  JASON = "JASON",
  JAWAN = "JAWAN",
  JEREMIAH = "JEREMIAH",
  KRISTINA = "KRISTINA",
  MATT = "MATT",
  MC = "MC",
  NATE = "NATE",
  NICOLE = "NICOLE",
  RIZO = "RIZO",
  SAGE = "SAGE",
  SAVANNAH = "SAVANNAH",
  SHANNON = "SHANNON",
  SOPHI = "SOPHI",
  SOPHIE = "SOPHIE",
  STEVEN = "STEVEN",
}

export type Player = {
  key: PlayerKeys;
  name: string;
};

export type Team = {
  name: string;
  captain?: string;
  accolades?: {
    first?: Array<number>;
    second?: Array<number>;
    third?: Array<number>;
  };
  winner: Player | "UNKNOWN";
  players: Array<Player>;
  swap?: {
    week: number;
    playerOut: Player;
    playerIn: Player;
  };
};

export type TeamScore = {
  team: Team;
  total: number;
  rank: number;
};

export type PlayerStatus = "active" | "eliminated" | "jury" | "winner";

export type UpsideDownAchievement = {
  reason: string;
  points: number;
};

export type Points = {
  teamImmunity?: number;
  individualImmunity?: number;
  advantage?: number;
  idolFound?: number;
  voteNullified?: number;
  placement?: number;
  survival?: number;
  votes?: number;
  fire?: number;
  upsideDown?: Array<UpsideDownAchievement>;
};

export type PlayerScore = {
  player: Player;
  total: number;
  points: Points;
  rank: number;
  status: PlayerStatus;
};

export type UpsideDownPlayerScore = {
  player: Player;
  total: number;
  achievements: Array<UpsideDownAchievement>;
  rank: number;
  status: PlayerStatus;
};
