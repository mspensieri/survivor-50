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
  MIKE,
  OZZY,
  Q,
  STEPHENIE,
  TIFFANY,
  RICK,
} = PLAYERS;

export const SWAP_DEADLINE = 6;

export const teams: Array<Team> = computeHistory([
  {
    captain: {
      ids: ["alex"],
    },
    name: "Wendy's Chickens",
    players: [CHRISTIAN, EMILY, TIFFANY, CHARLIE, ANGELINA, GENEVIEVE, RIZO, Q],
    winner: EMILY,
  },
  {
    captain: {
      ids: ["kara"],
    },
    name: "Here's Your Headstone",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["joanne"],
    },
    name: "TEAM JO",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["spen"],
    },
    name: "Come On In Guys",
    players: [CHARLIE, EMILY, DEE, KAMILLA, CHRISTIAN, GENEVIEVE, AUBRY, RICK],
    winner: CHARLIE,
  },
  {
    captain: {
      ids: ["andrea_d", "susan"],
    },
    name: "The Dils",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["diego"],
    },
    name: "Operation Italy",
    players: [
      OZZY,
      RICK,
      CHRISTIAN,
      COACH,
      CHRISSY,
      KAMILLA,
      JONATHAN,
      GENEVIEVE,
    ],
    winner: GENEVIEVE,
  },
  {
    captain: {
      ids: ["elizabeth"],
    },
    name: "Play Your Idol",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["mikey"],
    },
    name: "Fiftieth Time in Fiji",
    players: [DEE, ANGELINA, CIRIE, RIZO, MIKE, RICK, CHARLIE, CHRISSY],
    winner: RIZO,
  },
  {
    captain: {
      ids: ["alec"],
    },
    name: "The Ghost of Andy",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["leila"],
    },
    name: "Got Nothin' For Ya",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["katie"],
    },
    name: "Truth Kamikazee",
    players: [
      KAMILLA,
      GENEVIEVE,
      CHARLIE,
      COACH,
      RICK,
      JONATHAN,
      CHRISSY,
      RIZO,
    ],
    winner: RICK,
  },
  {
    captain: {
      ids: ["danny"],
    },
    name: "chud",
    players: [KAMILLA, GENEVIEVE, CHARLIE, CIRIE, JONATHAN, JOE, EMILY],
    winner: AUBRY,
  },
  {
    captain: {
      ids: ["stanley"],
    },
    name: "UNDERDOGS",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["sandy"],
    },
    name: "Sandy's Spynest",
    players: [TIFFANY, GENEVIEVE, JOE, JONATHAN, Q, CIRIE, JENNA, RIZO],
    winner: TIFFANY,
  },
  {
    captain: {
      ids: ["colleen"],
    },
    name: "Put me in, Coach",
    players: [CHARLIE, RIZO, COACH, ANGELINA, JOE, EMILY, RICK, KYLE],
    winner: JOE,
  },
  {
    captain: {
      ids: ["brendan"],
    },
    name: "KING OF THE JUNGLE",
    players: [
      TIFFANY,
      GENEVIEVE,
      JOE,
      JONATHAN,
      CHRISTIAN,
      RIZO,
      CHRISSY,
      COACH,
    ],
    winner: JOE,
  },
  {
    captain: {
      ids: ["kevin"],
    },
    name: "Jeff's Dimples",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["carrie"],
    },
    name: "4blackcats",
    players: [DEE, GENEVIEVE, KAMILLA, KYLE, JONATHAN, RIZO, CHARLIE],
    winner: DEE,
  },
  {
    captain: {
      ids: ["sean"],
    },
    name: "Leafs Nation",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["sarah"],
    },
    name: "Sole Survivor of Sass",
    players: [CHRISSY, STEPHENIE, AUBRY, CIRIE, JOE, JONATHAN, RIZO, CHRISTIAN],
    winner: AUBRY,
  },
  {
    captain: {
      ids: ["frank"],
    },
    name: "Bottom of the Pool",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["thomas", "ashley"],
    },
    name: "Chicken Dinner",
    players: [COLBY, STEPHENIE, COACH, AUBRY, CHRISSY, MIKE, DEE, RIZO],
    winner: RIZO,
  },
  {
    captain: {
      ids: ["vanesa"],
    },
    name: "The Immunity Drip",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["erick"],
    },
    name: "Chuckwurself before you jeckwurself",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["andrea_r"],
    },
    name: "Here For Friendship",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["menard"],
    },
    name: "You Go Girl",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["leigh"],
    },
    name: "LIVIN'",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["elana"],
    },
    name: "Probst Malone",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["alyssa", "adam"],
    },
    name: "AA Tribe",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["greg"],
    },
    name: "Ate 2 Much Kokoda",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["andy", "lally"],
    },
    name: "Ogatally DeVotes",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["jacob"],
    },
    name: "With You 100%",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["jacklyn"],
    },
    name: "JSpenny",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["sab", "bruno"],
    },
    name: "Bing and Bugz",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["meagan"],
    },
    name: "Totally Oswald",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["taylor"],
    },
    name: "Clyde's Castaways",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["dan", "dana"],
    },
    name: "Ducky & Boinko Forever",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["dean"],
    },
    name: "daddw",
    players: [COACH, JOE, COLBY, STEPHENIE, ANGELINA, CHRISSY, DEE, EMILY],
    winner: COACH,
  },
  {
    captain: {
      ids: ["jeremy"],
    },
    name: "Jere-atrics",
    players: [],
    winner: "UNKNOWN",
  },
  {
    captain: {
      ids: ["jessie"],
    },
    name: "Outwit, Outplay, Out-Rizz",
    players: [RIZO, JOE, CIRIE, AUBRY, STEPHENIE, CHRISSY, JONATHAN, TIFFANY],
    winner: RIZO,
  },
  {
    captain: {
      ids: ["anne"],
    },
    name: "Challenge Beasts",
    players: [CHRISSY, CHRISTIAN, SAVANNAH, RICK, DEE, CHARLIE, GENEVIEVE, JOE],
    winner: JOE,
  },
  {
    captain: {
      ids: ["kathy", "fergus"],
    },
    name: "Fergus' Fortunetelling",
    players: [JENNA, STEPHENIE, CHRISSY, RICK, DEE, CHARLIE, KYLE, RIZO],
    winner: RICK,
  },
  {
    captain: {
      ids: ["christine", "jocelyn"],
    },
    name: "Banana Etiquette",
    players: [AUBRY, GENEVIEVE, CHRISTIAN, EMILY, JOE, JONATHAN, COACH, DEE],
    winner: AUBRY,
  },
  {
    captain: {
      ids: ["jensen"],
    },
    name: "Reba Theme Song",
    players: [OZZY, Q, RICK, DEE, MIKE, CHRISSY, CIRIE, RIZO],
    winner: CHRISSY,
  },
  {
    captain: {
      ids: ["brittany", "jesse"],
    },
    name: "BJ-ISLAND",
    players: [DEE, MIKE, GENEVIEVE, CHARLIE, CHRISSY, KAMILLA, JONATHAN, CIRIE],
    winner: DEE,
  },
  {
    captain: {
      ids: ["sheldon"],
    },
    name: "Jeff Probst For President",
    players: [JENNA, OZZY, CHRISSY, RICK, RIZO, CHARLIE, GENEVIEVE, KAMILLA],
    winner: GENEVIEVE,
  },
]);

