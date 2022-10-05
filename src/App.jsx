import React, { useState } from 'react';
import DisplayEntries from './components/AddEntry/DisplayEntries/DisplayEntries';
import AddEntryForm from './components/AddEntry/AddEntryForm';



function App() {

  const [entries, setEntries] = useState([{Name: "David Lagrange", Post: "I love playing guitar. Does anyone want to play with me?"}])

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
      <AddEntryForm/>
    </div>
  );
}

export default App;
