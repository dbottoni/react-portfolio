import React from 'react';

//import { HashRouter as Router, Switch, Route } from 'react-router-dom';
//import './assets/css/bootstrap.min.css';
// import './assets/css/  ""
// import './assets/css/  ""
// import './assets/css/  ""

import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App(){
  return(
    <div>
      <Nav></Nav>
      <About></About>
      <Contact></Contact>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Footer/>
    </div>
  );
}


// const App = () => {
//   return(
//     <div>
//       <Nav></Nav>
//       <About></About>
//       <Contact></Contact>
//       <Portfolio></Portfolio>
//       <Resume></Resume>
//       <Footer/>
//     </div>
//   );
// }

export default App;
