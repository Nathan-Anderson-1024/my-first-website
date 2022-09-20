import './App.css';
import React from 'react';
import {Header} from '../Header/Header.js'
import {Main} from '../Main/Main.js'
import {About} from '../About/About.js'
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <About />
      </div>
      
      
    )
  }
}

export default App;
