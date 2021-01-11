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
      comments: []
    };
  }

  // fetch req for all users saved locations
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

    // fetch req for all users comments by location id
    URL = `${config.API_ENDPOINT}/comments`;

    fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          comments: data,
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


          <div className='saved-locations'>
            {this.state.locationsByUserId.map((locByUser, key) => {
              let Comments = this.state.comments.filter(comment => {
                return comment.user_location_id === locByUser.id;
              });

              return (
                <div className='saved-locations-box' key={key}>
                  <div className='div-for-comments'>
                  <p>{locByUser.title}</p>
                  <p>{locByUser.content}</p>
                  <img src={locByUser.image} alt='location' />
                  <p>{locByUser.keyword}</p>
                  <p>{locByUser.location}</p>
                  </div>
                  
                  <div className='comments-box'>
                    {Comments.map((comment, key) => {
                      return (
                        <div className='comments-inside' key={key}>
                          <h3>{comment.title}</h3>
                          <p>{comment.content}</p>
                        </div>
                      );
                    })}
                  </div>
                  <NoteForm locId={locByUser.id}/>
                </div>
              );
            })}

          </div>
        </div>
      </main>

    );
  }
}
export default Account;