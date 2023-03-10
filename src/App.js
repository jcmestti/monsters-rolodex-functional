import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  }, [])

  const onSearchChange = event => {
    const searchTerm = event.target.value.toLocaleLowerCase();
    setSearchField(searchTerm);
  }

  const filteredMonsters = monsters.filter(monster => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title"> Monster Rolodex </h1>

      <input
        onChange={onSearchChange}
      />

      <div>
        {filteredMonsters.map(monster => {
          return <div key={monster.id}>
                  <h1> {monster.name} </h1>
                </div>
        })}
      </div>
    </div>
  )

}

export default App;