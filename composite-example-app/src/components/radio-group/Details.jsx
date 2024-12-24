import {useContext} from "react";
import {RadioOptionContext} from "./contexts.js";
import PropTypes from "prop-types";;

export const Details = ({children}) => {
    const isSelected = useContext(RadioOptionContext);

    return isSelected ? children : null;
}

Details.propTypes = {
    children: PropTypes.node.isRequired
};
