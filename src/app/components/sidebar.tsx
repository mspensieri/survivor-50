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

function stars(rating: number) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function ratingDescription(rating: number) {
  switch (rating) {
    case 1:
      return "No significant placements yet";
    case 2:
      return "Finished in the top 50% in a past season";
    case 3:
      return "Finished in the top 10 in a past season";
    case 4:
      return "Finished in the top 3 in a past season";
    case 5:
      return "Winner of a past season";
    default:
      return "";
  }
}

function ratingTitle(rating: number) {
  switch (rating) {
    case 1:
      return "Rookie";
    case 2:
      return "Apprentice";
    case 3:
      return "Contender";
    case 4:
      return "Expert";
    case 5:
      return "Champion";
    default:
      return "";
  }
}

function ratingSummary(rating: number) {
  switch (rating) {
    case 1:
      return "Bottom 50%";
    case 2:
      return "Top 50%";
    case 3:
      return "Top 10";
    case 4:
      return "Top 3";
    case 5:
      return "Winner";
    default:
      return "";
  }
}

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
          <span style={styles.emphasis}>Overall rating: </span>
          {stars(2)} ({ratingTitle(2)})
        </div>
        <div style={styles.ratingDescription}>{ratingDescription(2)}</div>
        <Table striped bordered style={styles.table}>
          <tbody>
            <tr>
              <td>Season 49</td>
              <td>
                {stars(1)} ({ratingSummary(1)})
              </td>
            </tr>
            <tr>
              <td>Season 48</td>
              <td>
                {stars(2)} ({ratingSummary(2)})
              </td>
            </tr>
            <tr>
              <td>Season 47</td>
              <td>
                {stars(4)} ({ratingSummary(4)})
              </td>
            </tr>
          </tbody>
        </Table>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
