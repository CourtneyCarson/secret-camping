import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NoteForm from '../08.NoteForm/NoteForm';

it('renders App component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          <NoteForm />
    </BrowserRouter>
    ,div );
    ReactDOM.unmountComponentAtNode(div);
});
