import React, { Component } from 'react';
import config from '../config';
import TokenService from '../services/token-service';
import './NoteForm.css'


class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }


  handleSubmit = (event) => {
    event.preventDefault();
    //better to call payload instead of comment
    const comment = {
      title: this.state.title,
      content: this.state.content,
      location_id: this.props.locId,
    };

   
    
    let URL = `${config.API_ENDPOINT}/comments/${comment.location_id}`;
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((results) => {
        console.log(results);
        window.location = '/account';
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  render() {
    return (
      <section className='add-notes'>
        <form className='add-notes-form' onSubmit={this.handleSubmit}>

          <label> Title
        <input
              type='text'
              className='input-title'
              placeholder='write title'
              value={this.state.title}
              name='title'
              id='title'
              onChange={(event) => this.setState({ title: event.target.value })}
              required
            /></label>

          <label> Note
          <input
              type="text"
              className='input-note'
              placeholder='write notes here'
              value={this.state.content}
              name='note'
              id='note'
              onChange={(event) => this.setState({ content: event.target.value })}
              required
            />
          </label>
          <button className='note-button' type='submit'>Add Note</button>

        </form>
      </section>
    );
  }
}
export default NoteForm;