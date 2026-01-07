import { useContext } from "react";
import { Offcanvas, Table } from "react-bootstrap";

import { RuleSet, TeamScore } from "../data/types";
import RuleSetContext from "../context/ruleSetContext";
import PlayerList from "./playerList";
import { airDates } from "../data/weeks";
import { SWAP_DEADLINE } from "../data/teams";
import PlacementChart from "./placementChart";
import TeamContext from "../context/teamContext";
import { standardFontClass, upsideDownFontClass } from "../utils/fonts";

const styles: Record<string, React.CSSProperties> = {
  captain: {
    fontSize: "16pt",
    color: "var(--component-text-color-secondary)",
    marginBottom: "10px",
  },
  teamName: {
    fontSize: "24pt",
    fontWeight: "bold",
  },
  emphasis: {
    color: "var(--score-label-color-override)",
    fontWeight: "var(--score-label-font-weight-override)",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    marginBottom: "5px",
  },
  gridRight: {
    justifySelf: "end",
  },
  ratingDescription: {
    fontSize: "10pt",
    color: "var(--component-text-color-secondary)",
    marginBottom: "10px",
  },
};

export default function Sidebar(props: {
  shown: boolean;
  onHide: () => void;
  teamScore: TeamScore;
  currentWeek: number;
}) {
  const { shown, onHide, teamScore, currentWeek } = props;
  const ruleSet = useContext(RuleSetContext);
  const teamRankings = useContext(TeamContext);
  let bestRank = teamScore[ruleSet].rank;

  for (let week = 0; week <= currentWeek; week++) {
    const weekRank = teamRankings[week].find(
      (ts) => ts.team === teamScore.team
    )?.[ruleSet].rank;

    if (weekRank && weekRank < bestRank) {
      bestRank = weekRank;
    }
  }

  return (
    <Offcanvas
      show={shown}
      onHide={onHide}
      placement="end"
      className={
        ruleSet === RuleSet.UPSIDE_DOWN
          ? `offcanvas-back ${upsideDownFontClass}`
          : `offcanvas-front ${standardFontClass}`
      }
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Team stats</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div style={styles.teamName}>{teamScore.team.name}</div>
        <div style={styles.captain}>{teamScore.team.captain}</div>
        <h2>Season performance</h2>
        <div style={styles.gridContainer}>
          <div>
            <span style={styles.emphasis}>Current Rank: </span>#
            {teamScore[ruleSet].rank}
          </div>
          <div style={styles.gridRight}>
            <span style={styles.emphasis}>Best Rank: </span>#{bestRank}
          </div>
        </div>
        <PlacementChart
          team={teamScore.team}
          currentWeek={currentWeek}
        ></PlacementChart>
        <h2>Roster</h2>
        <PlayerList
          currentWeek={currentWeek}
          teamScore={teamScore}
        ></PlayerList>
        <hr />
        <div style={styles.swap}>
          {teamScore.team.swap && teamScore.team.swap.week <= currentWeek ? (
            <>
              {teamScore.team.swap.playerOut.name} ➔{" "}
              {teamScore.team.swap.playerIn.name} (
              {airDates[teamScore.team.swap.week]})
            </>
          ) : currentWeek > SWAP_DEADLINE ? (
            "Swap expired"
          ) : (
            "Swap available"
          )}
        </div>
        <h2>History</h2>
        <div>
          <span style={styles.emphasis}>Overall rating: </span>★★☆☆☆
          (Apprentice)
        </div>
        <div style={styles.ratingDescription}>
          Finished in the top 50% of teams in a past season
        </div>
        <Table striped bordered style={styles.table}>
          <tbody>
            <tr>
              <td>Season 49</td>
              <td>★☆☆☆☆ (Bottom 50%)</td>
            </tr>
            <tr>
              <td>Season 48</td>
              <td>★★☆☆☆ (Top 50%)</td>
            </tr>
            <tr>
              <td>Season 47</td>
              <td>★★★★☆ (Top 3)</td>
            </tr>
          </tbody>
        </Table>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
