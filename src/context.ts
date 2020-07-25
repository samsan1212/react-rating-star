import { createContext } from "react";

import { ColourTheme } from "..";

interface ContextProps {
    id: string;
    colours: ColourTheme;
    offsets: number[];
    size: number;
    noBorder: boolean;
}

export default createContext<ContextProps>({
    id: "",
    colours: { mask: "", rear: "", stroke: "" },
    offsets: [],
    size: 24,
    noBorder: false
})