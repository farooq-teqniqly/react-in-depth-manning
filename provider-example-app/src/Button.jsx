import {useContext} from "react";
import PropTypes from "prop-types";
import {useDarkMode} from "./UseDarkMode.jsx";

export const Button = ({children, ...rest}) => {
    const {isDarkMode} = useDarkMode();

    const style = {
        backgroundColor: isDarkMode ? "#333" : "#CCC",
        border: "1px solid",
        color: "inherit",
    };

    return (
        <button style={style} {...rest}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};