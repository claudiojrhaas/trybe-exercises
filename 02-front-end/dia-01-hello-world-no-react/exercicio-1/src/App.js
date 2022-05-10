import React from 'react';

const printTask = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasklist = ['Arrumar a cama', 'Escovar os dentes', 'Caminhada', 'Meditação']

class App extends React.Component {
  render() {
    return (
      <> 
        <h1>Tarefas Matinais:</h1>
        <ul>{tasklist.map((task => printTask(task)))}</ul>
      </>
    )
  }
}

export default App;