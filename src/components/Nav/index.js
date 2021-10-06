import React from 'react';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function Nav() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <nav className="navbar">
            <ul className="navbar-nav">
              {/* <li class="nav-item">
                <Link to="/"></Link>
              </li>
              <li class="nav-item">
                <Link to="/portfolio"></Link>
              </li>
              <li class="nav-item">
                <Link to="/resume"></Link>
              </li>
              <li class="nav-item">
                <Link to="/contact"></Link>
              </li> */}
            </ul>
          </nav>

        </div>
      </header>
      
    </div>
  );
}


export default Nav;