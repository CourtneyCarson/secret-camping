import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './01.Landing/Landing';
import Home from './Home/Home';
import './App.css';
import SiteList from './04.SiteList/SiteList';
import Site from './05.Site/Site';
import LogIn from './02.LogIn/LogIn';
import SignUp from './03.SignUp/SignUp';
import NavBar from './09.NavBar/NavBar';
import Account from './06.Account/Account';

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <NavBar />
          <Switch>

            <Route exact path='/' component={Landing} />
            <Route path='/home' component={Home} />
            <Route path='/list' component={SiteList} />
            <Route path='/site' component={Site} />
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
