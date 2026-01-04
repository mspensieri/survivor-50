import { PlayerKeys, Points } from "./types";

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

interface Week extends Partial<Record<PlayerKeys, Points>> {
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
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Abysmal challenge",
          points: 2,
        },
      ],
    },
    [ANNIE]: {
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [JAKE]: {
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [JASON]: {
      teamImmunity: 1,
    },
    [JAWAN]: {
      teamImmunity: 1,
      upsideDown: [
        {
          reason: "Random crying",
          points: 4,
        },
      ],
    },
    [JEREMIAH]: {
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [KRISTINA]: {
      teamImmunity: 1,
    },
    [MATT]: {
      teamImmunity: 1,
    },
    [MC]: {
      teamImmunity: 1,
    },
    [NATE]: {
      teamImmunity: 1,
    },
    [NICOLE]: {
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Vomit",
          points: 2,
        },
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Blindsided at tribal",
          points: 6,
        },
        {
          reason: "Voted out first",
          points: 6,
        },
      ],
    },
    [RIZO]: {
      teamImmunity: 1,
      upsideDown: [
        {
          reason: "Abysmal challenge",
          points: 2,
        },
        {
          reason: "Random crying",
          points: 4,
        },
      ],
    },
    [SAGE]: {
      teamImmunity: 1,
    },
    [SAVANNAH]: {
      teamImmunity: 1,
    },
    [SHANNON]: {
      teamImmunity: 1,
    },
    [SOPHI]: {
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [SOPHIE]: {
      teamImmunity: 1,
    },
    [STEVEN]: {
      teamImmunity: 1,
    },
  },
  {
    eliminated: [ANNIE],
    [ALEX]: {
      survival: 1,
      votes: 1,
      advantage: 1,
      idolFound: 2,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Abysmal challenge",
          points: 2,
        },
      ],
    },
    [ANNIE]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Blindsided at tribal",
          points: 6,
        },
        {
          reason: "Voted out pre-merge",
          points: 4,
        },
      ],
    },
    [JAKE]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [JASON]: {
      survival: 1,
      teamImmunity: 1,
    },
    [JAWAN]: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
    [JEREMIAH]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [KRISTINA]: {
      survival: 1,
      teamImmunity: 1,
    },
    [MATT]: {
      survival: 1,
      teamImmunity: 1,
    },
    [MC]: {
      survival: 1,
      teamImmunity: 1,
    },
    [NATE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [RIZO]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SAGE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SAVANNAH]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SHANNON]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SOPHI]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Abysmal challenge",
          points: 2,
        },
      ],
    },
    [SOPHIE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [STEVEN]: {
      survival: 1,
      teamImmunity: 1,
    },
  },
  {
    eliminated: [JAKE, JEREMIAH],
    [ALEX]: {
      survival: 1,
      votes: 1,
      voteNullified: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [JAKE]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Med evac pre-merge",
          points: 4,
        },
      ],
    },
    [JASON]: {
      survival: 1,
      teamImmunity: 1,
    },
    [JAWAN]: {
      survival: 1,
      teamImmunity: 1,
    },
    [JEREMIAH]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Voted out pre-merge",
          points: 4,
        },
      ],
    },
    [KRISTINA]: {
      survival: 1,
      teamImmunity: 1,
    },
    [MATT]: {
      survival: 1,
      teamImmunity: 1,
    },
    [MC]: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
    [NATE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [RIZO]: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
    [SAGE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SAVANNAH]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SHANNON]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SOPHI]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [SOPHIE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [STEVEN]: {
      survival: 1,
      teamImmunity: 1,
    },
  },
  {
    eliminated: [MATT],
    [ALEX]: {
      survival: 1,
      teamImmunity: 1,
    },
    [JASON]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [JAWAN]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [KRISTINA]: {
      survival: 1,
      teamImmunity: 1,
    },
    [MATT]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Voted out first",
          points: 6,
        },
      ],
    },
    [MC]: {
      survival: 1,
      teamImmunity: 1,
    },
    [NATE]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [RIZO]: {
      survival: 1,
      votes: 1,
      idolFound: 2,
    },
    [SAGE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SAVANNAH]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Voted wrong",
          points: 2,
        },
      ],
    },
    [SHANNON]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SOPHI]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Voted wrong",
          points: 2,
        },
      ],
    },
    [SOPHIE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [STEVEN]: {
      survival: 1,
      teamImmunity: 1,
    },
  },
  {
    eliminated: [JASON],
    [ALEX]: {
      survival: 1,
      teamImmunity: 1,
    },
    [JASON]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Voted out pre-merge",
          points: 4,
        },
      ],
    },
    [JAWAN]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [KRISTINA]: {
      survival: 1,
      teamImmunity: 1,
    },
    [MC]: {
      survival: 1,
      teamImmunity: 1,
    },
    [NATE]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [RIZO]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [SAGE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SAVANNAH]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [SHANNON]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SOPHI]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [SOPHIE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [STEVEN]: {
      survival: 1,
      teamImmunity: 1,
    },
  },
  {
    eliminated: [SHANNON],
    [ALEX]: {
      survival: 1,
      teamImmunity: 1,
    },
    [JAWAN]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [KRISTINA]: {
      survival: 1,
      teamImmunity: 1,
    },
    [MC]: {
      survival: 1,
      teamImmunity: 1,
    },
    [NATE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [RIZO]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SAGE]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
    [SAVANNAH]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SHANNON]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Blindsided at tribal",
          points: 6,
        },
        {
          reason: "Voted out first",
          points: 6,
        },
      ],
    },
    [SOPHI]: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
    [SOPHIE]: {
      survival: 1,
      teamImmunity: 1,
    },
    [STEVEN]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Losing team",
          points: 2,
        },
      ],
    },
  },
  {
    jury: [NATE],
    [ALEX]: {
      survival: 1,
      votes: 1,
    },
    [JAWAN]: {
      survival: 1,
      votes: 1,
    },
    [KRISTINA]: {
      survival: 1,
      votes: 1,
    },
    [MC]: {
      survival: 1,
      idolFound: 2,
      votes: 1,
    },
    [NATE]: {
      survival: 1,
      placement: 2,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Voted out post-merge",
          points: 2,
        },
      ],
    },
    [RIZO]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
      ],
    },
    [SAGE]: {
      survival: 1,
      advantage: 1,
      votes: 1,
    },
    [SAVANNAH]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
      ],
    },
    [SOPHI]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
      ],
    },
    [SOPHIE]: {
      survival: 1,
      individualImmunity: 2,
      votes: 1,
    },
    [STEVEN]: {
      survival: 1,
      votes: 1,
    },
  },
  {
    jury: [MC],
    [ALEX]: {
      survival: 1,
      teamImmunity: 1,
    },
    [JAWAN]: {
      survival: 1,
      votes: 1,
    },
    [KRISTINA]: {
      survival: 1,
      idolFound: 2,
      teamImmunity: 1,
    },
    [MC]: {
      survival: 1,
      placement: 2,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Voted out post-merge",
          points: 2,
        },
      ],
    },
    [RIZO]: {
      survival: 1,
      votes: 1,
    },
    [SAGE]: {
      survival: 1,
      votes: 1,
    },
    [SAVANNAH]: {
      survival: 1,
      individualImmunity: 2,
      advantage: 1,
    },
    [SOPHI]: {
      survival: 1,
      teamImmunity: 1,
    },
    [SOPHIE]: {
      survival: 1,
      votes: 1,
    },
    [STEVEN]: {
      survival: 1,
      teamImmunity: 1,
    },
  },
  {
    jury: [ALEX],
    [ALEX]: {
      survival: 1,
      placement: 2,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Voted out post-merge",
          points: 2,
        },
      ],
    },
    [JAWAN]: {
      survival: 1,
      votes: 1,
    },
    [KRISTINA]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
      ],
    },
    [RIZO]: {
      survival: 1,
      votes: 1,
    },
    [SAGE]: {
      survival: 1,
      votes: 1,
    },
    [SAVANNAH]: {
      survival: 1,
      individualImmunity: 2,
      votes: 1,
    },
    [SOPHI]: {
      survival: 1,
      votes: 1,
    },
    [SOPHIE]: {
      survival: 1,
      votes: 1,
    },
    [STEVEN]: {
      survival: 1,
      individualImmunity: 2,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
      ],
    },
  },
  {
    jury: [JAWAN],
    [JAWAN]: {
      survival: 1,
      placement: 2,
      upsideDown: [
        {
          reason: "Voted out post-merge",
          points: 2,
        },
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Blindsided at tribal",
          points: 6,
        },
      ],
    },
    [KRISTINA]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Threatening to quit",
          points: 4,
        },
      ],
    },
    [RIZO]: {
      survival: 1,
      votes: 1,
      upsideDown: [
        {
          reason: "Random crying",
          points: 4,
        },
      ],
    },
    [SAGE]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
      ],
    },
    [SAVANNAH]: {
      survival: 1,
      votes: 2,
    },
    [SOPHI]: {
      survival: 1,
      votes: 1,
    },
    [SOPHIE]: {
      survival: 1,
      individualImmunity: 2,
      votes: 1,
    },
    [STEVEN]: {
      survival: 1,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
      ],
    },
  },
  {
    jury: [SOPHIE],
    [KRISTINA]: {
      survival: 1,
      votes: 1,
    },
    [RIZO]: {
      survival: 1,
      votes: 1,
    },
    [SAGE]: {
      survival: 1,
      votes: 1,
    },
    [SAVANNAH]: {
      survival: 1,
      votes: 1,
    },
    [SOPHI]: {
      survival: 1,
      votes: 1,
    },
    [SOPHIE]: {
      survival: 1,
      placement: 2,
      upsideDown: [
        {
          reason: "Voted wrong",
          points: 2,
        },
        {
          reason: "Voted out post-merge",
          points: 2,
        },
      ],
    },
    [STEVEN]: {
      survival: 1,
      votes: 1,
      advantage: 1,
      individualImmunity: 2,
    },
  },
  {
    jury: [STEVEN],
    [KRISTINA]: {
      survival: 1,
      votes: 1,
    },
    [RIZO]: {
      survival: 1,
      votes: 1,
    },
    [SAGE]: {
      survival: 1,
      votes: 1,
    },
    [SAVANNAH]: {
      survival: 1,
      individualImmunity: 2,
    },
    [SOPHI]: {
      survival: 1,
      votes: 1,
    },
    [STEVEN]: {
      survival: 1,
      placement: 2,
    },
  },
  {
    eliminated: [SOPHI, SAGE],
    jury: [KRISTINA, RIZO],
    [KRISTINA]: {
      survival: 1,
      placement: 3,
    },
    [RIZO]: {
      survival: 2,
      votes: 1,
      placement: 5,
    },
    [SAGE]: {
      survival: 2,
      votes: 1,
      placement: 7,
    },
    [SAVANNAH]: {
      survival: 2,
      individualImmunity: 2,
      votes: 1,
      placement: 10,
      fire: 1,
    },
    [SOPHI]: {
      survival: 2,
      votes: 1,
      advantage: 1,
      individualImmunity: 2,
      placement: 8,
    },
  },
];
