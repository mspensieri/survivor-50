import { PLAYERS } from "./players";
import { Team } from "./types";
import { computeHistory } from "./history";

const {
  ANGELINA,
  AUBRY,
  CHARLIE,
  CHRISSY,
  CHRISTIAN,
  CIRIE,
  COACH,
  COLBY,
  DEE,
  EMILY,
  GENEVIEVE,
  RIZO,
  JENNA,
  SAVANNAH,
  JOE,
  JONATHAN,
  KAMILLA,
  KYLE,
} = PLAYERS;

export const SWAP_DEADLINE = 6;

export const teams: Array<Team> = computeHistory([
  {
    captain: {
      ids: ["alex"],
    },
    name: "Wendy's Chickens",
    players: [SAVANNAH, CIRIE, ANGELINA, COACH, JONATHAN, JOE],
    winner: ANGELINA,
    swap: {
      week: 5,
      playerOut: CIRIE,
      playerIn: JENNA,
    },
  },
  {
    captain: {
      ids: ["kara"],
    },
    name: "Here's Your Headstone",
    players: [AUBRY, COACH, DEE, CHARLIE, JOE, JONATHAN],
    winner: AUBRY,
    swap: {
      week: 3,
      playerOut: CHARLIE,
      playerIn: EMILY,
    },
  },
  {
    captain: {
      ids: ["joanne"],
    },
    name: "TEAM JO",
    players: [SAVANNAH, KYLE, RIZO, CHARLIE, ANGELINA, COLBY],
    winner: KYLE,
    swap: {
      week: 5,
      playerOut: COLBY,
      playerIn: DEE,
    },
  },
  {
    captain: {
      ids: ["spen"],
    },
    name: "Come On In Guys",
    players: [CHARLIE, COLBY, AUBRY, KYLE, JOE, DEE],
    winner: DEE,
    swap: {
      week: 3,
      playerOut: AUBRY,
      playerIn: CHRISSY,
    },
  },
  {
    captain: {
      ids: ["andrea_d", "susan"],
    },
    name: "The Dils",
    players: [SAVANNAH, AUBRY, DEE, CHARLIE, COLBY, KAMILLA],
    winner: DEE,
    swap: {
      week: 3,
      playerOut: CHARLIE,
      playerIn: ANGELINA,
    },
  },
  {
    captain: {
      ids: ["diego"],
    },
    name: "Operation Italy",
    players: [AUBRY, JENNA, CHRISSY, CHARLIE, CHRISTIAN, KAMILLA],
    winner: CHRISSY,
    swap: {
      week: 2,
      playerOut: AUBRY,
      playerIn: SAVANNAH,
    },
  },
  {
    captain: {
      ids: ["elizabeth"],
    },
    name: "Play Your Idol",
    players: [CHRISTIAN, CIRIE, AUBRY, KYLE, KAMILLA, DEE],
    winner: CHRISTIAN,
    swap: {
      week: 2,
      playerOut: AUBRY,
      playerIn: SAVANNAH,
    },
  },
  {
    captain: {
      ids: ["mikey"],
    },
    name: "First Time in Fiji",
    players: [COLBY, CHARLIE, KYLE, JENNA, KAMILLA, JOE],
    winner: JOE,
    swap: {
      week: 3,
      playerOut: CHARLIE,
      playerIn: DEE,
    },
  },
  {
    captain: {
      ids: ["alec"],
    },
    name: "The Ghost of Andy",
    players: [SAVANNAH, AUBRY, RIZO, CHRISSY, CHARLIE, JONATHAN],
    winner: CHARLIE,
  },
  {
    captain: {
      ids: ["leila"],
    },
    name: "Got Nothin' For Ya",
    players: [COACH, KYLE, CHRISSY, CHARLIE, CHRISTIAN, KAMILLA],
    winner: KYLE,
  },
  {
    captain: {
      ids: ["katie"],
    },
    name: "Truth Kamikazee",
    players: [KYLE, RIZO, EMILY, CHARLIE, CHRISTIAN, GENEVIEVE],
    winner: CHARLIE,
    swap: {
      week: 1,
      playerOut: GENEVIEVE,
      playerIn: CHRISSY,
    },
  },
  {
    captain: {
      ids: ["danny"],
    },
    name: "chud (lower case)",
    players: [COACH, CIRIE, EMILY, CHRISTIAN, ANGELINA, GENEVIEVE],
    winner: EMILY,
    swap: {
      week: 1,
      playerOut: GENEVIEVE,
      playerIn: COLBY,
    },
  },
  {
    captain: {
      ids: ["stanley"],
    },
    name: "UNDERDOGS",
    players: [KAMILLA, ANGELINA, EMILY, GENEVIEVE, COLBY, CIRIE],
    winner: KAMILLA,
    swap: {
      week: 1,
      playerOut: GENEVIEVE,
      playerIn: CHRISSY,
    },
  },
  {
    captain: {
      ids: ["sandy"],
    },
    name: "Sandy's Spynest",
    players: [COACH, DEE, RIZO, CHARLIE, COLBY, KAMILLA],
    winner: COACH,
    swap: {
      week: 3,
      playerOut: CHARLIE,
      playerIn: CHRISSY,
    },
  },
  {
    captain: {
      ids: ["colleen"],
    },
    name: "Mermaid Dragon",
    players: [SAVANNAH, RIZO, DEE, CHARLIE, CHRISTIAN, JOE],
    winner: CHRISTIAN,
    swap: {
      week: 4,
      playerOut: CHARLIE,
      playerIn: EMILY,
    },
  },
  {
    captain: {
      ids: ["brendan"],
    },
    name: "KING OF THE JUNGLE",
    players: [SAVANNAH, JENNA, RIZO, CHARLIE, JONATHAN, JOE],
    winner: CHARLIE,
    swap: {
      week: 4,
      playerOut: CHARLIE,
      playerIn: KYLE,
    },
  },
  {
    captain: {
      ids: ["kevin"],
    },
    name: "Jeff's Dimples",
    players: [COACH, DEE, RIZO, CHRISSY, CHARLIE, CHRISTIAN],
    winner: DEE,
    swap: {
      week: 3,
      playerOut: CHARLIE,
      playerIn: ANGELINA,
    },
  },
  {
    captain: {
      ids: ["carrie"],
    },
    name: "4blackcats",
    players: [SAVANNAH, CIRIE, KYLE, CHARLIE, CHRISTIAN, DEE],
    winner: CHRISTIAN,
    swap: {
      week: 4,
      playerOut: CIRIE,
      playerIn: RIZO,
    },
  },
  {
    captain: {
      ids: ["sean"],
    },
    name: "Leafs Nation",
    players: [SAVANNAH, KYLE, RIZO, CHARLIE, JONATHAN, JOE],
    winner: JONATHAN,
    swap: {
      week: 4,
      playerOut: CHARLIE,
      playerIn: ANGELINA,
    },
  },
  {
    captain: {
      ids: ["sarah"],
    },
    name: "Sole Survivor of Sass",
    players: [SAVANNAH, JENNA, COACH, CHRISTIAN, ANGELINA, GENEVIEVE],
    winner: SAVANNAH,
    swap: {
      week: 1,
      playerOut: GENEVIEVE,
      playerIn: DEE,
    },
  },
  {
    captain: {
      ids: ["frank"],
    },
    name: "Bottom of the Pool",
    players: [JENNA, CIRIE, CHRISTIAN, CHRISSY, COLBY, JOE],
    winner: CHRISTIAN,
  },
  {
    captain: {
      ids: ["thomas"],
    },
    name: "Chicken Dinner",
    players: [KYLE, JENNA, EMILY, CHARLIE, JONATHAN, KAMILLA],
    winner: JONATHAN,
    swap: {
      week: 4,
      playerOut: CHARLIE,
      playerIn: RIZO,
    },
  },
  {
    captain: {
      ids: ["vanesa"],
    },
    name: "The Immunity Drip",
    players: [SAVANNAH, KYLE, RIZO, CHARLIE, DEE, GENEVIEVE],
    winner: CHARLIE,
    swap: {
      week: 1,
      playerOut: GENEVIEVE,
      playerIn: EMILY,
    },
  },
  {
    captain: {
      ids: ["erick"],
    },
    name: "Chuckwurself before you jeckwurself",
    players: [CHARLIE, KYLE, RIZO, CHRISSY, DEE, JONATHAN],
    winner: DEE,
    swap: {
      week: 3,
      playerOut: CHARLIE,
      playerIn: EMILY,
    },
  },
  {
    captain: {
      ids: ["andrea_r"],
    },
    name: "Here For Friendship",
    players: [AUBRY, JENNA, CHRISTIAN, COLBY, COACH, DEE],
    winner: JENNA,
    swap: {
      week: 4,
      playerOut: AUBRY,
      playerIn: RIZO,
    },
  },
  {
    captain: {
      ids: ["menard"],
    },
    name: "You Go Girl",
    players: [SAVANNAH, JENNA, COACH, JONATHAN, KAMILLA, JOE],
    winner: SAVANNAH,
    swap: {
      week: 6,
      playerOut: JOE,
      playerIn: ANGELINA,
    },
  },
  {
    captain: {
      ids: ["leigh"],
    },
    name: "LIVIN'",
    players: [SAVANNAH, CIRIE, KYLE, CHRISSY, EMILY, JOE],
    winner: JOE,
    swap: {
      week: 5,
      playerOut: CHRISSY,
      playerIn: ANGELINA,
    },
  },
  {
    captain: {
      ids: ["elana"],
    },
    name: "Probst Malone",
    players: [CIRIE, EMILY, DEE, COLBY, GENEVIEVE, AUBRY],
    winner: DEE,
  },
  {
    captain: {
      ids: ["alyssa", "adam"],
    },
    name: "AA Tribe",
    players: [AUBRY, EMILY, DEE, CHARLIE, CHRISTIAN, COACH],
    winner: CHARLIE,
    swap: {
      week: 5,
      playerOut: AUBRY,
      playerIn: JENNA,
    },
  },
  {
    captain: {
      ids: ["greg"],
    },
    name: "Ate 2 Much Kokoda",
    players: [SAVANNAH, CIRIE, RIZO, CHARLIE, JONATHAN, JOE],
    winner: CIRIE,
    swap: {
      week: 3,
      playerOut: CIRIE,
      playerIn: ANGELINA,
    },
  },
  {
    captain: {
      ids: ["andy", "lally"],
    },
    name: "Ogatally DeVotes",
    players: [JENNA, DEE, CHARLIE, CHRISSY, CHRISTIAN, GENEVIEVE],
    winner: CHRISTIAN,
    swap: {
      week: 4,
      playerOut: GENEVIEVE,
      playerIn: RIZO,
    },
  },
  {
    captain: {
      ids: ["jacob"],
    },
    name: "With You 100%",
    players: [COACH, CHARLIE, ANGELINA, EMILY, AUBRY, CIRIE],
    winner: COACH,
    swap: {
      week: 3,
      playerOut: CHARLIE,
      playerIn: JOE,
    },
  },
  {
    captain: {
      ids: ["jacklyn"],
    },
    name: "JSpenny",
    players: [DEE, COACH, CHARLIE, CHRISSY, KAMILLA, CHRISTIAN],
    winner: DEE,
    swap: {
      week: 3,
      playerOut: CHARLIE,
      playerIn: ANGELINA,
    },
  },
  {
    captain: {
      ids: ["sab", "bruno"],
    },
    name: "Bing and Bugz",
    players: [CHARLIE, SAVANNAH, JENNA, AUBRY, KYLE, CHRISTIAN],
    winner: SAVANNAH,
  },
  {
    captain: {
      ids: ["meagan"],
    },
    name: "Totally Oswald",
    players: [AUBRY, DEE, CHARLIE, COLBY, GENEVIEVE, KAMILLA],
    winner: AUBRY,
    swap: {
      week: 1,
      playerOut: GENEVIEVE,
      playerIn: SAVANNAH,
    },
  },
  {
    captain: {
      ids: ["taylor"],
    },
    name: "Clyde's Castaways",
    players: [AUBRY, JENNA, DEE, CHRISTIAN, CHRISSY, CIRIE],
    winner: CHRISTIAN,
    swap: {
      week: 3,
      playerOut: AUBRY,
      playerIn: ANGELINA,
    },
  },
  {
    captain: {
      ids: ["dan", "dana"],
    },
    name: "Ducky & Boinko Forever",
    players: [AUBRY, DEE, CHARLIE, CHRISSY, GENEVIEVE, KAMILLA],
    winner: CHRISSY,
    swap: {
      week: 4,
      playerOut: AUBRY,
      playerIn: RIZO,
    },
  },
  {
    captain: {
      ids: ["dean"],
    },
    name: "Dean's ⒿETⓈ",
    players: [KYLE, JENNA, CHARLIE, JONATHAN, KAMILLA, JOE],
    winner: CHARLIE,
    swap: {
      week: 3,
      playerOut: CHARLIE,
      playerIn: ANGELINA,
    },
  },
  {
    captain: {
      ids: ["jeremy"],
    },
    name: "Jere-atrics",
    players: [EMILY, CHARLIE, KYLE, KAMILLA, JOE, SAVANNAH],
    winner: KAMILLA,
    swap: {
      week: 4,
      playerOut: CHARLIE,
      playerIn: DEE,
    },
  },
  {
    captain: {
      ids: ["jessie"],
    },
    name: "Outwit, Outplay, Out-Rizz",
    players: [SAVANNAH, KYLE, RIZO, CHARLIE, JONATHAN, KAMILLA],
    winner: RIZO,
    swap: {
      week: 7,
      playerOut: CHARLIE,
      playerIn: ANGELINA,
    },
  },
  {
    captain: {
      ids: ["anne"],
    },
    name: "Challenge Beasts",
    players: [SAVANNAH, KYLE, RIZO, CHARLIE, DEE, KAMILLA],
    winner: SAVANNAH,
    swap: {
      week: 3,
      playerOut: CHARLIE,
      playerIn: CHRISSY,
    },
  },
]);

