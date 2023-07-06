import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


const PokeCard = ({ name, number }) => {
    let i = number + 1;
  const theme = useContext(ThemeContext);
  return (
    <div className={`poke-card ${theme.name}`}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default PokeCard;