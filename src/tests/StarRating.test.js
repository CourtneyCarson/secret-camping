import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <StarRating />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});