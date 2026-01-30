import { Player, PlayerKeys, PlayerTribes } from "./types";
const { VATU, CILA, KALO } = PlayerTribes;

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.ANGELINA]: {
    key: PlayerKeys.ANGELINA,
    name: "Angelina",
    tribe: VATU,
    history: "Season 37",
  },
  [PlayerKeys.AUBRY]: {
    key: PlayerKeys.AUBRY,
    name: "Aubry",
    tribe: VATU,
    history: "Seasons 32, 34, 38",
  },
  [PlayerKeys.CHARLIE]: {
    key: PlayerKeys.CHARLIE,
    name: "Charlie",
    tribe: KALO,
    history: "Season 46",
  },
  [PlayerKeys.CHRISSY]: {
    key: PlayerKeys.CHRISSY,
    name: "Chrissy",
    tribe: KALO,
    history: "Season 35",
  },
  [PlayerKeys.CHRISTIAN]: {
    key: PlayerKeys.CHRISTIAN,
    name: "Christian",
    tribe: CILA,
    history: "Season 37",
  },
  [PlayerKeys.CIRIE]: {
    key: PlayerKeys.CIRIE,
    name: "Cirie",
    tribe: CILA,
    history: "Seasons 12, 16, 20, 34",
  },
  [PlayerKeys.COACH]: {
    key: PlayerKeys.COACH,
    name: "Coach",
    tribe: KALO,
    history: "Seasons 18, 20, 23",
  },
  [PlayerKeys.COLBY]: {
    key: PlayerKeys.COLBY,
    name: "Colby",
    tribe: VATU,
    history: "Seasons 2, 8, 20",
  },
  [PlayerKeys.DEE]: {
    key: PlayerKeys.DEE,
    name: "Dee",
    tribe: KALO,
    history: "Season 45",
  },
  [PlayerKeys.EMILY]: {
    key: PlayerKeys.EMILY,
    name: "Emily",
    tribe: CILA,
    history: "Season 45",
  },
  [PlayerKeys.GENEVIEVE]: {
    key: PlayerKeys.GENEVIEVE,
    name: "Genevieve",
    tribe: VATU,
    history: "Season 47",
  },
  [PlayerKeys.RIZO]: {
    key: PlayerKeys.RIZO,
    name: "Rizo",
    tribe: VATU,
    history: "Season 49",
  },
  [PlayerKeys.JENNA]: {
    key: PlayerKeys.JENNA,
    name: "Jenna",
    tribe: CILA,
    history: "Seasons 1, 8",
  },
  [PlayerKeys.SAVANNAH]: {
    key: PlayerKeys.SAVANNAH,
    name: "Savannah",
    tribe: CILA,
    history: "Season 49",
  },
  [PlayerKeys.JOE]: {
    key: PlayerKeys.JOE,
    name: "Joe",
    tribe: CILA,
    history: "Season 48",
  },
  [PlayerKeys.JONATHAN]: {
    key: PlayerKeys.JONATHAN,
    name: "Jonathan",
    tribe: KALO,
    history: "Season 42",
  },
  [PlayerKeys.KAMILLA]: {
    key: PlayerKeys.KAMILLA,
    name: "Kamilla",
    tribe: KALO,
    history: "Season 48",
  },
  [PlayerKeys.KYLE]: {
    key: PlayerKeys.KYLE,
    name: "Kyle",
    tribe: VATU,
    history: "Season 48",
  },
  [PlayerKeys.MIKE]: {
    key: PlayerKeys.MIKE,
    name: "Mike",
    tribe: KALO,
    history: "Season 37",
  },
  [PlayerKeys.OZZY]: {
    key: PlayerKeys.OZZY,
    name: "Ozzy",
    tribe: CILA,
    history: "Seasons 13, 16, 23, 34",
  },
  [PlayerKeys.Q]: {
    key: PlayerKeys.Q,
    name: "Q",
    tribe: VATU,
    history: "Season 46",
  },
  [PlayerKeys.RICK]: {
    key: PlayerKeys.RICK,
    name: "Rick",
    tribe: CILA,
    history: "Season 38",
  },
  [PlayerKeys.STEPHENIE]: {
    key: PlayerKeys.STEPHENIE,
    name: "Stephenie",
    tribe: VATU,
    history: "Seasons 10, 11, 20",
  },
  [PlayerKeys.TIFFANY]: {
    key: PlayerKeys.TIFFANY,
    name: "Tiffany",
    tribe: KALO,
    history: "Season 46",
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
