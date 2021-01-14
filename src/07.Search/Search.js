import React, { Component } from 'react';
import config from '../config';
import './Search.css';
import StarRating from '../08.StarRating/StarRating';

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

  // validateSearchTerm() {
  //   const searchTerm = this.state.searchTerm.value.trim();
  //   if (searchTerm.length === 0) {
  //     return 'Search Term Is Required';
  //   } else if (searchTerm.length < 2) {
  //     return 'Search Term must be at least 2 characters long';
  //   }
  // }

  // 
  searchForm = (event) => {
    event.preventDefault();
    const { searchTerm } = event.target;
    console.log('searchTerm:', searchTerm.value);

    let getLocationBySearchTerm = `${config.API_ENDPOINT}/location/keyword/${searchTerm.value}`;

    fetch(getLocationBySearchTerm)
      .then((loc) => loc.json())
      .then((locBySearch) => {
        console.log(locBySearch);
        this.setState({
          locations: locBySearch,
        });
        console.log(this.state);
      })
      .catch((error) => this.setState({ error }));
  };

  // to render page based on either search items or not :
  /// ternary button that swaps between two - state button set state to search - put on parent of both filter + sitelist , conditionaly
  //render based on state 



  render() {

    const msg = this.state.error ? <p>
      {this.state.error.error}
    </p> :
      <div></div>;

    // find way to only show this after searching - not all the time: 
    // show no items by default
    let showLocationsPage = '';
    // if (this.state.locations.length === 0) {
    //   showLocationsPage = <p> No Locations Here</p>;
    // }
    //if there are items - display details for each: 
    // else {
    showLocationsPage = this.state.locations.map((location, key) => {
      let iFrameUrl = `https://maps.google.com/maps?q=${location.keyword}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

      return (
        <section className='search-results-list' key={key}>
          <div className='search-list'>

            <StarRating id={location.id} />
            <h2 className='title'>{location.title}</h2>


            <form className='search-list-div'>
              <div className='content-div'>

                <div className='left-side-image-content'>
                  <img src={location.image} alt='location' className='search-list-img' />
                  <p className='content-p'>{location.content}</p>
                </div>


                <div className='right-side-map-keyword'>
                  <iframe
                    className="map-image"
                    width="350"
                    height="350"
                    id="google_map"
                    src={iFrameUrl}
                    frameBorder="0"
                    scrolling="no"
                    alt={location.keyword}
                    title='title'
                  ></iframe>
                  <p className='keyword-p'>{location.keyword}</p>

                </div>
              </div>
            </form>
            {/* <StarRating /> */}
          </div>
        </section>
      );
    });
    // }



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