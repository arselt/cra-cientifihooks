import React, { useState } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="Header">
            <h1>100tifiHOOKS 🛸🪝</h1>
            <button
                type="button"
                onClick={handleClick}
            >
                {darkMode ? "☀️ Set Light Mode" : "🌑 Set Dark Mode"}
            </button>
        </div>
    );
};

export default Header;