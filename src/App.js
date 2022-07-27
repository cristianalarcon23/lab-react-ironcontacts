import React, {useState} from 'react';
import './App.css';
import ContactData from './contacts.json';

function App() {
  const arrContact = [...ContactData].slice(0,5);

const [contacts, useContacts] = useState(arrContact);


  return (
    <div className="App">
      {contacts.map(elem => {
        return (
          <table key={elem.name}>
            <img src={elem.pictureUrl} alt={elem.name} width="50 px"/>
            <li>{elem.name}</li>
            <li>{elem.popularity}</li>
          </table>
        )
      })}
    </div>
  );
}

export default App;
