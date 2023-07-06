import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import { ThemeContext, themes } from "./ThemeContext";

const Apps = () => {
  const [theme, setTheme] = useState(themes.light);

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