import React, { useState, useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import { ThemeContext, themes } from "./ThemeContext";

const Apps = () => {
  const themeContextValue = useContext(ThemeContext);
  const [theme, setTheme] = useState(themeContextValue );

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`Apps ${theme.name}`}>
        <Header toggleTheme={toggleTheme} />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
};

export default Apps;