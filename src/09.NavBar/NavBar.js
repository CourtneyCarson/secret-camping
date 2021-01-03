import React from 'react';
import { Route, Link } from 'react-router-dom';
import './NavBar.css';


export default class NavBar extends React.Component {
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