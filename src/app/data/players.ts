import { Player, PlayerKeys, PlayerTribes } from "./types";
const { PURPLE, ORANGE, TEAL } = PlayerTribes;

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.ANGELINA]: {
    key: PlayerKeys.ANGELINA,
    name: "Angelina",
    tribe: PURPLE,
  },
  [PlayerKeys.AUBRY]: {
    key: PlayerKeys.AUBRY,
    name: "Aubry",
    tribe: PURPLE,
  },
  [PlayerKeys.CHARLIE]: {
    key: PlayerKeys.CHARLIE,
    name: "Charlie",
    tribe: TEAL,
  },
  [PlayerKeys.CHRISSY]: {
    key: PlayerKeys.CHRISSY,
    name: "Chrissy",
    tribe: TEAL,
  },
  [PlayerKeys.CHRISTIAN]: {
    key: PlayerKeys.CHRISTIAN,
    name: "Christian",
    tribe: ORANGE,
  },
  [PlayerKeys.CIRIE]: {
    key: PlayerKeys.CIRIE,
    name: "Cirie",
    tribe: ORANGE,
  },
  [PlayerKeys.COACH]: {
    key: PlayerKeys.COACH,
    name: "Coach",
    tribe: TEAL,
  },
  [PlayerKeys.COLBY]: {
    key: PlayerKeys.COLBY,
    name: "Colby",
    tribe: PURPLE,
  },
  [PlayerKeys.DEE]: {
    key: PlayerKeys.DEE,
    name: "Dee",
    tribe: TEAL,
  },
  [PlayerKeys.EMILY]: {
    key: PlayerKeys.EMILY,
    name: "Emily",
    tribe: ORANGE,
  },
  [PlayerKeys.GENEVIEVE]: {
    key: PlayerKeys.GENEVIEVE,
    name: "Genevieve",
    tribe: PURPLE,
  },
  [PlayerKeys.RIZO]: {
    key: PlayerKeys.RIZO,
    name: "Rizo",
    tribe: PURPLE,
  },
  [PlayerKeys.JENNA]: {
    key: PlayerKeys.JENNA,
    name: "Jenna",
    tribe: ORANGE,
  },
  [PlayerKeys.SAVANNAH]: {
    key: PlayerKeys.SAVANNAH,
    name: "Savannah",
    tribe: ORANGE,
  },
  [PlayerKeys.JOE]: {
    key: PlayerKeys.JOE,
    name: "Joe",
    tribe: ORANGE,
  },
  [PlayerKeys.JONATHAN]: {
    key: PlayerKeys.JONATHAN,
    name: "Jonathan",
    tribe: TEAL,
  },
  [PlayerKeys.KAMILLA]: {
    key: PlayerKeys.KAMILLA,
    name: "Kamilla",
    tribe: TEAL,
  },
  [PlayerKeys.KYLE]: {
    key: PlayerKeys.KYLE,
    name: "Kyle",
    tribe: PURPLE,
  },
  [PlayerKeys.MIKE]: {
    key: PlayerKeys.MIKE,
    name: "Mike",
    tribe: TEAL,
  },
  [PlayerKeys.OZZY]: {
    key: PlayerKeys.OZZY,
    name: "Ozzy",
    tribe: ORANGE,
  },
  [PlayerKeys.Q]: {
    key: PlayerKeys.Q,
    name: "Q",
    tribe: PURPLE,
  },
  [PlayerKeys.RICK]: {
    key: PlayerKeys.RICK,
    name: "Rick",
    tribe: ORANGE,
  },
  [PlayerKeys.STEPHENIE]: {
    key: PlayerKeys.STEPHENIE,
    name: "Stephenie",
    tribe: PURPLE,
  },
  [PlayerKeys.TIFFANY]: {
    key: PlayerKeys.TIFFANY,
    name: "Tiffany",
    tribe: TEAL,
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
