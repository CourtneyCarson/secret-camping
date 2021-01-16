import React, { Component } from 'react';
import NoteForm from '../10.NoteForm/NoteForm';
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


  //// DELTE FETCH ////////
  handleClickDelete = (commentId) => {
    // console.log(commentId);
    fetch(`${config.API_ENDPOINT}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));

        return res;
      })
      .then(() => {
        this.handleDeleteComment(commentId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  handleDeleteComment = (commentId) => {
    // console.log('delete button pressed');
    this.setState({
      comments: this.state.comments.filter((comment) => comment.id !== commentId),
    });
  };

  render() {

    return (
      <main>
        <div className='accounts-page'>

          <header className='banner'>
            <h1 className='account-header'>Your Bucket List</h1>
            <p className='account-p'>Seclusion Awaits.</p>
          </header>


          <div className='saved-locations'>
            {this.state.locationsByUserId.map((locByUser, key) => {
              let Comments = this.state.comments.filter(comment => {
                return comment.user_location_id === locByUser.id;
              });

              return (
                <div className='saved-locations-box' key={key}>
                  <div className='same'>
                    <h3>{locByUser.title}</h3>
                    <p className='acct-content'>{locByUser.content}</p>
                    <img src={locByUser.image} alt='location' className='acct-img' />
                    <p>{locByUser.keyword}</p>
                    <p>{locByUser.location}</p>
                  </div>

                  <div className='same'>
                    {Comments.map((comment, key) => {
                      return (
                        <div className='notes-inside' key={key}>
                          <h3>{comment.title}</h3>
                          <p>{comment.content}</p>

                          {/* bc in the map can access comment.id so create arrow func and pass in comment.id */}
                          <button onClick={() => this.handleClickDelete(comment.id)}>Delete</button>
                        </div>
                      );
                    })}
                    <NoteForm locId={locByUser.id} />
                  </div>

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