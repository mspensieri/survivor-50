import { PLAYERS } from "./players";
import { Team } from "./types";

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

export const teams: Array<Team> = [
  {
    captain: "Alex",
    name: "Wendy's Chickens",
    accolades: {
      first: [48],
    },
    players: [SAVANNAH, JEREMIAH, ALEX, KRISTINA, SOPHI, SHANNON],
    winner: ALEX,
    swap: {
      week: 5,
      playerOut: JEREMIAH,
      playerIn: SAGE,
    },
  },
  {
    captain: "Kara",
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
    captain: "Joanne",
    name: "TEAM JO",
    accolades: {
      third: [47],
    },
    players: [SAVANNAH, STEVEN, RIZO, JAKE, ALEX, MATT],
    winner: STEVEN,
    swap: {
      week: 5,
      playerOut: MATT,
      playerIn: MC,
    },
  },
  {
    captain: "Spen",
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
    captain: "Andrea and Susan",
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
    captain: "Diego",
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
    captain: "Elizabeth",
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
    captain: "Mikey",
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
    captain: "Alec",
    name: "The Ghost of Andy",
    players: [SAVANNAH, ANNIE, RIZO, JASON, JAKE, SOPHI],
    winner: JAKE,
  },
  {
    captain: "Leila",
    name: "Got Nothin' For Ya",
    players: [KRISTINA, STEVEN, JASON, JAKE, JAWAN, SOPHIE],
    winner: STEVEN,
  },
  {
    captain: "Katie",
    name: "Truth Kamikazee",
    accolades: {
      second: [45],
    },
    players: [STEVEN, RIZO, NATE, JAKE, JAWAN, NICOLE],
    winner: JAKE,
    swap: {
      week: 1,
      playerOut: NICOLE,
      playerIn: JASON,
    },
  },
  {
    captain: "Danny",
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
    captain: "Stanley",
    name: "UNDERDOGS",
    accolades: {
      second: [44],
    },
    players: [SOPHIE, ALEX, NATE, NICOLE, MATT, JEREMIAH],
    winner: SOPHIE,
    swap: {
      week: 1,
      playerOut: NICOLE,
      playerIn: JASON,
    },
  },
  {
    captain: "Sandy",
    name: "Sandy's Spynest",
    accolades: {
      second: [46],
    },
    players: [KRISTINA, MC, RIZO, JAKE, MATT, SOPHIE],
    winner: KRISTINA,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: JASON,
    },
  },
  {
    captain: "Colleen",
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
    captain: "Brendan",
    name: "KING OF THE JUNGLE",
    accolades: {
      third: [45],
    },
    players: [SAVANNAH, SAGE, RIZO, JAKE, SOPHI, SHANNON],
    winner: JAKE,
    swap: {
      week: 4,
      playerOut: JAKE,
      playerIn: STEVEN,
    },
  },
  {
    captain: "Kevin",
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
    captain: "Carrie",
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
    captain: "Sean",
    name: "Leafs Nation",
    accolades: {
      third: [46],
    },
    players: [SAVANNAH, STEVEN, RIZO, JAKE, SOPHI, SHANNON],
    winner: SOPHI,
    swap: {
      week: 4,
      playerOut: JAKE,
      playerIn: ALEX,
    },
  },
  {
    captain: "Sarah",
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
    captain: "Frank",
    name: "Bottom of the Pool",
    players: [SAGE, JEREMIAH, JAWAN, JASON, MATT, SHANNON],
    winner: JAWAN,
  },
  {
    captain: "Thomas",
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
    captain: "Vanesa",
    name: "The Immunity Drip",
    accolades: {
      second: [48],
    },
    players: [SAVANNAH, STEVEN, RIZO, JAKE, MC, NICOLE],
    winner: JAKE,
    swap: {
      week: 1,
      playerOut: NICOLE,
      playerIn: NATE,
    },
  },
  {
    captain: "Erick",
    name: "Chuckwurself before you jeckwurself",
    accolades: {
      second: [47],
    },
    players: [JAKE, STEVEN, RIZO, JASON, MC, SOPHI],
    winner: MC,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: NATE,
    },
  },
  {
    captain: "Andrea R",
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
    captain: "Menard",
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
    captain: "Leigh",
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
    captain: "Elana",
    name: "Probst Malone",
    players: [JEREMIAH, NATE, MC, MATT, NICOLE, ANNIE],
    winner: MC,
  },
  {
    captain: "Alyssa and Adam",
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
    captain: "Greg",
    name: "Ate 2 Much Kokoda",
    accolades: {
      first: [46],
      second: [44],
    },
    players: [SAVANNAH, JEREMIAH, RIZO, JAKE, SOPHI, SHANNON],
    winner: JEREMIAH,
    swap: {
      week: 3,
      playerOut: JEREMIAH,
      playerIn: ALEX,
    },
  },
  {
    captain: "Andy and Lally",
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
    captain: "Jacob",
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
    captain: "Jacklyn",
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
    captain: "Sab and Bruno",
    name: "Bing and Bugz",
    players: [JAKE, SAVANNAH, SAGE, ANNIE, STEVEN, JAWAN],
    winner: SAVANNAH,
  },
  {
    captain: "Meagan",
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
    captain: "Taylor",
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
    captain: "Dan and Dana",
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
    captain: "Dean",
    name: "Dean's ⒿETⓈ",
    accolades: {
      first: [44],
      third: [45],
    },
    players: [STEVEN, SAGE, JAKE, SOPHI, SOPHIE, SHANNON],
    winner: JAKE,
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: ALEX,
    },
  },
  {
    captain: "Jeremy",
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
    captain: "Jessie",
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
    captain: "Anne",
    name: "Challenge Beasts",
    players: [SAVANNAH, STEVEN, RIZO, JAKE, MC, SOPHIE],
    winner: SAVANNAH,
    accolades: {
      first: [45],
    },
    swap: {
      week: 3,
      playerOut: JAKE,
      playerIn: JASON,
    },
  },
];

export const fakeTeams = [
  {
    name: "1",
    winner: ALEX,
    players: [ALEX, ANNIE, JAKE, JASON, JAWAN, JEREMIAH],
  },
  {
    name: "2",
    winner: ALEX,
    players: [KRISTINA, MATT, MC, NATE, NICOLE, RIZO],
  },
  {
    name: "3",
    winner: ALEX,
    players: [SAGE, SAVANNAH, SHANNON, SOPHI, SOPHIE, STEVEN],
  },
  {
    name: "4",
    winner: ALEX,
    players: [MATT, MC, NATE, NICOLE, RIZO, SAGE],
  },
  {
    name: "5",
    winner: ALEX,
    players: [SOPHI, SOPHIE, STEVEN, KRISTINA, MATT, MC],
  },
  {
    name: "6",
    winner: ALEX,
    players: [JAWAN, JEREMIAH, KRISTINA, MATT, MC, NATE],
  },
  {
    name: "7",
    winner: ALEX,
    players: [NATE, NICOLE, RIZO, SAGE, SAVANNAH, SHANNON],
  },
  {
    name: "8",
    winner: ALEX,
    players: [SHANNON, SOPHI, SOPHIE, STEVEN, KRISTINA, MATT],
  },
];
