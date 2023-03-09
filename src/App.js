import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  return (
    <div className="App">
      <h1 className="app-title"> Monster Rolodex </h1>
    </div>
  )

}

export default App;