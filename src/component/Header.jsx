import React from "react";
import { useState } from "react";

const Header = ({ toggleTheme }) => {
  const [theme,setTheme] = useState('light')
  return (
    <header>
      <h1 className="ms-1">Pokémon App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;