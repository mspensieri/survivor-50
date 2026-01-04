import { createContext } from "react";
import { PlayerRankings } from "../providers/types";

const PlayerContext = createContext<Array<PlayerRankings>>([]);

export default PlayerContext;
