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
import {
  captainNames,
  stars,
  ratingTitle,
  ratingDescription,
  ratingSummary,
} from "../utils/format";

const styles: Record<string, React.CSSProperties> = {
  captain: {
    fontSize: "14pt",
    color: "var(--component-text-color-secondary)",
  },
  firstHeader: {
    marginTop: "0px",
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
  const { team } = teamScore;
  const { history } = team;
  const ruleSet = useContext(RuleSetContext);
  const teamRankings = useContext(TeamContext);
  let bestRank = teamScore[ruleSet].rank;

  for (let week = 1; week <= currentWeek; week++) {
    const weekRank = teamRankings[week].find((ts) => ts.team === team)?.[
      ruleSet
    ].rank;

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
        <Offcanvas.Title>
          {team.name}
          <div style={styles.captain}>{captainNames(team)}</div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h2 style={styles.firstHeader}>Placement</h2>
        <div style={styles.gridContainer}>
          <div>
            <span style={styles.emphasis}>Current Rank: </span>#
            {teamScore[ruleSet].rank}
          </div>
          <div style={styles.gridRight}>
            <span style={styles.emphasis}>Best Rank: </span>#{bestRank}
          </div>
        </div>
        <PlacementChart team={team} currentWeek={currentWeek}></PlacementChart>
        <h2>Roster</h2>
        <PlayerList
          currentWeek={currentWeek}
          teamScore={teamScore}
        ></PlayerList>
        <hr />
        <div style={styles.swap}>
          {team.swap && team.swap.week <= currentWeek ? (
            <>
              {team.swap.playerOut.name} ➔ {team.swap.playerIn.name} (
              {airDates[team.swap.week]})
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
          {stars(history.overallRating)} ({ratingTitle(history.overallRating)})
        </div>
        <div style={styles.ratingDescription}>
          {ratingDescription(history.overallRating)}
        </div>
        {history.placements.length > 0 && (
          <Table striped bordered style={styles.table}>
            <tbody>
              {history.placements.map((placement) => (
                <tr key={placement.season}>
                  <td>Season {placement.season}</td>
                  <td>
                    {stars(placement.rating)} ({ratingSummary(placement.rating)}
                    )
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
