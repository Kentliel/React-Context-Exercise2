import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import { fetchPokemons } from "./api";

const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons()
      .then((data) => setPokemons(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="poke-list">
    
      {pokemons.map((pokemon,i) => (
        <PokeCard key={pokemon.name} name={pokemon.name} number={i}/>
      ))}
    </div>
  );
};

export default PokeList;