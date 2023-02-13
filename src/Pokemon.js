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
      <div className='image'>
        {pokemon &&
          <img height="200px" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="pokemon" />}
      </div>
      {pokemon && <div className='d-flex flex-column'>
        <span>Name: {pokemon?.name}</span>
        <span>Altura: {pokemon?.height / 10} m</span>
        <span>Peso: {pokemon?.weight / 10} kg</span>
        <span>Abilities:
          <ul>
            {pokemon?.abilities.map(ability => <li>{ability.ability.name}</li>)}
          </ul>
        </span>
      </div>}
    </div>
  )
}

export default Pokemon;
