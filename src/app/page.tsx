"use client";

import { useEffect, useState } from "react";

import { players } from "./data/players";
import { weeks } from "./data/weeks";
import {
  getTeamRankings,
  getPlayerRankings,
} from "./providers/rankingsProvider";
import { teams } from "./data/teams";
import MainView from "./components/mainView";
import * as storage from "./utils/storage";
import TeamContext from "./context/teamContext";
import PlayerContext from "./context/playerContext";
import RuleSetContext from "./context/ruleSetContext";
import { RuleSet } from "./data/types";
import { standardFontClass, upsideDownFontClass } from "./utils/fonts";

const initialSide = storage.getItem("lastSide") || "front";
const initialActiveTab = storage.getItem("lastActiveTab") || "leaderboard";
const initialShakeState = storage.getItem("shakeState") || "enabled";

const currentWeek = weeks.length;
const teamRankings = getTeamRankings(teams);
const playerRankings = getPlayerRankings(players);

const styles: Record<string, React.CSSProperties> = {
  torchContainer: {
    position: "absolute",
    right: 20,
    top: 20,
    zIndex: 20,
    cursor: "pointer",
  },
  torch: {
    transition: "transform 0.4s",
    cursor: "pointer",
  },
  torchFront: {
    transform: "rotate(0deg)",
  },
  torchBack: {
    transform: "rotate(180deg)",
    filter: "grayscale(1) saturate(200%)",
  },
};

function Page() {
  const [reveal, setReveal] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(-1);
  const [selectedWeek, setSelectedWeek] = useState(currentWeek - 1);
  const [side, setSide] = useState(initialSide);
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [shakeState, setShakeState] = useState(initialShakeState);

  useEffect(() => {
    if (initialShakeState === "enabled") {
      setShakeState("disabled");

      setTimeout(() => {
        setShakeState("enabled");
      }, 3000);
    }

    setIsSmallScreen(global.window.innerWidth < 768);
    setScreenWidth(global.window.innerWidth);

    const handleResize = () => {
      setIsSmallScreen(global.window.innerWidth < 768);
      setScreenWidth(global.window.innerWidth);
    };

    global.window.addEventListener("resize", handleResize);
  }, []);

  if (screenWidth < 0) {
    return <div></div>;
  }

  function updateTabAndStore(tab: string) {
    setActiveTab(tab);
    storage.setItem("lastActiveTab", tab);
  }

  return (
    <div className={side === "front" ? "flip-card" : "flip-card upside-down"}>
      <div
        className={shakeState === "enabled" ? "jump-shake" : ""}
        style={styles.torchContainer}
        onClick={() => {
          setShakeState("disabled");
          storage.setItem("shakeState", "disabled");

          const newSide = side === "front" ? "back" : "front";

          setSide(newSide);
          storage.setItem("lastSide", newSide);
        }}
      >
        <img
          src="torch.webp"
          alt="survivor logo"
          width={50}
          height={50}
          style={{
            ...styles.torch,
            ...(side === "front" ? styles.torchFront : styles.torchBack),
          }}
        ></img>
      </div>
      <div className="flip-card-inner">
        <div className={`flip-card-front ${standardFontClass}`}>
          <RuleSetContext.Provider value={RuleSet.STANDARD}>
            <TeamContext.Provider value={teamRankings.standard}>
              <PlayerContext.Provider value={playerRankings.standard}>
                <MainView
                  selectedWeek={selectedWeek}
                  onWeekSelected={setSelectedWeek}
                  reveal={reveal}
                  onRevealChange={setReveal}
                  isSmallScreen={isSmallScreen}
                  screenWidth={screenWidth}
                  active={side === "front"}
                  activeTab={activeTab}
                  setActiveTab={updateTabAndStore}
                ></MainView>
              </PlayerContext.Provider>
            </TeamContext.Provider>
          </RuleSetContext.Provider>
        </div>
        <div className={`flip-card-back ${upsideDownFontClass}`}>
          <RuleSetContext.Provider value={RuleSet.UPSIDE_DOWN}>
            <TeamContext.Provider value={teamRankings.upsideDown}>
              <PlayerContext.Provider value={playerRankings.upsideDown}>
                <MainView
                  selectedWeek={selectedWeek}
                  onWeekSelected={setSelectedWeek}
                  reveal={reveal}
                  onRevealChange={setReveal}
                  isSmallScreen={isSmallScreen}
                  screenWidth={screenWidth}
                  active={side === "back"}
                  activeTab={activeTab}
                  setActiveTab={updateTabAndStore}
                ></MainView>
              </PlayerContext.Provider>
            </TeamContext.Provider>
          </RuleSetContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Page;
