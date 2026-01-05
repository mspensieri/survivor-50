"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/esm/Navbar";

import { players } from "../data/players";
import { airDates, weeks } from "../data/weeks";
import {
  getTeamRankings,
  getPlayerRankings,
} from "../providers/rankingsProvider";
import { teams, fakeTeams } from "../data/teams";
import Leaderboard from "../components/leaderboard";
import Scores from "../components/scores";
import Rules from "../components/rules";
import WeekSelectorAccordion from "../components/weekSelectorAccordion";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import TeamContext from "../context/teamContext";
import PlayerContext from "../context/playerContext";

const currentWeek = weeks.length;

const styles: Record<string, React.CSSProperties> = {
  spoilersButton: {
    color: "var(--text-color-primary)",
    backgroundColor: "var(--background-color-primary)",
    border: "1px solid var(--text-color-primary)",
    width: "200px",
    height: "50px",
    borderRadius: "25px",
    left: "50%",
    marginTop: "200px",
    transform: "translateX(-50%)",
    display: "block",
    position: "absolute",
    zIndex: 1,
  },
  spoilersButtonHidden: {
    zIndex: -1,
  },
  logo: {
    position: "absolute",
    width: "180px",
    margin: "auto",
    left: 320,
    top: 10,
    filter: "var(--upside-down-image-filter)",
    transform: "var(--upside-down-image-transform)",
  },
  logoSmall: {
    display: "none",
  },
  poolTitle: {
    transform: "var(--pool-title-transform)",
  },
};

export default function MainView(props: {
  reveal: boolean;
  onRevealChange: (reveal: boolean) => void;
  isSmallScreen: boolean;
  screenWidth: number;
  selectedWeek: number;
  onWeekSelected: (week: number) => void;
  active: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const {
    reveal,
    isSmallScreen,
    screenWidth,
    onRevealChange,
    selectedWeek,
    onWeekSelected,
    active,
    activeTab,
    setActiveTab,
  } = props;

  const teamRankings = useContext(TeamContext);
  const playerRankings = useContext(PlayerContext);

  function SpoilersButton() {
    return (
      <button
        style={{
          ...styles.spoilersButton,
          ...(!active && styles.spoilersButtonHidden),
        }}
        onClick={() => onRevealChange(true)}
      >
        Reveal Spoilers
      </button>
    );
  }

  function SpoilerMask({ children }: { children: React.ReactNode }) {
    return (
      <div className="blur-container">
        <SpoilersButton></SpoilersButton>
        <div className="blur">{children}</div>
      </div>
    );
  }

  function generateLeaderboardForWeek(weekNumber: number) {
    if (!reveal && weekNumber === currentWeek - 1) {
      return (
        <SpoilerMask>
          <Leaderboard
            thisWeekRankings={getTeamRankings(fakeTeams).standard[0]}
            lastWeekRankings={getTeamRankings(fakeTeams).standard[0]}
            currentWeek={weekNumber}
          ></Leaderboard>
        </SpoilerMask>
      );
    } else {
      return (
        <Leaderboard
          thisWeekRankings={teamRankings[weekNumber]}
          lastWeekRankings={teamRankings[weekNumber - 1]}
          currentWeek={weekNumber}
        ></Leaderboard>
      );
    }
  }

  function generatePlayerScoresForWeek(weekNumber: number) {
    if (!reveal && weekNumber === currentWeek - 1) {
      return (
        <SpoilerMask>
          <Scores
            thisWeekRankings={getPlayerRankings(players).standard[0]}
            teams={teams}
            isSmallScreen={isSmallScreen}
            screenWidth={screenWidth}
          ></Scores>
        </SpoilerMask>
      );
    } else {
      return (
        <Scores
          thisWeekRankings={playerRankings?.[weekNumber]}
          lastWeekRankings={playerRankings?.[weekNumber - 1]}
          teams={teams}
          isSmallScreen={isSmallScreen}
          screenWidth={screenWidth}
        ></Scores>
      );
    }
  }

  if (screenWidth < 0) {
    return <div></div>;
  }

  return (
    <Container fluid>
      <Row>
        <img
          src="logo.webp"
          alt="survivor logo"
          className="logo"
          style={{
            ...styles.logo,
            ...(screenWidth < 510 ? styles.logoSmall : {}),
          }}
        ></img>
        <Navbar className="bg-body-tertiary">
          <Navbar.Brand style={styles.poolTitle}>
            Survivor Pool Season 50
          </Navbar.Brand>
        </Navbar>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k || "leaderboard")}
          id="tabs-bar"
          variant="underline"
          className="mb-3"
          style={{ paddingLeft: "15px" }}
        >
          <Tab eventKey="leaderboard" title="Leaderboard">
            {isSmallScreen ? (
              <div>
                <WeekSelectorAccordion
                  selectedWeek={selectedWeek}
                  setSelectedWeek={onWeekSelected}
                  currentWeek={currentWeek}
                ></WeekSelectorAccordion>
                {generateLeaderboardForWeek(selectedWeek)}
              </div>
            ) : (
              <Tabs
                activeKey={`${selectedWeek + 1}`}
                onSelect={(k) => onWeekSelected(Number(k) - 1)}
                id="week-selector-leaderboard"
                className="mb-3"
              >
                {[...Array(airDates.length)].map((_, index) => {
                  const weekNumber = index;
                  const disabled = currentWeek < weekNumber + 1;
                  return (
                    <Tab
                      key={weekNumber}
                      eventKey={weekNumber + 1}
                      title={airDates[weekNumber]}
                      disabled={disabled}
                    >
                      {generateLeaderboardForWeek(weekNumber)}
                    </Tab>
                  );
                })}
              </Tabs>
            )}
          </Tab>
          <Tab eventKey="players" title="Players">
            {isSmallScreen ? (
              <div>
                <WeekSelectorAccordion
                  selectedWeek={selectedWeek}
                  setSelectedWeek={onWeekSelected}
                  currentWeek={currentWeek}
                ></WeekSelectorAccordion>
                {generatePlayerScoresForWeek(selectedWeek)}
              </div>
            ) : (
              <Tabs
                activeKey={`${selectedWeek + 1}`}
                onSelect={(k) => onWeekSelected(Number(k) - 1)}
                id="week-selector-players"
                className="mb-3"
              >
                {[...Array(airDates.length)].map((_, index) => {
                  const weekNumber = index;
                  const disabled = currentWeek < weekNumber + 1;
                  return (
                    <Tab
                      key={weekNumber}
                      eventKey={weekNumber + 1}
                      title={airDates[weekNumber]}
                      disabled={disabled}
                    >
                      {generatePlayerScoresForWeek(weekNumber)}
                    </Tab>
                  );
                })}
              </Tabs>
            )}
          </Tab>
          <Tab eventKey="rules" title="Rules" className="rules">
            <Rules></Rules>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}
