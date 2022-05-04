import React from 'react';
// import './App.css';


const Tasklist = (value) => {
  return (
    <li key={value}>{value}</li>
    );
  }
  
  const tasks = ['Leitura', 'Estudar Inglês', 'Estudar Conteúdo Trybe'];

  class App extends React.Component {
    render() {
      return (
        <>
          <h1>Minhas Tarefas São:</h1>
          <ul>{ tasks.map(task => Tasklist(task)) }</ul>
        </>
      );
    } 
  }

export default App;