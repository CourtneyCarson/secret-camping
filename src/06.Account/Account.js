import React, { Component } from 'react';
import NoteForm from '../08.NoteForm/NoteForm';

class Account extends Component {
  render() {
    return (
      <main>
        <div className='accounts-page'>

          <header className='banner'>
            <h1 className='account-header'>Saved Secret Camping Spots</h1>
          </header>

          <ul id="myUL">
            <li>secluded-site </li>
            <button> delete </button>

            <li>secluded-site </li>
            <button> delete </button>

            <li>secluded-site </li>
            <button> delete </button>
          </ul>
          <div><NoteForm /></div>


        </div>
      </main>

    );
  }
}
export default Account;