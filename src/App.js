import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/fontawesome.css';


function App(){
  return(
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/contact" component={ContactForm}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

