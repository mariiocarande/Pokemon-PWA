import { useState } from 'react';
import './App.css';
import Pokemon from './Pokemon';

function App() {
  const [search, setSearch] = useState('');
  const [name, setName] = useState(null);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    setName(search);
  };

  return (
    <div className="App">
      <input type="text" value={search} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <Pokemon name={name} />
    </div>
  );
}

export default App;
