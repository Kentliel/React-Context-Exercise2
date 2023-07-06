import React from "react";

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <h1>Pokémon App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;