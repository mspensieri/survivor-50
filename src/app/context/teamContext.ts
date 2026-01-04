import { createContext } from "react";
import { TeamRankings } from "../providers/types";

const TeamContext = createContext<Array<TeamRankings>>([]);

export default TeamContext;
