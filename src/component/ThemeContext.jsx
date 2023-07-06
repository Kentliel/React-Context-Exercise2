import React from "react";

export const themes = {
  light: {
    name: "light",
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },
  dark: {
    name: "dark",
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
  },
};

export const ThemeContext = React.createContext(themes.light);