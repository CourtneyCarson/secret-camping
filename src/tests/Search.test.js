import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Search from '../Search/Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});