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
  {
    eliminated: [SAVANNAH],
    [ANGELINA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CHARLIE]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [CHRISSY]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [CHRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        idolFound: 2,
        votes: 1,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [COACH]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
        survival: 1,
      },
    },
    [COLBY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [DEE]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
        survival: 1,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [GENEVIEVE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KAMILLA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MIKE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [Q]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [SAVANNAH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [STEPHENIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [Q],
    [ANGELINA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CHARLIE]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [CHRISSY]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [CHRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [COACH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [COLBY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [DEE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [GENEVIEVE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KAMILLA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MIKE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [Q]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [STEPHENIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [MIKE],
    [ANGELINA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CHARLIE]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [CHRISSY]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [CHRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [COACH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [COLBY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [DEE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [GENEVIEVE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
        idolFound: 2,
      },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KAMILLA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MIKE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [STEPHENIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [ANGELINA, CHARLIE],
    [ANGELINA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CHARLIE]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [CHRISSY]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [CHRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [COACH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [COLBY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [DEE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [GENEVIEVE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [KAMILLA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [STEPHENIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [GENEVIEVE, KAMILLA, COLBY],
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CHRISSY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [CHRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [COACH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [COLBY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [DEE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [GENEVIEVE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [KAMILLA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [STEPHENIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
  },
  {
    jury: [DEE],
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CHRISSY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [CHRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [COACH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [DEE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        placement: 2,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { survival: 1, individualImmunity: 2 },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [STEPHENIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        advantage: 1,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
  },
  {
    jury: [COACH, CHRISSY],
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CHRISSY]: {
      [RuleSet.STANDARD]: { survival: 1, placement: 2 },
    },
    [CHRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [COACH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        placement: 2,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1, individualImmunity: 2 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [STEPHENIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
  },
  {
    jury: [CHRISTIAN],
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CHRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
        placement: 2,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1, individualImmunity: 2 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [STEPHENIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
  },
  {
    jury: [STEPHENIE],
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1, advantage: 1, idolFound: 2 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [STEPHENIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        placement: 2,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
        individualImmunity: 2,
      },
    },
  },
  {
    jury: [EMILY, OZZY],
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 2,
      },
    },
    [EMILY]: {
      [RuleSet.STANDARD]: { survival: 1, placement: 2 },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 2,
        individualImmunity: 2,
      },
    },
    [OZZY]: {
      [RuleSet.STANDARD]: { survival: 1, placement: 2 },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1, voteNullified: 2 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
  },
  {
    jury: [CIRIE, RICK],
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 2,
      },
    },
    [CIRIE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
        placement: 2,
      },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 2, individualImmunity: 2 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 2,
      },
    },
    [RICK]: {
      [RuleSet.STANDARD]: { survival: 1, placement: 2 },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 2,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
        individualImmunity: 2,
      },
    },
  },
  {
    jury: [TIFFANY, RIZO],
    eliminated: [JOE, JONATHAN],
    [AUBRY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
        placement: 10,
      },
    },
    [JOE]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1, placement: 7 },
    },
    [JONATHAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
        fire: 1,
        placement: 8,
      },
    },
    [RIZO]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
        placement: 5,
      },
    },
    [TIFFANY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        placement: 3,
      },
    },
  },
];
