import React, { Component } from 'react';
import config from '../config';

class FilterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // locations, locations id? 
      locations: [],
      searchTerm: {
        value: '',
        touched: false,
      },
      error: null
    };
  }

  componentDidMount() {
    let getLocations = `${config.API_ENDPOINT}/location/`;

    fetch(getLocations)
      .then((locationInList) => locationInList.json())
      .then((locationInList) => {
        this.setState({
          locations: [locationInList],
        });
        console.log(this.state);
      })
      .catch((error) => this.setState({ error }));
  }

  changeSearchTerm(searchTerm) {
    this.setState({
      searchTerm: { value: searchTerm },
    });
  }

  validateSearchTerm() {
    const searchTerm = this.state.searchTerm.value.trim();
    if (searchTerm.length === 0) {
      return 'Search Term Is Required';
    } else if (searchTerm.length < 2) {
      return 'Search Term must be at least 2 characters long';
    }
  }

  // 
  searchForm = (event) => {
    event.preventDefault();
    const { searchTerm } = event.target;
    console.log('searchTerm:', searchTerm.value);

    let getLocationBySearchTerm = `${config.API_ENDPOINT}/location/keyword/${searchTerm.value}`;

    fetch(getLocationBySearchTerm)
      .then((locBySearch) => locBySearch.json())
      .then((locBySearch) => {
        console.log(locBySearch);
        this.setState({
          locations: locBySearch,
        });
        console.log(this.state);
      })
      .catch((error) => this.setState({ error }));
  };


  // show list of locations after search complete
  showAll = () => {
    window.location = '/list';
  };

  render() {

    const msg = this.state.error ? <p>
      {this.state.error}
    </p> :
      <div></div>;

    // show no items by default
    let showLocationsPage = '';
    if (this.state.locations.length === 0) {
      showLocationsPage = <p> No Locations Here</p>;
    }
    //if there are items - display details for each: 
    else {
      showLocationsPage = this.state.locations.map((location, key) => {
        if (location) {
          let iFrameUrl = `https://maps.google.com/maps?q=${location.keyword}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

          // map render on filter 
          
          return (
            <div key={key}>
              <p>{location.title}</p>
              <p>{location.content}</p>
              <p>{location.keyword}</p>
              <img src={location.image} alt='location' />
              <iframe
                  className="item-image"
                  width="100%"
                  height="350"
                  id="google_map"
                  src={iFrameUrl}
                  frameBorder="0"
                  scrolling="no"
                  alt={location.keyword}
                  title='title'
                ></iframe>
              
            </div>
          );
        }
        else return null
      });
    }



    return (
      <div className='location-search'>
        <section>
          <form onSubmit={this.searchForm}>
            <div className='error-message'>{msg}</div>
            <label htmlFor='searchTerm'>SearchTerm</label>
            <input
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

      
    )

  }
}




export default FilterSearch;