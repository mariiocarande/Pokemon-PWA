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
  console.log(pokemon)
  return (
    <div className="pokemon-information">
      <span>Name: {pokemon ? pokemon.name : 'Loading'}</span>
      <div style={{ display: 'flex', backgroundColor: '#A29F9F', width: '200px', height: '200px', alignItems: 'center', justifyContent: 'center' }}>
        {pokemon ?
          <img style={{ height: '200px' }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="pokemon" /> :
          <img style={{ height: '200px' }} src={`https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png`} alt="pokebola" />}
      </div>
    </div>
  )
}

export default Pokemon;
