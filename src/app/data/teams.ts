import { PLAYERS } from "./players";
import { Team } from "./types";
import { computeHistory } from "./history";

const {
  ALEX,
  ANNIE,
  JAKE,
  JASON,
  JAWAN,
  JEREMIAH,
  KRISTINA,
  MATT,
  MC,
  NATE,
  NICOLE,
  RIZO,
  SAGE,
  SAVANNAH,
  SHANNON,
  SOPHI,
  SOPHIE,
  STEVEN,
} = PLAYERS;

export const SWAP_DEADLINE = 6;

export const teams: Array<Team> = computeHistory([
  {
    captain: {
      ids: ["alex"],
    },
    name: "Wendy's Chickens",
    players: [SAVANNAH, JEREMIAH, ALEX, KRISTINA, SOPHI, SHANNON],
    winner: ALEX,
    swap: {
      week: 5,
      playerOut: JEREMIAH,
      playerIn: SAGE,
    },
  },
  {
    captain: {
      ids: ["kara"],
    },
    name: "Here's Your Headstone",
    players: [ANNIE, KRISTINA, MC, JAKE, SHANNON, SOPHI],
    winner: ANNIE,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: NATE,
    },
  },
  {
    captain: {
      ids: ["joanne"],
    },
    name: "TEAM JO",
    players: [SAVANNAH, STEVEN, RIZO, JAKE, ALEX, MATT],
    winner: STEVEN,
    swap: {
      week: 5,
      playerOut: MATT,
      playerIn: MC,
    },
  },
  {
    captain: {
      ids: ["spen"],
    },
    name: "Come On In Guys",
    players: [JAKE, MATT, ANNIE, STEVEN, SHANNON, MC],
    winner: MC,
    swap: {
      week: 3,
      playerOut: ANNIE,
      playerIn: JASON,
    },
  },
  {
    captain: {
      ids: ["andrea_d", "susan"],
    },
    name: "The Dils",
    players: [SAVANNAH, ANNIE, MC, JAKE, MATT, SOPHIE],
    winner: MC,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: ALEX,
    },
  },
  {
    captain: {
      ids: ["diego"],
    },
    name: "Operation Italy",
    players: [ANNIE, SAGE, JASON, JAKE, JAWAN, SOPHIE],
    winner: JASON,
    swap: {
      week: 2,
      playerOut: ANNIE,
      playerIn: SAVANNAH,
    },
  },
  {
    captain: {
      ids: ["elizabeth"],
    },
    name: "Play Your Idol",
    players: [JAWAN, JEREMIAH, ANNIE, STEVEN, SOPHIE, MC],
    winner: JAWAN,
    swap: {
      week: 2,
      playerOut: ANNIE,
      playerIn: SAVANNAH,
    },
  },
  {
    captain: {
      ids: ["mikey"],
    },
    name: "First Time in Fiji",
    players: [MATT, JAKE, STEVEN, SAGE, SOPHIE, SHANNON],
    winner: SHANNON,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: MC,
    },
  },
  {
    captain: {
      ids: ["alec"],
    },
    name: "The Ghost of Andy",
    players: [SAVANNAH, ANNIE, RIZO, JASON, JAKE, SOPHI],
    winner: JAKE,
  },
  {
    captain: {
      ids: ["leila"],
    },
    name: "Got Nothin' For Ya",
    players: [KRISTINA, STEVEN, JASON, JAKE, JAWAN, SOPHIE],
    winner: STEVEN,
  },
  {
    captain: {
      ids: ["katie"],
    },
    name: "Truth Kamikazee",
    players: [STEVEN, RIZO, NATE, JAKE, JAWAN, NICOLE],
    winner: JAKE,
    swap: {
      week: 1,
      playerOut: NICOLE,
      playerIn: JASON,
    },
  },
  {
    captain: {
      ids: ["danny"],
    },
    name: "chud (lower case)",
    players: [KRISTINA, JEREMIAH, NATE, JAWAN, ALEX, NICOLE],
    winner: NATE,
    swap: {
      week: 1,
      playerOut: NICOLE,
      playerIn: MATT,
    },
  },
  {
    captain: {
      ids: ["stanley"],
    },
    name: "UNDERDOGS",
    players: [SOPHIE, ALEX, NATE, NICOLE, MATT, JEREMIAH],
    winner: SOPHIE,
    swap: {
      week: 1,
      playerOut: NICOLE,
      playerIn: JASON,
    },
  },
  {
    captain: {
      ids: ["sandy"],
    },
    name: "Sandy's Spynest",
    players: [KRISTINA, MC, RIZO, JAKE, MATT, SOPHIE],
    winner: KRISTINA,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: JASON,
    },
  },
  {
    captain: {
      ids: ["colleen"],
    },
    name: "Mermaid Dragon",
    players: [SAVANNAH, RIZO, MC, JAKE, JAWAN, SHANNON],
    winner: JAWAN,
    swap: {
      week: 4,
      playerOut: JAKE,
      playerIn: NATE,
    },
  },
  {
    captain: {
      ids: ["brendan"],
    },
    name: "KING OF THE JUNGLE",
    players: [SAVANNAH, SAGE, RIZO, JAKE, SOPHI, SHANNON],
    winner: JAKE,
    swap: {
      week: 4,
      playerOut: JAKE,
      playerIn: STEVEN,
    },
  },
  {
    captain: {
      ids: ["kevin"],
    },
    name: "Jeff's Dimples",
    players: [KRISTINA, MC, RIZO, JASON, JAKE, JAWAN],
    winner: MC,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: ALEX,
    },
  },
  {
    captain: {
      ids: ["carrie"],
    },
    name: "4blackcats",
    players: [SAVANNAH, JEREMIAH, STEVEN, JAKE, JAWAN, MC],
    winner: JAWAN,
    swap: {
      week: 4,
      playerOut: JEREMIAH,
      playerIn: RIZO,
    },
  },
  {
    captain: {
      ids: ["sean"],
    },
    name: "Leafs Nation",
    players: [SAVANNAH, STEVEN, RIZO, JAKE, SOPHI, SHANNON],
    winner: SOPHI,
    swap: {
      week: 4,
      playerOut: JAKE,
      playerIn: ALEX,
    },
  },
  {
    captain: {
      ids: ["sarah"],
    },
    name: "Sole Survivor of Sass",
    players: [SAVANNAH, SAGE, KRISTINA, JAWAN, ALEX, NICOLE],
    winner: SAVANNAH,
    swap: {
      week: 1,
      playerOut: NICOLE,
      playerIn: MC,
    },
  },
  {
    captain: {
      ids: ["frank"],
    },
    name: "Bottom of the Pool",
    players: [SAGE, JEREMIAH, JAWAN, JASON, MATT, SHANNON],
    winner: JAWAN,
  },
  {
    captain: {
      ids: ["thomas"],
    },
    name: "Chicken Dinner",
    players: [STEVEN, SAGE, NATE, JAKE, SOPHI, SOPHIE],
    winner: SOPHI,
    swap: {
      week: 4,
      playerOut: JAKE,
      playerIn: RIZO,
    },
  },
  {
    captain: {
      ids: ["vanesa"],
    },
    name: "The Immunity Drip",
    players: [SAVANNAH, STEVEN, RIZO, JAKE, MC, NICOLE],
    winner: JAKE,
    swap: {
      week: 1,
      playerOut: NICOLE,
      playerIn: NATE,
    },
  },
  {
    captain: {
      ids: ["erick"],
    },
    name: "Chuckwurself before you jeckwurself",
    players: [JAKE, STEVEN, RIZO, JASON, MC, SOPHI],
    winner: MC,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: NATE,
    },
  },
  {
    captain: {
      ids: ["andrea_r"],
    },
    name: "Here For Friendship",
    players: [ANNIE, SAGE, JAWAN, MATT, KRISTINA, MC],
    winner: SAGE,
    swap: {
      week: 4,
      playerOut: ANNIE,
      playerIn: RIZO,
    },
  },
  {
    captain: {
      ids: ["menard"],
    },
    name: "You Go Girl",
    players: [SAVANNAH, SAGE, KRISTINA, SOPHI, SOPHIE, SHANNON],
    winner: SAVANNAH,
    swap: {
      week: 6,
      playerOut: SHANNON,
      playerIn: ALEX,
    },
  },
  {
    captain: {
      ids: ["leigh"],
    },
    name: "LIVIN'",
    players: [SAVANNAH, JEREMIAH, STEVEN, JASON, NATE, SHANNON],
    winner: SHANNON,
    swap: {
      week: 5,
      playerOut: JASON,
      playerIn: ALEX,
    },
  },
  {
    captain: {
      ids: ["elana"],
    },
    name: "Probst Malone",
    players: [JEREMIAH, NATE, MC, MATT, NICOLE, ANNIE],
    winner: MC,
  },
  {
    captain: {
      ids: ["alyssa", "adam"],
    },
    name: "AA Tribe",
    players: [ANNIE, NATE, MC, JAKE, JAWAN, KRISTINA],
    winner: JAKE,
    swap: {
      week: 5,
      playerOut: ANNIE,
      playerIn: SAGE,
    },
  },
  {
    captain: {
      ids: ["greg"],
    },
    name: "Ate 2 Much Kokoda",
    players: [SAVANNAH, JEREMIAH, RIZO, JAKE, SOPHI, SHANNON],
    winner: JEREMIAH,
    swap: {
      week: 3,
      playerOut: JEREMIAH,
      playerIn: ALEX,
    },
  },
  {
    captain: {
      ids: ["andy", "lally"],
    },
    name: "Ogatally DeVotes",
    players: [SAGE, MC, JAKE, JASON, JAWAN, NICOLE],
    winner: JAWAN,
    swap: {
      week: 4,
      playerOut: NICOLE,
      playerIn: RIZO,
    },
  },
  {
    captain: {
      ids: ["jacob"],
    },
    name: "With You 100%",
    players: [KRISTINA, JAKE, ALEX, NATE, ANNIE, JEREMIAH],
    winner: KRISTINA,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: SHANNON,
    },
  },
  {
    captain: {
      ids: ["jacklyn"],
    },
    name: "JSpenny",
    players: [MC, KRISTINA, JAKE, JASON, SOPHIE, JAWAN],
    winner: MC,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: ALEX,
    },
  },
  {
    captain: {
      ids: ["sab", "bruno"],
    },
    name: "Bing and Bugz",
    players: [JAKE, SAVANNAH, SAGE, ANNIE, STEVEN, JAWAN],
    winner: SAVANNAH,
  },
  {
    captain: {
      ids: ["meagan"],
    },
    name: "Totally Oswald",
    players: [ANNIE, MC, JAKE, MATT, NICOLE, SOPHIE],
    winner: ANNIE,
    swap: {
      week: 1,
      playerOut: NICOLE,
      playerIn: SAVANNAH,
    },
  },
  {
    captain: {
      ids: ["taylor"],
    },
    name: "Clyde's Castaways",
    players: [ANNIE, SAGE, MC, JAWAN, JASON, JEREMIAH],
    winner: JAWAN,
    swap: {
      week: 3,
      playerOut: ANNIE,
      playerIn: ALEX,
    },
  },
  {
    captain: {
      ids: ["dan", "dana"],
    },
    name: "Ducky & Boinko Forever",
    players: [ANNIE, MC, JAKE, JASON, NICOLE, SOPHIE],
    winner: JASON,
    swap: {
      week: 4,
      playerOut: ANNIE,
      playerIn: RIZO,
    },
  },
  {
    captain: {
      ids: ["dean"],
    },
    name: "Dean's ⒿETⓈ",
    players: [STEVEN, SAGE, JAKE, SOPHI, SOPHIE, SHANNON],
    winner: JAKE,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: ALEX,
    },
  },
  {
    captain: {
      ids: ["jeremy"],
    },
    name: "Jere-atrics",
    players: [NATE, JAKE, STEVEN, SOPHIE, SHANNON, SAVANNAH],
    winner: SOPHIE,
    swap: {
      week: 4,
      playerOut: JAKE,
      playerIn: MC,
    },
  },
  {
    captain: {
      ids: ["jessie"],
    },
    name: "Outwit, Outplay, Out-Rizz",
    players: [SAVANNAH, STEVEN, RIZO, JAKE, SOPHI, SOPHIE],
    winner: RIZO,
    swap: {
      week: 7,
      playerOut: JAKE,
      playerIn: ALEX,
    },
  },
  {
    captain: {
      ids: ["anne"],
    },
    name: "Challenge Beasts",
    players: [SAVANNAH, STEVEN, RIZO, JAKE, MC, SOPHIE],
    winner: SAVANNAH,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: JASON,
    },
  },
]);

