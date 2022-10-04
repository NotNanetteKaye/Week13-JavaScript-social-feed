import React, { useState } from 'react';


function App() {

  const [entries, setEntries] = useState([{Name: "David Lagrange", Post: "I love playing guitar. Does anyone want to play with me?"}])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
          <tr>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>hola</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
