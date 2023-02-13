import { useState } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pokemonLogo from './images/pokemon_logo.png';

function App() {
  const [search, setSearch] = useState('');
  const [name, setName] = useState(null);
  
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

  return (
    <div className="App">
      <div>
        <img height={'100px'} src={pokemonLogo} alt="pokemon-logo" />
      </div>
      <Container>
        <div className="pokedex">
            <Row className="overflow-hidden w-100">
              <Col xs={12} md={5}>
                  <div className="search-bar">
                  <input className='form-control' placeholder="Name" id="myInput" type="text" value={search} onChange={handleChange} onKeyPress={handleKeyPress} />
                  <div>
                    <div id="myBtn" className="ball-container pokeball-spin" onClick={handleClick} />
                  </div>
                </div>
              </Col>
              <Col xs={12} md={2}>
                <div className="divisor-container">
                  <div className="divisor-line" />
                </div>
              </Col>
              <Col xs={12} md={5}>
                <Pokemon name={name} />
              </Col>
            </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