export const fakeTeams: Array<Team> = [
  {
    name: "1",
    captain: {
      ids: ["alex"],
    },
    winner: ALEX,
    players: [ALEX, ANNIE, JAKE, JASON, JAWAN, JEREMIAH],
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
    winner: ALEX,
    players: [KRISTINA, MATT, MC, NATE, NICOLE, RIZO],
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
    winner: ALEX,
    players: [SAGE, SAVANNAH, SHANNON, SOPHI, SOPHIE, STEVEN],
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
    winner: ALEX,
    players: [MATT, MC, NATE, NICOLE, RIZO, SAGE],
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
    winner: ALEX,
    players: [SOPHI, SOPHIE, STEVEN, KRISTINA, MATT, MC],
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
    winner: ALEX,
    players: [JAWAN, JEREMIAH, KRISTINA, MATT, MC, NATE],
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
    winner: ALEX,
    players: [NATE, NICOLE, RIZO, SAGE, SAVANNAH, SHANNON],
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
    winner: ALEX,
    players: [SHANNON, SOPHI, SOPHIE, STEVEN, KRISTINA, MATT],
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
    winner: ALEX,
    players: [JAWAN, JEREMIAH, KRISTINA, MATT, MC, NATE],
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
    winner: ALEX,
    players: [NICOLE, RIZO, SAGE, SAVANNAH, SHANNON, SOPHI],
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
    winner: ALEX,
    players: [SOPHIE, STEVEN, KRISTINA, MATT, MC, NATE],
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
    winner: ALEX,
    players: [JAWAN, JEREMIAH, NICOLE, RIZO, SAGE, SAVANNAH],
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
    winner: ALEX,
    players: [SHANNON, SOPHI, SOPHIE, STEVEN, KRISTINA, NATE],
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
    winner: ALEX,
    players: [MATT, MC, NICOLE, RIZO, SAGE, SAVANNAH],
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
    winner: ALEX,
    players: [JAWAN, JEREMIAH, SHANNON, SOPHI, SOPHIE, STEVEN],
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
    winner: ALEX,
    players: [KRISTINA, MATT, MC, NATE, NICOLE, RIZO],
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
    winner: ALEX,
    players: [SAGE, SAVANNAH, SHANNON, SOPHI, SOPHIE, STEVEN],
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
    winner: ALEX,
    players: [JAWAN, JEREMIAH, KRISTINA, MATT, MC, NATE],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
];
