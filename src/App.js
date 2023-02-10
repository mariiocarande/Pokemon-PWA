import { useState } from 'react';
import './App.css';
import Pokemon from './Pokemon';

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
      <div className="pokedex">
        <div className="search-bar">
          <input id="myInput" type="text" value={search} onChange={handleChange} onKeyPress={handleKeyPress} />
          <button id="myBtn" onClick={handleClick}>Search</button>
        </div>
        <span className='divisor-line'/>
        <Pokemon name={name} />
      </div>
    </div>
  );
}

export default App;
