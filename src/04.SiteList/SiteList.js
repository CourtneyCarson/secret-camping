import React, { Component } from 'react';
import TokenService from '../services/token-service';
import config from '../config';
import './SiteList.css';
import FormWizard from '../06.AddSiteForm/FormWizard';
import Search from '../07.Search/Search';
import StarRating from '../08.StarRating/StarRating';

export default class SiteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationId: "",
      location: [],
      errorMsg: '',
    };
  }

  // handle submit for saving to users account button:
  handleSubmit = (event) => {
    event.preventDefault();
    const { locationId } = event.target;
    this.setState({ errorMsg: null });
    this.postLocation(locationId.value);
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
          this.setState({ errorMsg: `Location already saved to account` });
        } else {
          res.json();
          window.location = '/account';
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ errorMsg: err });
      });
  }


  render() {
    // console.log(this.state.location);

    // error message output 
    let showErrorOutput = '';
    // console.log(this.state.errorMsg);
    if (this.state.errorMsg) {
      showErrorOutput = <div className='alert alert-info'>
        {this.state.errorMsg}
      </div>;
    }



    return (
      <main>
        <div className="list-page">

          <section className='form-search-section'>

            {/* upload image & add details: */}
            <div className='form-wizard-div'>
              <FormWizard />
            </div>

            {/* Filter the locations: */}
            <div className='search-box-div'>
              <Search />
            </div>

          </section>

          <h4>{this.state.location.map((item, key) => {
            // google map rendered based on keyword:
            let iFrameUrl = `https://maps.google.com/maps?q=${item.keyword}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

            return (
              <section className='site-list-component' key={key}>
                <div className='site-list' key={key}>
                  {showErrorOutput}

                  <StarRating id={item.id} showError={this.state.errorMsg} />
                  <h1 className='title'>{item.title}</h1>

                  <form className='locations-div' onSubmit={this.handleSubmit}>
                    <div className='site-list-content-div'>
                      <div className='left-side-image-content'>
                        <img src={item.image} alt='location' className='site-list-img' height="322.46" width='322.46' />
                        <p className='content-p'>{item.content}</p>
                      </div>

                      <div className='right-side-map-keyword-site-list'>
                        {/* google map */}
                        <iframe
                          className="map-image-site-list-page"
                          width="322.46"
                          height="322.46"
                          id="google_map"
                          src={iFrameUrl}
                          frameBorder="0"
                          scrolling="no"
                          alt={item.keyword}
                          title='title-map'
                        >
                        </iframe>

                        <p className='keyword-p'>{item.keyword}</p>
                        <input type='hidden' name='locationId' value={item.id}></input>
                        <button className='save-button' type='submit'> Save </button>

                      </div>
                    </div>
                  </form>

                </div>
              </section>
            );
          })}
          </h4>

        </div>
      </main>
    );
  }
}