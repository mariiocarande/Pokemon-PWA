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

  // if (!pokemon) return null;

  return (
    <div className="pokemon-information">
      <div className='image'>
        {pokemon ?
          <img style={{ height: '200px' }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="pokemon" /> :
          <img style={{ height: '200px' }} src={`https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png`} alt="pokebola" />}
      </div>
      <span>Name: {pokemon?.name}</span>
      <span>Altura: {pokemon?.height / 10} m</span>
      <span>Peso: {pokemon?.weight / 10} kg</span>
      <span>Abilities:
        <ul>
          {pokemon?.abilities.map(ability => <li>{ability.ability.name}</li>)}
      </ul>
      </span>

    </div>
  )
}

export default Pokemon;
