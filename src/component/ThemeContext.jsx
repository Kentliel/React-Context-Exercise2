import React from "react";

export const themes = {
  light: {
    name: "light",
    // background: "#ffffff",
    // textColor: "#000000",
  },
  dark: {
    name: "dark",
    // background: "#1a1a1a",
    // textColor: "#ffffff",
  },
};

export const ThemeContext = React.createContext(themes.light);