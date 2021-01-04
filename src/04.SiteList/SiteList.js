import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddNewSite from '../07.AddSiteForm/AddSiteForm';
import TokenService from '../services/token-service';
import config from '../config';
import './SiteList.css';

export default class SiteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      location: [],
    };
  }

  // fetch req 
  componentDidMount() {
    let URL = `${config.API_ENDPOINT}/location`;

    fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          location: data,
        });
      })
      .catch((error) => console.log(error));
  }




  render() {
    console.log(this.state.location);
    return (

      <main>
        <div className="list-page">
          <h1 className='list-h1'>List</h1>
          <h4>{this.state.location.map((item, key) => {
            return (
              <div key={key}>
                <p>{item.title}</p>
                <p>{item.content}</p>
                <p>{item.image}</p>
                <p>{item.keyword}</p>
                <p>{item.location}</p>
              </div>
            );
          })}</h4>
          {/* potentially adding a map onto this page */}
          {/* <div>
            <iframe className='map'
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3235578.585437468!2d-118.98925682715422!3d37.63169239234933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalifornia%20Ghost%20Towns!5e0!3m2!1sen!2sus!4v1609190060554!5m2!1sen!2sus"
              width="400"
              height="300"
              frameborder="0"
              // style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              title='map'>
            </iframe>
          </div> */}

          <section>
            <img src="example.jpg" alt="secluded-site-town" />
            <p> Stuff about this secluded camping spot.
        <Link to="/Site/1"> alt="Oregon"</Link> </p>
          </section>

          <section>
            <img src="example.jpg" alt="secluded-site-town" />
            <p> Stuff about this secluded camping spot.
        <Link to="/Site/2"> alt="Oregon"</Link> </p>
          </section>

          <section>
            <img src="example.jpg" alt="secluded-site-town" />
            <p> Stuff about this secluded camping spot.
        <Link to="/Site/3"> alt="Oregon"</Link> </p>
          </section>
          <div> <AddNewSite /></div>

        </div>
      </main>
    );
  }
}