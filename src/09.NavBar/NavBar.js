import React from 'react';
import { Route, Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import './NavBar.css';


export default class NavBar extends React.Component {

  logOutClick = () => {
    // console.log('Loggin Out');
    TokenService.clearAuthToken();
    TokenService.getUserId = (id) => {
      // console.log(id);
    };
    window.location = '/';
  };


  render() {
    return (
      <header className='nav-bar'>
        <nav className='nav-link'>
          <Route exact path={['/list', '/log-out', '/account']} render={() => {
            return (
              <>
                <Link to='/list' className='nav-links'>Sites</Link>
                <Link to='/account' className='nav-links'>Account</Link>
                <Link to="/" onClick={this.logOutClick} className='nav-links'>Log Out</Link>
              </>
            );
          }} />

        </nav>
      </header>
    );
  }
}