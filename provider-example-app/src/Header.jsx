import {Button} from "./Button.jsx";
import {ToggleButton} from "./ToggleButton.jsx";
import {memo} from "react";

export const Header = memo(function Header() {
    const style = {
        padding: "10px 5px",
        borderBottom: "1px solid",
        marginBottom: "10px",
        display: "flex",
        gap: "5px",
        justifyContent: "flex-end",
    };

    return (
        <header style={style}>
            <Button>Products</Button>
            <Button>Services</Button>
            <Button>Pricing</Button>
            <ToggleButton></ToggleButton>
        </header>
    );
});