import { Player, PlayerKeys } from "./types";

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.ALEX]: {
    key: PlayerKeys.ALEX,
    name: "Alex",
  },
  [PlayerKeys.ANNIE]: {
    key: PlayerKeys.ANNIE,
    name: "Annie",
  },
  [PlayerKeys.JAKE]: {
    key: PlayerKeys.JAKE,
    name: "Jake",
  },
  [PlayerKeys.JASON]: {
    key: PlayerKeys.JASON,
    name: "Jason",
  },
  [PlayerKeys.JAWAN]: {
    key: PlayerKeys.JAWAN,
    name: "Jawan",
  },
  [PlayerKeys.JEREMIAH]: {
    key: PlayerKeys.JEREMIAH,
    name: "Jeremiah",
  },
  [PlayerKeys.KRISTINA]: {
    key: PlayerKeys.KRISTINA,
    name: "Kristina",
  },
  [PlayerKeys.MATT]: {
    key: PlayerKeys.MATT,
    name: "Matt",
  },
  [PlayerKeys.MC]: {
    key: PlayerKeys.MC,
    name: "MC",
  },
  [PlayerKeys.NATE]: {
    key: PlayerKeys.NATE,
    name: "Nate",
  },
  [PlayerKeys.NICOLE]: {
    key: PlayerKeys.NICOLE,
    name: "Nicole",
  },
  [PlayerKeys.RIZO]: {
    key: PlayerKeys.RIZO,
    name: "Rizo",
  },
  [PlayerKeys.SAGE]: {
    key: PlayerKeys.SAGE,
    name: "Sage",
  },
  [PlayerKeys.SAVANNAH]: {
    key: PlayerKeys.SAVANNAH,
    name: "Savannah",
  },
  [PlayerKeys.SHANNON]: {
    key: PlayerKeys.SHANNON,
    name: "Shannon",
  },
  [PlayerKeys.SOPHI]: {
    key: PlayerKeys.SOPHI,
    name: "Sophi",
  },
  [PlayerKeys.SOPHIE]: {
    key: PlayerKeys.SOPHIE,
    name: "Sophie",
  },
  [PlayerKeys.STEVEN]: {
    key: PlayerKeys.STEVEN,
    name: "Steven",
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
