import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Account from '../06.Account/Account';

it('renders App component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          <Account />
    </BrowserRouter>
    ,div );
    ReactDOM.unmountComponentAtNode(div);
});
