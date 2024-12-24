import {useContext, useState} from "react";
import PropTypes from "prop-types";
import {RadioGroupContext, RadioOptionContext} from "./contexts.js";

export const RadioGroup = ({name, onChange, children}) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (value) => {
        setSelectedValue(value);

        if (onChange) {
            onChange(value);
        }
    };

    const contextValue = {
        name,
        selectedValue,
        onChange: handleChange
    };

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
        }}>
            <RadioGroupContext.Provider value={contextValue}>
                {children}
            </RadioGroupContext.Provider>
        </div>
    )
}

RadioGroup.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

const Option = ({value, icon, isPopular, children}) => {
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

const Details = ({children}) => {
    const isSelected = useContext(RadioOptionContext);

    return isSelected ? children : null;
}

Details.propTypes = {
    children: PropTypes.node.isRequired
};

RadioGroup.Option = Option;
RadioGroup.Details = Details;