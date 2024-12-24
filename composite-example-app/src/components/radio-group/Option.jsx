import {useContext} from "react";
import PropTypes from "prop-types";
import {RadioGroupContext, RadioOptionContext} from "./contexts.js";

export const Option = ({value, icon, isPopular, children}) => {
    const {name, selectedValue, onChange} = useContext(RadioGroupContext);

    const isSelected = selectedValue === value;

    return (
        <label style={isPopular ? {border: "1px dashed red"} : null}>
            {icon}
            <input type="radio" value={value} name={name} checked={isSelected} onChange={() => onChange(value)}/>
            <RadioOptionContext.Provider value={isSelected}>
                {children}
            </RadioOptionContext.Provider>
        </label>
    )
}

Option.propTypes = {
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    isPopular: PropTypes.bool,
    children: PropTypes.node.isRequired,
};
