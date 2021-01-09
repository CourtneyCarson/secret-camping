import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../09.NavBar/NavBar';

it('renders App component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          < NavBar/>
    </BrowserRouter>
    ,div );
    ReactDOM.unmountComponentAtNode(div);
});
