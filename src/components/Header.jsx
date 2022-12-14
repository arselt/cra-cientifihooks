import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "./Header.css";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { theme, updateTheme } = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
        theme === "theme-light" ? updateTheme("theme-dark") : updateTheme("theme-light");
    }

    return (
        <div className="Header">
            <div className="Header-container">
                <h1>ScientificHooks πΈπͺ</h1>
                <button
                    type="button"
                    onClick={handleClick}
                >
                    {darkMode ? "βοΈ Set Light Mode" : "π Set Dark Mode"}
                </button>
            </div>
        </div>
    );
};

export default Header;