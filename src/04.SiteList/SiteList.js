import React, { Component } from 'react';
import AddNewSite from '../07.AddSiteForm/AddSiteForm';
import TokenService from '../services/token-service';
import config from '../config';
import './SiteList.css';
// import FilterDropDown from '../FilterDropdown/FilterDropDown';

export default class SiteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      location: [],
    };
  }

  // fetch req for all locations
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

  // fetch for saving locations to user account 
  // will need a handle submit for the save button 

  // potentially add the star rating to the cards also 


  render() {
    console.log(this.state.location);
    return (

      <main>
        <div className="list-page">
          <h1 className='list-h1'>List</h1>
          {/* <div> <FilterDropDown/> </div> */}
          <h4>{this.state.location.map((item, key) => {
                let iFrameUrl = `https://maps.google.com/maps?q=${item.keyword}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

            return (
              <div className='site-list' key={key}>

                <iframe
                  className="item-image"
                  width="100%"
                  height="350"
                  id="google_map"
                  src={iFrameUrl}
                  frameBorder="0"
                  scrolling="no"
                  alt={item.keyword}
                  title='title'
                ></iframe>

                <p>{item.title}</p>
                <p>{item.content}</p>
                <img src={item.image} alt='location' />
                <p>{item.keyword}</p>
                <p>{item.location}</p>
                <button className='save-button' type='submit'> Save </button>
              </div>
            );
          })}</h4>
          {/* potentially adding a map onto this page */}



          <div> <AddNewSite /></div>

        </div>
      </main>
    );
  }
}