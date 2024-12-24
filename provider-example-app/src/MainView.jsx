import {Header} from "./Header.jsx";
import {useDarkMode} from "./UseDarkMode.jsx";

export const MainView = () => {
    const {isDarkMode} = useDarkMode();

    const style = {
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? "black" : "white",
        margin: "-8px",
        minHeight: "100vh",
        boxSizing: "border-box",
    };
    return (
        <main style={style}>
            <Header/>
            <h1>Welcome to our business site!</h1>
        </main>
    );
};
