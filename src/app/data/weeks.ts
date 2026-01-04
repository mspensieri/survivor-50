import { PlayerKeys, RuleSet, StandardPoints, UpsideDownPoints } from "./types";

export const airDates = [
  "Sept 24",
  "Oct 1",
  "Oct 8",
  "Oct 15",
  "Oct 22",
  "Oct 29",
  "Nov 5",
  "Nov 12",
  "Nov 19",
  "Nov 26",
  "Dec 3",
  "Dec 10",
  "Dec 17",
];

type WeeklyPoints = {
  [RuleSet.STANDARD]?: Partial<StandardPoints>;
  [RuleSet.UPSIDE_DOWN]?: Partial<UpsideDownPoints>;
};

interface Week extends Partial<Record<PlayerKeys, WeeklyPoints>> {
  eliminated?: Array<PlayerKeys>;
  jury?: Array<PlayerKeys>;
}

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
} = PlayerKeys;

export const weeks: Array<Week> = [
  {
    eliminated: [NICOLE],
    [ALEX]: {
      standard: {
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
        abysmalChallenge: 2,
      },
    },
    [ANNIE]: {
      standard: {
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [JAKE]: {
      standard: {
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [JASON]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [JAWAN]: {
      standard: {
        teamImmunity: 1,
      },
      upsideDown: {
        crying: 4,
      },
    },
    [JEREMIAH]: {
      standard: {
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [KRISTINA]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [MATT]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [MC]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [NATE]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [NICOLE]: {
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
        blindsided: 6,
        outFirst: 6,
        vomit: 2,
      },
    },
    [RIZO]: {
      standard: {
        teamImmunity: 1,
      },
      upsideDown: {
        abysmalChallenge: 2,
        crying: 4,
      },
    },
    [SAGE]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [SHANNON]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [SOPHI]: {
      standard: {
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [SOPHIE]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [STEVEN]: {
      standard: {
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [ANNIE],
    [ALEX]: {
      standard: {
        survival: 1,
        votes: 1,
        advantage: 1,
        idolFound: 2,
      },
      upsideDown: {
        losingTeam: 2,
        abysmalChallenge: 2,
      },
    },
    [ANNIE]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
        blindsided: 6,
        outPreMerge: 4,
      },
    },
    [JAKE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [JASON]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JAWAN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
        advantage: 1,
      },
    },
    [JEREMIAH]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [KRISTINA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MATT]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MC]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [NATE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SHANNON]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
        abysmalChallenge: 2,
      },
    },
    [SOPHIE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [JAKE, JEREMIAH],
    [ALEX]: {
      standard: {
        survival: 1,
        votes: 1,
        voteNullified: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [JAKE]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        medEvac: 4,
      },
    },
    [JASON]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JAWAN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JEREMIAH]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
        outPreMerge: 4,
      },
    },
    [KRISTINA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MATT]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MC]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
        advantage: 1,
      },
    },
    [NATE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
        advantage: 1,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SHANNON]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [SOPHIE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [MATT],
    [ALEX]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JASON]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [JAWAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [KRISTINA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MATT]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
        outFirst: 6,
      },
    },
    [MC]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [NATE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
        votes: 1,
        idolFound: 2,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
      },
    },
    [SHANNON]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
      },
    },
    [SOPHIE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [JASON],
    [ALEX]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JASON]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
        outPreMerge: 4,
      },
    },
    [JAWAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [KRISTINA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MC]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [NATE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [SHANNON]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [SOPHIE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [SHANNON],
    [ALEX]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JAWAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [KRISTINA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MC]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [NATE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SHANNON]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
        blindsided: 6,
        outFirst: 6,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
        advantage: 1,
      },
    },
    [SOPHIE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
  },
  {
    jury: [NATE],
    [ALEX]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [JAWAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [KRISTINA]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [MC]: {
      standard: {
        survival: 1,
        idolFound: 2,
        votes: 1,
      },
    },
    [NATE]: {
      standard: {
        survival: 1,
        placement: 2,
      },
      upsideDown: {
        wrongVote: 2,
        outPostMerge: 2,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        wrongVote: 2,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
        advantage: 1,
        votes: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        wrongVote: 2,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        wrongVote: 2,
      },
    },
    [SOPHIE]: {
      standard: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
  },
  {
    jury: [MC],
    [ALEX]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JAWAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [KRISTINA]: {
      standard: {
        survival: 1,
        idolFound: 2,
        teamImmunity: 1,
      },
    },
    [MC]: {
      standard: {
        survival: 1,
        placement: 2,
      },
      upsideDown: {
        wrongVote: 2,
        outPostMerge: 2,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
        individualImmunity: 2,
        advantage: 1,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SOPHIE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    jury: [ALEX],
    [ALEX]: {
      standard: {
        survival: 1,
        placement: 2,
      },
      upsideDown: {
        wrongVote: 2,
        outPostMerge: 2,
      },
    },
    [JAWAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [KRISTINA]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        wrongVote: 2,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SOPHIE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
        individualImmunity: 2,
      },
      upsideDown: {
        wrongVote: 2,
      },
    },
  },
  {
    jury: [JAWAN],
    [JAWAN]: {
      standard: {
        survival: 1,
        placement: 2,
      },
      upsideDown: {
        outPostMerge: 2,
        wrongVote: 2,
        blindsided: 6,
      },
    },
    [KRISTINA]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        wrongVote: 2,
        threatenedToQuit: 4,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        crying: 4,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        wrongVote: 2,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
        votes: 2,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SOPHIE]: {
      standard: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        wrongVote: 2,
      },
    },
  },
  {
    jury: [SOPHIE],
    [KRISTINA]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SOPHIE]: {
      standard: {
        survival: 1,
        placement: 2,
      },
      upsideDown: {
        wrongVote: 2,
        outPostMerge: 2,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
        votes: 1,
        advantage: 1,
        individualImmunity: 2,
      },
    },
  },
  {
    jury: [STEVEN],
    [KRISTINA]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [RIZO]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SAGE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 1,
        individualImmunity: 2,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [STEVEN]: {
      standard: {
        survival: 1,
        placement: 2,
      },
    },
  },
  {
    eliminated: [SOPHI, SAGE],
    jury: [KRISTINA, RIZO],
    [KRISTINA]: {
      standard: {
        survival: 1,
        placement: 3,
      },
    },
    [RIZO]: {
      standard: {
        survival: 2,
        votes: 1,
        placement: 5,
      },
    },
    [SAGE]: {
      standard: {
        survival: 2,
        votes: 1,
        placement: 7,
      },
    },
    [SAVANNAH]: {
      standard: {
        survival: 2,
        individualImmunity: 2,
        votes: 1,
        placement: 10,
        fire: 1,
      },
    },
    [SOPHI]: {
      standard: {
        survival: 2,
        votes: 1,
        advantage: 1,
        individualImmunity: 2,
        placement: 8,
      },
    },
  },
];
