import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './01.Landing/Landing';
import Home from './02.Home/Home';
import './App.css';
import SiteList from './03.SiteList/SiteList';
import Site from './04.Site/Site';
import LogIn from './05.LogIn/LogIn';
import SignUp from './06.SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Switch>

            <Route exact path='/' component={Landing} />
            <Route path='/home' component={Home} />
            <Route path='/list' component={SiteList} />
            <Route path='/site' component={Site} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />



          </Switch>
        </BrowserRouter>


      </div>
    );
  }
}
export default App;
