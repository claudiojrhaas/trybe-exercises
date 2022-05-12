import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
