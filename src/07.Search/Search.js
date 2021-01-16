import React, { Component } from 'react';
import config from '../config';
import './Search.css';
import StarRating from '../08.StarRating/StarRating';
import TokenService from '../services/token-service';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      searchTerm: {
        value: '',
        touched: false,
      },
      error: null
    };
  }

  changeSearchTerm(searchTerm) {
    this.setState({
      searchTerm: { value: searchTerm },
    });
  }


  // handle submit for saving to users account button:
  handleSubmit = (event) => {
    event.preventDefault();
    const { locationId } = event.target;
    this.setState({ error: null });
    this.postLocation(locationId.value);
  };



  //  POST - SAVE LOCATION TO USER ACCOUNT 
  postLocation(location_id) {
    let URL = `${config.API_ENDPOINT}/userloc/${location_id}`;

    return fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        location_id,
      }),
    })
      .then(res => {
        if (!res.ok) {
          console.log(res);
          this.setState({ error: `Location already saved to account` });
        } else {
          res.json();
          window.location = '/account';
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }


  searchForm = (event) => {
    event.preventDefault();
    const { searchTerm } = event.target;
    // console.log('searchTerm:', searchTerm.value);

    let getLocationBySearchTerm = `${config.API_ENDPOINT}/location/keyword/${searchTerm.value}`;

    fetch(getLocationBySearchTerm)
      .then((loc) => loc.json())
      .then((locBySearch) => {
        // console.log(locBySearch);
        this.setState({
          locations: locBySearch,
        });
        // console.log(this.state);
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    const msg = this.state.error ? <p>{this.state.error.error}</p> : <div></div>;
    let showLocationsPage = '';

    showLocationsPage = this.state.locations.map((location, key) => {
      let iFrameUrl = `https://maps.google.com/maps?q=${location.keyword}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

      return (
        <section className='search-results-list' key={key}>
          <div className='search-list'>

            <StarRating id={location.id} />
            <h2 className='title'>{location.title}</h2>


            <form className='search-list-div' onSubmit={this.handleSubmit}>
              <div className='content-div'>

                <div className='left-side-image-content-search-page'>
                  <img src={location.image} alt='location' className='search-list-img' height='322.46' width='322.46' />
                  <p className='content-p'>{location.content}</p>
                </div>


                <div className='right-side-map-keyword'>
                  <iframe
                    className="map-image-search-page"
                    width="322.46"
                    height="322.46"
                    id="google_map"
                    src={iFrameUrl}
                    frameBorder="0"
                    scrolling="no"
                    alt={location.keyword}
                    title='title-map'
                  ></iframe>
                  <p className='keyword-p'>{location.keyword}</p>
                  <input type='hidden' name='locationId' value={location.id}></input>
                  <button className='save-button' type='submit'> Save </button>
                </div>

              </div>
            </form>
          </div>
        </section>
      );
    });



    return (
      <div className='location-search'>
        <section>

          <form onSubmit={this.searchForm} className='search-form'>
            <div className='error-message'>{msg}</div>

            <label htmlFor='search-label' className='search-label'>Search Locations</label>
            <input
              className='search-input'
              type='text'
              id='searchTerm'
              name='searchTerm'
              placeholder='Location'
              onChange={(event) =>
                this.changeSearchTerm(event.target.value)}
              required
            />

            <button className='search-button'
              type='submit'> Search
            </button>

          </form>
          <div>{showLocationsPage}</div>

        </section>
      </div>
    );
  }
}


export default Search;