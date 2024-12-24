import {createContext, useState} from "react";
import PropTypes from "prop-types";

const DarkModeContext = createContext({});

export const DarkModeProvider = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode((v => !v));

    const contextValue = {
        isDarkMode,
        toggleDarkMode
    };

    return (
        <DarkModeContext.Provider value={contextValue}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext;

DarkModeProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};