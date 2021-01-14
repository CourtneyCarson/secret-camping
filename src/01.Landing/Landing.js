import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends Component {

  render() {

    return (

      <main>
        {/* <div className='landing-page'> */}
          
          <section className='landing-overlay'>
          <div className='landing-page-header'>
            <h1 className='landing-h1'> Secret Camping Spots </h1>
          </div>

          <div className='landing-page-content'>
            <p> A members only site to share the best secret camping spots. No campsites. No other people. Just you and nature.</p>
              <Link to='/login'><button className='landing-btn'>Log In</button> </Link>
              <Link to='/signup'><button className='landing-btn'>Register</button> </Link>

          </div>
          </section>
        {/* </div> */}
      </main>
    );
  }
}

