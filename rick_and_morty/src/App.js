import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => { 
         data.name ? setCharacters((oldChars) => [...oldChars, data] )
         :window.alert('¡No hay personajes con este ID!'); 
      });
   }
   const onclose = (id) => {
      const characterFilter = characters.filter(characters => 
         characters.id !== {id} )
         setCharacters(characterFilter)
   }
   return (
      <div className='App'>
          <Nav onSearch={onSearch}/>
          <Cards characters={characters} onClose={onclose} />
         
      </div>
   );
}

export default App;
