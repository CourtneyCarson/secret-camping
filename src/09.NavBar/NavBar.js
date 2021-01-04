import React from 'react';
import { Route, Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import './NavBar.css';


export default class NavBar extends React.Component {

  logOutClick = () => {
    console.log('Loggin Out');
    TokenService.clearAuthToken();
    TokenService.getUserId = (id) => {
      console.log(id);
    };
    window.location = '/';
  };


  render() {
    return (
      <header className='nav-bar'>
        <nav className='nav-link'>
          {/* <div className='nav-words'> */}
          <Route exact path={['/list', '/log-out']} render={() => {
            return (
              <>
                <Link to='/account'>Account</Link>
                <Link to="/" onClick={this.logOutClick}>Log Out</Link>
              </>
            );
          }} />
        </nav>
      </header>
    );
  }
}