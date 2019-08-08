import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() { 
        return (
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <span className="navbar-brand h1">Shopping Cart</span>
            <div>
              <ul className='navbar-nav ml-auto'>
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Store<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/basket">Basket</Link>
                </li>
              </ul>
            </div>
          </nav> 
        );
    }
}
 
export default NavBar;