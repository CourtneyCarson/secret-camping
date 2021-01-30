import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './01.Landing/Landing';
import LogIn from './02.LogIn/LogIn';
import SignUp from './03.SignUp/SignUp';
import SiteList from './04.SiteList/SiteList';
import Account from './05.Account/Account';
import NavBar from './09.NavBar/NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <NavBar />
          <Switch>

            <Route exact path='/' component={Landing} />
            <Route path='/list' component={SiteList} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/account' component={Account} />

          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}
export default App;
