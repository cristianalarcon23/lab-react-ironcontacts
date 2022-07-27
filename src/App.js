import React, {useState} from 'react';
import './App.css';
import ContactData from './contacts.json';

function App() {
  const arrContact = [...ContactData].slice(0,5);
  
  const [contacts, setContacts] = useState(arrContact);

  const addContact = () => {
    const newContactArr = [...contacts];
    const randomContact = ContactData[Math.floor(Math.random() * (ContactData.length - contacts.length) + contacts.length)];
    newContactArr.push(randomContact);
    setContacts(newContactArr);
  }; 

  const sortPopu = () => {
    const sortedPopu = [...contacts].sort((a,b) => b.popularity - a.popularity);
    setContacts(sortedPopu);
  }

  const sortName = () => {
    const sortedName = [...contacts].sort((a,b) => a.name.localeCompare(b.name));
    setContacts(sortedName);
  }


  const deleteContact = (index) => () =>
  setContacts((contacts) => contacts.filter((_, i) => i !== index));


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
            <tl>{elem.popularity}</tl>
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
