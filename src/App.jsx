import React, { useState } from "react";
import DisplayEntries from "./components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./components/AddEntry/AddEntryForm";

function App() {
  const [entries, setEntries] = useState([
    {
      Name: "David Lagrange",
      Post: "I love playing guitar. Does anyone want to play with me?",
    },
    {
      Name: "Nanette",
      Post: "I love playing guitar. Does anyone want to play with me?",
    },
    {
      Name: "Lnagrange",
      Post: "I love playing guitar. Does anyone want to play with me?",
    },
  ]);

  function addNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <AddEntryForm addNewEntryProperty={addNewEntry} />
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
