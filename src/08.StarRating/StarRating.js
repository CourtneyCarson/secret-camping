import React, { Component } from 'react';
// import ReactStars from "react-rating-stars-component";
import config from '../config';
import TokenService from '../services/token-service';
import './StarRating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTree } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';


class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: {},
      errorMsg: null,
    };
  }


  componentDidMount() {
    this.fetchRating();
  }

  //get all ratings
  fetchRating = () => {
    let URL = `${config.API_ENDPOINT}/ratings/${this.props.id}`;

    return fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })

      .then((response) => response.json())
      .then((data) => {
        this.setState({
          rating: data,
        });
      })
      .catch((error) => console.log(error));
  };



  // post dropdown rating to db
  postForm = (event) => {
    event.preventDefault();
    let URL = `${config.API_ENDPOINT}/ratings/${this.props.id}`;
    let rating = event.target.ratings_select.value;

    console.log(rating, 'rating');

    return fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      'body': JSON.stringify({
        stars: rating
      }),
    })
      .then(res => {
        if (!res.ok) {
          this.setState({ errorMsg: res.statusText });
        } else {
          res.json()
          window.location = '/list'
        }
      })
      .then(this.fetchRating)
      .catch(err => {
        console.log(err);
        this.setState({ errorMsg: err });
      });
  };





  render() {
    // STILL NEED TO HANDLE ERROR: let error = this.state.error


    // error message output 
    let showErrorOutput = '';
    console.log(this.props.showError);
    if (this.props.showError) {
      showErrorOutput = <div className='alert alert-info'>
        {this.props.showError}
      </div>;
    }


    let rating = Math.round(parseInt(parseFloat(this.state.rating.average_rating))) || 1;

    return (
      <>
        <p>Average Rating:</p>

        <form onSubmit={this.postForm}>
          {[1, 2, 3, 4, 5].map(num => {
            let star = rating >= num ? 'full-star' : 'empty-star';

            return <div className={star} key={num}>

              {/* <FontAwesomeIcon icon={faTree} /> */}
              <FontAwesomeIcon icon={faCampground} />
            </div>;
          })}

          <select name='ratings_select'>
            {[1, 2, 3, 4, 5].map(num => {
              return (
                <option
                  key={num}
                  value={num}
                >{num}
                </option>
              );
            })}
          </select>

          <button>Submit</button>
          {/* {showErrorOutput} */}

        </form>
      </>
    );

  }
};

export default StarRating;