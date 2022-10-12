import React, { useState } from "react";
import EntriesMapper from "./components/EntriesMapper/EntriesMapper";
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
      <EntriesMapper userEntries={entries} />
    </div>
  );
}

export default App;
