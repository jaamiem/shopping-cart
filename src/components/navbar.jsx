import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() { 
    return (
      <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
        <span className="navbar-brand h1" style={{ paddingTop: '.5em' }}>Shopping Cart</span>
        <div>
          <ul className='navbar-nav'>
            <li className="nav-item ml-4">
              <Link className="nav-link" to="/">Store</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/basket">Basket</Link>
            </li>
          </ul>
        </div>
      </nav> 
    );
  }
}
 
export default NavBar;