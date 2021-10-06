import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

//import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/fontawesome.css';

function App(){
  return(
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
