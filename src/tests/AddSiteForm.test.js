import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FormWizard from '../07.AddSiteForm/FormWizard';

it('renders App component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          <FormWizard />
    </BrowserRouter>
    ,div );
    ReactDOM.unmountComponentAtNode(div);
});