export const fakeTeams: Array<Team> = [
  {
    name: "1",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [ANGELINA, AUBRY, CHARLIE, CHRISSY, CHRISTIAN, CIRIE],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "2",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [COACH, COLBY, DEE, EMILY, GENEVIEVE, RIZO],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "3",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [JENNA, SAVANNAH, JOE, JONATHAN, KAMILLA, KYLE],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "4",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [COLBY, DEE, EMILY, GENEVIEVE, RIZO, JENNA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "5",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [JONATHAN, KAMILLA, KYLE, COACH, COLBY, DEE],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "6",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [CHRISTIAN, CIRIE, COACH, COLBY, DEE, EMILY],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "7",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [EMILY, GENEVIEVE, RIZO, JENNA, SAVANNAH, JOE],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "8",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [JOE, JONATHAN, KAMILLA, KYLE, COACH, COLBY],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "9",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [CHRISTIAN, CIRIE, COACH, COLBY, DEE, EMILY],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "10",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [GENEVIEVE, RIZO, JENNA, SAVANNAH, JOE, JONATHAN],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "11",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [KAMILLA, KYLE, COACH, COLBY, DEE, EMILY],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "12",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [CHRISTIAN, CIRIE, GENEVIEVE, RIZO, JENNA, SAVANNAH],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "13",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [JOE, JONATHAN, KAMILLA, KYLE, COACH, EMILY],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "14",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [COLBY, DEE, GENEVIEVE, RIZO, JENNA, SAVANNAH],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "15",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [CHRISTIAN, CIRIE, JOE, JONATHAN, KAMILLA, KYLE],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "16",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [COACH, COLBY, DEE, EMILY, GENEVIEVE, RIZO],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "17",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [JENNA, SAVANNAH, JOE, JONATHAN, KAMILLA, KYLE],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "18",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [CHRISTIAN, CIRIE, COACH, COLBY, DEE, EMILY],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
];
