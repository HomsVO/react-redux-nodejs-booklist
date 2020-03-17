import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.scss';


class Header extends React.Component {
  render(){
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark  bg-dark ">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link--active" exact to="/">Main</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link--active" exact to="/profile">Profile</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link--active" exact to="/news">News</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
  
}

export default Header;
