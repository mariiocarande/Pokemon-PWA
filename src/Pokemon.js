import React, { useEffect, useState } from 'react';
import API from './api';

const Pokemon = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (name) {
      API.get(`/pokemon/${name}`)
        .then((res) => setPokemon(res.data))
        .catch((err) => console.log(err))
    }
  }, [name]);

  return (
    <div className="pokemon-information">
      <div className='pokemon-image'>
        <div className='image'>
          {pokemon &&
            <img height="200px" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="pokemon" />}
          </div>
      </div>
      <div className='pokemon-name'>
      {pokemon?.name.charAt(0).toUpperCase()}{pokemon?.name.slice(1)}
      </div>
    </div>
  )
}

export default Pokemon;
