import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a data-testid="about" href="#about">
            Dana Bottoni
          </a>
        </div>
        <ul className="flex-row navbar-right">
          <li className="mx-2">
            <a data-testid="about" href="#about"> 
            About Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio">
            Portfolio
            </a>
          </li>
          <li className="mx-2">
          <a data-testid="contact" href="#contact">
            Contact
          </a>
          </li>
          <li className="mx-2">
          <a data-testid="Resume" href="#resume">
            Resume
          </a>
          </li>
        
        </ul>
      </div>
    </nav>
  );
}


export default Nav;