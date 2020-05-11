import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link active" exact to="/">News</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
