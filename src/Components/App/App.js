import './App.css';
import React from 'react';
import {Header} from '../Header/Header.js'
import {Main} from '../Main/Main.js'
import {About} from '../About/About.js'
import { ImageSection } from '../ImageSection/ImageSection.js';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <About />
        <ImageSection />
      </div>
      
      
    )
  }
}

export default App;
