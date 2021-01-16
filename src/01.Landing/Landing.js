import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends Component {

  render() {

    return (

      <main>
        <section className='landing-overlay'>

          <div className='landing-page-header'>
            <h1 className='landing-h1'> Secret Camping</h1>
          </div>


          <div className='landing-page-content'>
            <div className='landing-content-div'>
              <p> A members only site to share the best secluded camping spots.</p>
              <p>No campsites. <br></br> No other people. <br></br> Just you and nature.</p>
            </div>
            <Link to='/login'><button className='landing-btn'>Log In</button> </Link>
            <Link to='/signup'><button className='landing-btn'>Register</button> </Link>
          </div>

        </section>
      </main>
    );
  }
}

