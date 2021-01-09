import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../03.SignUp/SignUp';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});