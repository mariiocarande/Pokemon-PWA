import { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pokemonLogo from './images/pokemon_logo.png';
import API from './api';

function App() {
  const [search, setSearch] = useState('');
  const [name, setName] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setName(search);
    }
  }

  const handleClick = (event) => {
    setName(search);
  };

  useEffect(() => {
    if (name) {
      API.get(`/pokemon/${name}`)
        .then((res) => setPokemon(res.data))
        .catch((err) => console.log(err))
    }
  }, [name]);

  return (
    <div className="App">
      <div>
        <img height={'100px'} src={pokemonLogo} alt="pokemon-logo" />
      </div>
      <Container>
        <div className="pokedex">
          <Row className="rowstyle">
              <Col xs={12} md={5}>
                <Row>
                  <div className="search-bar">
                  <input
                    id="myInput"
                    className='form-control'
                    placeholder="Name"
                    type="text"
                    value={search}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                  />
                  <div>
                    <div id="myBtn" className="ball-container pokeball-spin" onClick={handleClick} />
                  </div>
                </div>
              </Row>
              <Row>
                <Pokemon name={name} />
              </Row>
              </Col>
              <Col xs={12} md={2}>
                <div className="divisor-container">
                  <div className="divisor-line" />
                </div>
              </Col>
              <Col xs={12} md={5}>
              <div className='container-information'>
                {pokemon &&
                  <>
                  <div className="information">
                    <label>Altura: </label><span>{pokemon?.height / 10} m</span>
                  </div>

                  <div className="information">
                    <label>
                      Peso: 
                    </label>
                    <span>{pokemon?.weight / 10} kg</span>
                  </div>

                  <div className="information">
                    <label>
                      Abilities: 
                    </label>
                      <ul>
                        {pokemon?.abilities.map(ability => <li>{ability.ability.name}</li>)}
                      </ul>
                  </div>
                </>}
                </div>
              </Col>
          </Row>
          <div className="lines">
            <div className="line-one" />
            <div className="line-two" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
