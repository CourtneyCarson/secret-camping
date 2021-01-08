import React, { Component } from 'react';
import NoteForm from '../08.NoteForm/NoteForm';
import config from '../config';
import TokenService from '../services/token-service';
import './Account.css';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      locationsByUserId: [],
      // Notes: []
    };
  }

  // fetch req for all locations
  componentDidMount() {
    let URL = `${config.API_ENDPOINT}/userloc/user`;

    fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          locationsByUserId: data,
        });
      })
      .catch((error) => console.log(error));
  }


  render() {
    return (
      <main>
        <div className='accounts-page'>

          <header className='banner'>
            <h1 className='account-header'>Saved Secret Camping Spots</h1>
          </header>

          {/* <ul id="myUL">
            <li>secluded-site </li>
            <button> delete </button>

            <li>secluded-site </li>
            <button> delete </button>

            <li>secluded-site </li>
            <button> delete </button>
          </ul> */}
          <div className='saved-locations'>
            {this.state.locationsByUserId.map((locByUser, key) => {
              return (
                <div className='saved-locations-box' key={key}>
                  <p>{locByUser.title}</p>
                  <p>{locByUser.content}</p>
                  <img src={locByUser.image} alt='location' />
                  <p>{locByUser.keyword}</p>
                  <p>{locByUser.location}</p>
                </div>
              );
            })}

          </div>

          <div><NoteForm /></div>


        </div>
      </main>

    );
  }
}
export default Account;