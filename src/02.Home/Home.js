import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {



  render() {

    return (

      <main>
        <div className="home-page">
          <h1 className='home-h1'>Select State</h1>

          <section>

            <div className='state-links'>
              <Link to="/list">
                <img src="http://example.com/path/to/image.png"
                  alt="Oregon" />
              </Link>
              <Link to="/washington">
                <img src="http://example.com/path/to/image.png"
                  alt="Washington" />
              </Link>
              <Link to="/california">
                <img src="http://example.com/path/to/image.png"
                  alt="California" />
              </Link>


            </div>
          </section>
        </div>
      </main>
    );
  }
}