import {useState} from "react";
import PropTypes from "prop-types";
import {RadioGroupContext} from "./contexts.js";
import {Option} from "./Option.jsx";
import {Details} from "./Details.jsx";

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

RadioGroup.Option = Option;
RadioGroup.Details = Details;