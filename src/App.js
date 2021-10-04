import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import Portfolio from './components/Portfolio';
// import ContactForm from './components/Contact';
// import Resume from './components/Resume';


function App() {
  
  
    return (
      <div>
          <Nav/>
        <main>
          <About />
        </main>
      </div>
    );
  }
  
  // return (
  //   <div className="App">
  //     <Nav></Nav>
  //     <main>
  //       <About></About>
  //       <Portfolio></Portfolio>
  //       <ContactForm></ContactForm>
  //       <Resume></Resume>
  //     </main>
  //   </div>
  // );
  //}

export default App;
