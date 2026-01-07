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

export const Captains = {
  adam: "Adam",
  alec: "Alec",
  alex: "Alex",
  ally: "Ally",
  alyssa: "Alyssa",
  andrea_d: "Andrea",
  andrea_r: "Andrea R",
  andy: "Andy",
  anne: "Anne",
  brendan: "Brendan",
  bruno: "Bruno",
  carrie: "Carrie",
  colleen: "Colleen",
  dan: "Dan",
  dana: "Dana",
  danny: "Danny",
  dean: "Dean",
  diego: "Diego",
  elana: "Elana",
  elizabeth: "Elizabeth",
  erick: "Erick",
  fekre: "Fekre",
  frank: "Frank",
  glaser: "Glaser",
  greg: "Greg",
  jacklyn: "Jacklyn",
  jacob: "Jacob",
  jeremy: "Jeremy",
  jessie: "Jessie",
  joanne: "Joanne",
  kara: "Kara",
  katie_rando: "Katie",
  katie: "Katie",
  kelly: "Kelly",
  kevin: "Kevin",
  kian: "Kian",
  lally: "Lally",
  leigh: "Leigh",
  leila: "Leila",
  meagan: "Meagan",
  menard: "Menard",
  mikey: "Mikey",
  renee: "Renee",
  ryan: "Ryan",
  sab: "Sab",
  sandy: "Sandy",
  sarah: "Sarah",
  sean: "Sean",
  spen: "Spen",
  stanley: "Stanley",
  susan: "Susan",
  taylor: "Taylor",
  thomas: "Thomas",
  vanesa: "Vanesa",
};

export type Player = {
  key: PlayerKeys;
  name: string;
};

export type Team = {
  name: string;
  captain: {
    ids: Array<keyof typeof Captains>;
  };
  winner: Player | "UNKNOWN";
  players: Array<Player>;
  swap?: {
    week: number;
    playerOut: Player;
    playerIn: Player;
  };
  history: {
    overallRating: number;
    placements: Array<{
      season: number;
      rating: number;
    }>;
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

export type SeasonHistory = {
  season: number;
  placements: Array<{
    cids: Array<keyof typeof Captains>;
    rank: number;
  }>;
};