export const fakeTeams: Array<Team> = [
  {
    name: "1",
    captain: {
      ids: ["alex"],
    },
    winner: ANGELINA,
    players: [
      ANGELINA,
      AUBRY,
      CHARLIE,
      CHRISSY,
      CHRISTIAN,
      CIRIE,
      GENEVIEVE,
      RIZO,
    ],
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
    players: [COACH, COLBY, DEE, EMILY, GENEVIEVE, RIZO, JENNA, SAVANNAH],
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
    players: [JENNA, SAVANNAH, JOE, JONATHAN, KAMILLA, KYLE, GENEVIEVE, RIZO],
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
    players: [COLBY, DEE, EMILY, GENEVIEVE, RIZO, JENNA, SAVANNAH, JOE],
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
    players: [JONATHAN, KAMILLA, KYLE, COACH, COLBY, DEE, EMILY, GENEVIEVE],
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
    players: [CHRISTIAN, CIRIE, COACH, COLBY, DEE, EMILY, GENEVIEVE, RIZO],
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
    players: [EMILY, GENEVIEVE, RIZO, JENNA, SAVANNAH, JOE, JONATHAN, KAMILLA],
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
    players: [JOE, JONATHAN, KAMILLA, KYLE, COACH, COLBY, DEE, EMILY],
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
    players: [CHRISTIAN, CIRIE, COACH, COLBY, DEE, EMILY, GENEVIEVE, RIZO],
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
    players: [GENEVIEVE, RIZO, JENNA, SAVANNAH, JOE, JONATHAN, KAMILLA, KYLE],
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
    players: [KAMILLA, KYLE, COACH, COLBY, DEE, EMILY, GENEVIEVE, RIZO],
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
    players: [
      CHRISTIAN,
      CIRIE,
      GENEVIEVE,
      RIZO,
      JENNA,
      SAVANNAH,
      JOE,
      JONATHAN,
    ],
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
    players: [JOE, JONATHAN, KAMILLA, KYLE, COACH, EMILY, GENEVIEVE, RIZO],
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
    players: [COLBY, DEE, GENEVIEVE, RIZO, JENNA, SAVANNAH, KYLE, CIRIE],
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
    players: [CHRISTIAN, CIRIE, JOE, JONATHAN, KAMILLA, KYLE, GENEVIEVE, RIZO],
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
    players: [COACH, COLBY, DEE, EMILY, GENEVIEVE, RIZO, JENNA, SAVANNAH],
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
    players: [JENNA, SAVANNAH, JOE, JONATHAN, KAMILLA, KYLE, GENEVIEVE, RIZO],
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
    players: [CHRISTIAN, CIRIE, COACH, COLBY, DEE, EMILY, GENEVIEVE, RIZO],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
];
