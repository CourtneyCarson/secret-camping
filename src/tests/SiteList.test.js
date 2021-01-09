import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SiteList from '../04.SiteList/SiteList'


const match = { params: { id: 1 } }

it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SiteList match={match} />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});