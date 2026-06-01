import { useDarkMode } from "../hooks/3_useDarkMode";

export function DarkModeComponent() {
    const { darkMode, toggleTheme } = useDarkMode();

    return (
        <div
            style={{
                border: "2px solid black",
                height: "500px",
                width: "500px",
                backgroundColor: darkMode ? "#222" : "#fff",
                color: darkMode ? "#fff" : "#000",
            }}
        >
            <button onClick={toggleTheme}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}
