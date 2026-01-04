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
  [RuleSet.STANDARD]: {
    rank: number;
    total: number;
  };
  [RuleSet.UPSIDE_DOWN]: {
    rank: number;
    total: number;
  };
};

export type PlayerStatus = "active" | "eliminated" | "jury" | "winner";

export enum RuleSet {
  STANDARD = "standard",
  UPSIDE_DOWN = "upsideDown",
}

export type StandardPoints = {
  teamImmunity?: number;
  individualImmunity?: number;
  advantage?: number;
  idolFound?: number;
  voteNullified?: number;
  placement?: number;
  survival?: number;
  votes?: number;
  fire?: number;
};

export type UpsideDownPoints = {
  losingTeam?: number;
  abysmalChallenge?: number;
  crying?: number;
  wrongVote?: number;
  blindsided?: number;
  outFirst?: number;
  outPreMerge?: number;
  outPostMerge?: number;
  medEvac?: number;
  threatenedToQuit?: number;

  // One-off point types
  vomit?: number;
};

export type PlayerScore = {
  player: Player;
  status: PlayerStatus;
  [RuleSet.STANDARD]: {
    rank: number;
    total: number;
    points: StandardPoints;
  };
  [RuleSet.UPSIDE_DOWN]: {
    rank: number;
    total: number;
    points: UpsideDownPoints;
  };
};
