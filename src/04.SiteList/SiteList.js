import React, { Component } from 'react';
import TokenService from '../services/token-service';
import config from '../config';
import './SiteList.css';
import FormWizard from '../07.AddSiteForm/FormWizard';
import Search from '../Search/Search';
import StarRating from '../StarRating/StarRating';

export default class SiteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      locationId: "",
      location: [],
    };
  }

  // handle submit for saving to users account button:
  handleSubmit = (event) => {
    event.preventDefault();
    const { locationId } = event.target;
    // console.log('locationID', locationId);
    this.setState({ error: null });
    // let currentUserId = TokenService.getUserId();
    // console.log('currentUserId', currentUserId);
    this.postLocation(locationId.value);
    // console.log('locationId.value', locationId.value)
    this.props.history.push('/account');
  };



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



  // potentially add the star rating to the cards also 

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
      // .then((res) => res.json());
      .then(res =>
        (!res.ok)
          ? res.json().then(e => this.setState({ error: e })
          )
          : res.json()
      )
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }


  render() {
    console.log(this.state.location);

    return (


      <main>
        <div className="list-page">

          <h1 className='list-h1'>List</h1>

          <div><FormWizard /> </div>
          <div><Search /></div>


          {/* google map */}
          <h4>{this.state.location.map((item, key) => {
            let iFrameUrl = `https://maps.google.com/maps?q=${item.keyword}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

            return (
              <section className='site-list-component'>
                <div className='site-list' key={key}>

                  <form className='locations-div' onSubmit={this.handleSubmit}>
                    <div className='title-image-content'>
                      <p className='title'>{item.title}</p>
                      <img src={item.image} alt='location' />
                      <p>{item.content}</p>
                      {/* <p>{item.location}</p> */}
                    </div>

                    <div className='content-div'>
                      <input type='hidden' name='locationId' value={item.id}></input>
                      <button className='save-button' type='submit'> Save </button>
                    </div>

                    <div className='google-map'>
                      <p>{item.keyword}</p>
                      {/* google map */}
                      <iframe
                        className="item-image"
                        width="50%"
                        height="250"
                        id="google_map"
                        src={iFrameUrl}
                        frameBorder="0"
                        scrolling="no"
                        alt={item.keyword}
                        title='title'
                      ></iframe>
                    </div>

                  </form>
                  <StarRating id={item.id} />

                </div>
              </section>
            );
          })}</h4>

        </div>
      </main>
    );
  }
}