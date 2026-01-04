import { createContext } from "react";
import { RuleSet } from "../data/types";

const RuleSetContext = createContext<RuleSet>(RuleSet.STANDARD);

export default RuleSetContext;
