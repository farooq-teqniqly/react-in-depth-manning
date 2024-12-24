import {useContext} from "react";
import DarkModeContext from "./DarkModeProvider.jsx";

export const useDarkMode = () => {
    return useContext(DarkModeContext);
}