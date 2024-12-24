import {Button} from "./Button.jsx";
import {useDarkMode} from "./UseDarkMode.jsx";

export const ToggleButton = () => {
    const {toggleDarkMode} = useDarkMode();

    return (
        <Button onClick={toggleDarkMode}>Toggle mode</Button>
    )
}