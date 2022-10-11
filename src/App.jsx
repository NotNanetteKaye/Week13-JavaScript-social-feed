import React, { useState } from "react";
import DisplayEntries from "./components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./components/AddEntry/AddEntryForm";

function App() {
  const [entries, setEntries] = useState([
    {
      name: "David Lagrange",
      post: "I love playing guitar. Does anyone want to play with me?",
    },
    {
      name: "Nanette",
      post: "I love playing guitar. Does anyone want to play with me?",
    },
    {
      name: "Lnagrange",
      post: "I love playing guitar. Does anyone want to play with me?",
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
