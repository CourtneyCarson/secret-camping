import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './01.Landing/Landing';
import './App.css';
import SiteList from './04.SiteList/SiteList';
import LogIn from './02.LogIn/LogIn';
import SignUp from './03.SignUp/SignUp';
import NavBar from './09.NavBar/NavBar';
import Account from './05.Account/Account';

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
