import { Inter, Metal_Mania } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const metalMania = Metal_Mania({ weight: "400", subsets: ["latin"] });

export const standardFontClass = inter.className;
export const upsideDownFontClass = metalMania.className;
