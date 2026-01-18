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
  RICK,
  STEPHENIE,
  TIFFANY,
} = PlayerKeys;

export const weeks: Array<Week> = [
  {
    eliminated: [GENEVIEVE, MIKE, OZZY, Q, RICK, STEPHENIE, TIFFANY],
    [ANGELINA]: {
      standard: {
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
        abysmalChallenge: 2,
      },
    },
    [AUBRY]: {
      standard: {
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [CHARLIE]: {
      standard: {
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [CHRISSY]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [CHRISTIAN]: {
      standard: {
        teamImmunity: 1,
      },
      upsideDown: {
        crying: 4,
      },
    },
    [CIRIE]: {
      standard: {
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [COACH]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [COLBY]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [DEE]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [EMILY]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [GENEVIEVE]: {
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
    [JENNA]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [SAVANNAH]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [JOE]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [JONATHAN]: {
      standard: {
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [KAMILLA]: {
      standard: {
        teamImmunity: 1,
      },
    },
    [KYLE]: {
      standard: {
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [AUBRY],
    [ANGELINA]: {
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
    [AUBRY]: {
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
    [CHARLIE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [CHRISSY]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CHRISTIAN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
        advantage: 1,
      },
    },
    [CIRIE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [COACH]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [COLBY]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [DEE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [EMILY]: {
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
    [JENNA]: {
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
    [JOE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JONATHAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
        abysmalChallenge: 2,
      },
    },
    [KAMILLA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KYLE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [CHARLIE, CIRIE],
    [ANGELINA]: {
      standard: {
        survival: 1,
        votes: 1,
        voteNullified: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [CHARLIE]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        medEvac: 4,
      },
    },
    [CHRISSY]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CHRISTIAN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CIRIE]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
        outPreMerge: 4,
      },
    },
    [COACH]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [COLBY]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [DEE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
        advantage: 1,
      },
    },
    [EMILY]: {
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
    [JENNA]: {
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
    [JOE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JONATHAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [KAMILLA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KYLE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [COLBY],
    [ANGELINA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CHRISSY]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [CHRISTIAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [COACH]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [COLBY]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
        outFirst: 6,
      },
    },
    [DEE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [EMILY]: {
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
    [JENNA]: {
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
    [JOE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JONATHAN]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
      },
    },
    [KAMILLA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KYLE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [CHRISSY],
    [ANGELINA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CHRISSY]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        losingTeam: 2,
        wrongVote: 2,
        outPreMerge: 4,
      },
    },
    [CHRISTIAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [COACH]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [DEE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [EMILY]: {
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
    [JENNA]: {
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
    [JOE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [JONATHAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [KAMILLA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KYLE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [JOE],
    [ANGELINA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CHRISTIAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
      upsideDown: {
        losingTeam: 2,
      },
    },
    [COACH]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [DEE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [EMILY]: {
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
    [JENNA]: {
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
    [JOE]: {
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
    [JONATHAN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
        advantage: 1,
      },
    },
    [KAMILLA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KYLE]: {
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
    jury: [EMILY],
    [ANGELINA]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [CHRISTIAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [COACH]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [DEE]: {
      standard: {
        survival: 1,
        idolFound: 2,
        votes: 1,
      },
    },
    [EMILY]: {
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
    [JENNA]: {
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
    [JONATHAN]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        wrongVote: 2,
      },
    },
    [KAMILLA]: {
      standard: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
    [KYLE]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
  },
  {
    jury: [DEE],
    [ANGELINA]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CHRISTIAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [COACH]: {
      standard: {
        survival: 1,
        idolFound: 2,
        teamImmunity: 1,
      },
    },
    [DEE]: {
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
    [JENNA]: {
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
    [JONATHAN]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KAMILLA]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [KYLE]: {
      standard: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    jury: [ANGELINA],
    [ANGELINA]: {
      standard: {
        survival: 1,
        placement: 2,
      },
      upsideDown: {
        wrongVote: 2,
        outPostMerge: 2,
      },
    },
    [CHRISTIAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [COACH]: {
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
    [JENNA]: {
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
    [JONATHAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [KAMILLA]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [KYLE]: {
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
    jury: [CHRISTIAN],
    [CHRISTIAN]: {
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
    [COACH]: {
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
    [JENNA]: {
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
    [JONATHAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [KAMILLA]: {
      standard: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
    [KYLE]: {
      standard: {
        survival: 1,
      },
      upsideDown: {
        wrongVote: 2,
      },
    },
  },
  {
    jury: [KAMILLA],
    [COACH]: {
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
    [JENNA]: {
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
    [JONATHAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [KAMILLA]: {
      standard: {
        survival: 1,
        placement: 2,
      },
      upsideDown: {
        wrongVote: 2,
        outPostMerge: 2,
      },
    },
    [KYLE]: {
      standard: {
        survival: 1,
        votes: 1,
        advantage: 1,
        individualImmunity: 2,
      },
    },
  },
  {
    jury: [KYLE],
    [COACH]: {
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
    [JENNA]: {
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
    [JONATHAN]: {
      standard: {
        survival: 1,
        votes: 1,
      },
    },
    [KYLE]: {
      standard: {
        survival: 1,
        placement: 2,
      },
    },
  },
  {
    eliminated: [JONATHAN, JENNA],
    jury: [COACH, RIZO],
    [COACH]: {
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
    [JENNA]: {
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
    [JONATHAN]: {
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
