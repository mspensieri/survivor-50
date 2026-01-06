import { useContext } from "react";
import {
  CartesianGrid,
  Line,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  LineChart,
} from "recharts";

import { Team } from "../data/types";
import TeamContext from "../context/teamContext";
import { airDates } from "../data/weeks";
import RuleSetContext from "../context/ruleSetContext";

const generateHash = (str: string) => {
  let hash = 0;
  for (const char of str) {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    hash |= 0; // Constrain to 32bit integer
  }
  return hash;
};

const styles: Record<string, React.CSSProperties> = {
  tooltip: {
    backgroundColor: "var(--component-background-color-primary)",
    color: "var(--component-text-color-primary)",
  },
};

export default function PlacementChart(props: {
  team: Team;
  currentWeek: number;
  simple?: boolean;
}) {
  const { team, currentWeek, simple = false } = props;
  const teamRankings = useContext(TeamContext);
  const ruleSet = useContext(RuleSetContext);

  const areaGradient: Array<JSX.Element> = [];
  const lineGradient: Array<JSX.Element> = [];

  let segment: { direction?: number; startIndex: number } | undefined;

  function beginSegment(index: number) {
    segment = { startIndex: index };
  }

  // Work around a bug where the line doesn't render if its simply a straight, flat line
  let flatLineOnly = true;
  function endSegment(index: number) {
    if (typeof segment?.direction === "undefined") {
      segment = undefined;
      return;
    }

    let color: string;
    if (segment.direction > 0) {
      color = "var(--red-indicator-color)";
      flatLineOnly = false;
    } else if (segment.direction < 0) {
      color = "var(--green-indicator-color)";
      flatLineOnly = false;
    } else {
      color = "var(--component-text-color-secondary)";
    }

    const startPercentage = (segment.startIndex / currentWeek) * 100;
    const endPercentage = (index / currentWeek) * 100;

    areaGradient.push(
      <stop
        key={areaGradient.length}
        offset={`${startPercentage}%`}
        stopColor={color}
      />,
      <stop
        key={areaGradient.length + 1}
        offset={`${endPercentage}%`}
        stopColor={color}
      />
    );
    lineGradient.push(
      <stop
        key={lineGradient.length}
        offset={`${startPercentage}%`}
        stopColor={color}
      />,
      <stop
        key={lineGradient.length + 1}
        offset={`${endPercentage}%`}
        stopColor={color}
      />
    );

    segment = undefined;
  }

  const data = airDates.map((date, index) => {
    const thisWeekScore = teamRankings[index].find(
      (ts) => ts.team.name === team.name
    );

    if (index === 0) {
      beginSegment(index);
    } else if (index > currentWeek) {
      endSegment(index);

      return {
        name: date,
        value: null,
      };
    } else {
      const lastWeekScore = teamRankings[index - 1].find(
        (ts) => ts.team.name === team.name
      );

      if (thisWeekScore && lastWeekScore) {
        const diffDirection = Math.max(
          Math.min(
            1,
            thisWeekScore[ruleSet].rank - lastWeekScore[ruleSet].rank
          ),
          -1
        );

        if (
          typeof segment?.direction !== "undefined" &&
          diffDirection !== segment.direction
        ) {
          endSegment(index - 1);
          beginSegment(index - 1);
        }

        segment!.direction = diffDirection;
      }
    }

    if (index === currentWeek) {
      endSegment(index);
    }

    return {
      name: date,
      Rank: thisWeekScore?.[ruleSet].rank,
    };
  });

  const dataId = generateHash(JSON.stringify(data));
  if (simple) {
    return (
      <LineChart
        responsive
        data={data}
        style={{ width: "100%", aspectRatio: 2.75, pointerEvents: "none" }}
      >
        <defs>
          <linearGradient
            id={`simple-line-${dataId}`}
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
          >
            {...lineGradient}
          </linearGradient>
        </defs>
        <Line
          dataKey="Rank"
          stroke={
            flatLineOnly
              ? "var(--component-text-color-secondary)"
              : `url(#simple-line-${dataId})`
          }
          dot={false}
          strokeWidth={3}
          legendType="none"
          activeDot={false}
          isAnimationActive={false}
        />
        <XAxis
          stroke="var(--component-text-color-primary)"
          dataKey="name"
          tick={false}
        />
        <YAxis
          reversed
          domain={[1, teamRankings[0].length]}
          interval="preserveStartEnd"
          stroke="var(--component-text-color-primary)"
          tick={false}
        />
      </LineChart>
    );
  } else {
    return (
      <AreaChart data={data} style={{ width: "100%", aspectRatio: 1.618 }}>
        <defs>
          <linearGradient id={`area-${dataId}`} x1="0" y1="0" x2="100%" y2="0">
            {...areaGradient}
          </linearGradient>
          <linearGradient id={`line-${dataId}`} x1="0" y1="0" x2="100%" y2="0">
            {...lineGradient}
          </linearGradient>
        </defs>
        <Area
          dataKey="Rank"
          fill={`url(#area-${dataId})`}
          stroke={`url(#line-${dataId})`}
          baseValue={teamRankings[0].length}
        />
        <XAxis stroke="var(--component-text-color-primary)" dataKey="name" />
        <YAxis
          reversed
          domain={[1, teamRankings[0].length]}
          interval="preserveStartEnd"
          stroke="var(--component-text-color-primary)"
        />
        <Tooltip cursor={false} contentStyle={styles.tooltip} />
        <CartesianGrid />
      </AreaChart>
    );
  }
}
