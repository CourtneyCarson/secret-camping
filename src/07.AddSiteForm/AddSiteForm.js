import React, { Component } from 'react';

class AddNewSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

// what needed for database: 
  // title, location, keyword,
  // * image(image)
    // * title (note title)
    // * content (note text)
    // * keyword (keyword for maps)

  render() {
    return (
      <section className='add-new-site'>
        <form className='add-new-form' onSubmit={this.handleSubmit}>

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
export default AddNewSite;