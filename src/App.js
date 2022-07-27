import React, {useState} from 'react';
import './App.css';
import ContactData from './contacts.json';

function App() {
  const arrContact = [...ContactData].slice(0,5);
  
  const [contacts, setContacts] = useState(arrContact);

  const addContact = () => {
    const newContactArr = [...contacts];
    newContactArr.push(ContactData[Math.floor(Math.random() * (ContactData.length - contacts.length) + contacts.length)]);
    setContacts(newContactArr);
  }; 

  const sortPopu = () => {
    setContacts(() => [...contacts].sort((a,b) => b.popularity - a.popularity));
  }

  const sortName = () => {
    setContacts(() => [...contacts].sort((a,b) => a.name.localeCompare(b.name)));
  }

  const deleteContact = (index) => () =>
  setContacts(() => contacts.filter((_, i) => i !== index));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add a contact!</button>
      <button onClick={sortPopu}>Sort by popularity!</button>
      <button onClick={sortName}>Sort by name!</button>
      <table>
        <tl>Picture</tl>
        <tl>Name</tl>
        <tl>Popularity</tl>
        <tl>Won Oscar</tl>
        <tl>Won Emmy</tl>
        <tl>Action</tl>
      </table>
      {contacts.map((elem,index) => {
        return (         
          <table key={elem.id}>
            <tl><img src={elem.pictureUrl} alt={elem.name} width="50 px"/></tl>
            <tl>{elem.name}</tl>
            <tl>{parseFloat(elem.popularity).toFixed(2)}</tl>
            {elem.wonOscar ? <tl>🏆</tl> : null}
            {elem.wonEmmy ? <tl>🏆</tl> : null}
            <tl><button onClick={deleteContact(index)}>Delete</button></tl>
          </table>
        )
      })}
    </div>
  );
}

export default App;
