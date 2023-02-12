import { useState } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container>
        <div className="pokedex">
            <Row className="overflow-hidden w-100">
              <Col xs={12} md={5} >
                  <div className="search-bar">
                    <input id="myInput" type="text" value={search} onChange={handleChange} onKeyPress={handleKeyPress} />
                    <button id="myBtn" onClick={handleClick}>Search</button>
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
