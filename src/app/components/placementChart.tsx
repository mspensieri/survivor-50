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

  const areaGradient = [
    <stop
      key="0"
      offset="0%"
      stopColor="var(--component-text-color-secondary)"
    />,
  ];
  const lineGradient = [
    <stop
      key="0"
      offset="0%"
      stopColor="var(--component-text-color-secondary)"
    />,
  ];

  let directionOfChange = 0;
  let currentColor = "var(--component-text-color-secondary)";

  const data = new Array(airDates.length).fill(undefined).map((_, index) => {
    if (index > currentWeek) {
      return {
        name: airDates[index],
        value: null,
      };
    }

    const thisWeekScore = teamRankings[index].find(
      (ts) => ts.team.name === team.name
    )!;
    const lastWeekScore = teamRankings[index - 1]?.find(
      (ts) => ts.team.name === team.name
    );

    if (thisWeekScore && lastWeekScore) {
      const diffDirection = Math.max(
        Math.min(1, thisWeekScore[ruleSet].rank - lastWeekScore[ruleSet].rank),
        -1
      );

      if (diffDirection !== directionOfChange || index === currentWeek) {
        // We are at an inflection point, or at the end of the line. Update color of the graph
        const percentage = ((index - 1) / currentWeek) * 100;

        // End the current color
        areaGradient.push(
          <stop
            key={areaGradient.length}
            offset={`${percentage}%`}
            stopColor={currentColor}
          />
        );
        lineGradient.push(
          <stop
            key={lineGradient.length}
            offset={`${percentage}%`}
            stopColor={currentColor}
          />
        );

        directionOfChange = diffDirection;
        if (directionOfChange > 0) {
          currentColor = "var(--red-indicator-color)";
        } else if (directionOfChange < 0) {
          currentColor = "var(--green-indicator-color)";
        } else {
          currentColor = "var(--component-text-color-secondary)";
        }

        // Begin the new color
        areaGradient.push(
          <stop
            key={areaGradient.length}
            offset={`${percentage}%`}
            stopColor={currentColor}
          />
        );
        lineGradient.push(
          <stop
            key={lineGradient.length}
            offset={`${percentage}%`}
            stopColor={currentColor}
          />
        );
      }
    }

    return {
      name: airDates[index],
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
          stroke={`url(#simple-line-${dataId})`}
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
