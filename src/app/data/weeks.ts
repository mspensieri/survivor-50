import { PlayerKeys, RuleSet, StandardPoints, UpsideDownPoints } from "./types";

export const airDates = [
  "Feb 25",
  "Mar 4",
  "Mar 11",
  "Mar 18",
  "Mar 25",
  "Apr 1",
  "Apr 8",
  "Apr 15",
  "Apr 22",
  "Apr 29",
  "May 6",
  "May 13",
  "May 20",
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
  JENNA,
  JOE,
  JONATHAN,
  KAMILLA,
  KYLE,
  MIKE,
  OZZY,
  Q,
  RICK,
  RIZO,
  SAVANNAH,
  STEPHENIE,
  TIFFANY,
} = PlayerKeys;

export const weeks: Array<Week> = [
  {
    eliminated: [JENNA, KYLE],
    [ANGELINA]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [CHARLIE]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [CHRISSY]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [CHRISTIAN]: {
      [RuleSet.STANDARD]: {
        votes: 1,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        votes: 1,
      },
    },
    [COACH]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [COLBY]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [DEE]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { votes: 1 },
    },
    [GENEVIEVE]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
        idolFound: 2,
      },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { votes: 1 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [KAMILLA]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [KYLE]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [MIKE]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { votes: 1 },
    },
    [Q]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { votes: 1 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [SAVANNAH]: {
      [RuleSet.STANDARD]: {
        votes: 1,
        advantage: 1,
      },
    },
    [STEPHENIE]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
  },
];
