import React, { Component } from 'react';
// import ReactStars from "react-rating-stars-component";
import config from '../config';
import TokenService from '../services/token-service';
import './StarRating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

    // console.log(rating, 'rating');

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
          res.json();
          window.location = '/list';
        }
      })
      .then(this.fetchRating)
      .catch(err => {
        console.log(err);
        this.setState({ errorMsg: err });
      });
  };





  render() {
    let rating = Math.round(parseInt(parseFloat(this.state.rating.average_rating))) || 1;

    return (
      <section className='ratings'>
        <form onSubmit={this.postForm} className='rating-form'>

          <div className='stars-container'>
            <p>Average Rating:</p>
            {[1, 2, 3, 4, 5].map(num => {
              let star = rating >= num ? 'full-star' : 'empty-star';

              return (
                <div className={star} key={num}>
                  <FontAwesomeIcon icon={faCampground} className='font-awesome' />
                </div>
              );
            })}
          </div>

          {/* leave a rating dropdown */}
          <div className='rating-select-div'>
            <p>Leave A Rating</p>


            <select name='ratings_select' className='rating-select' aria-label='rating' >
              {[1, 2, 3, 4, 5].map(num => {
                return (
                  <option
                    key={num}
                    value={num}
                    aria-label='dropdown'
                  >{num}
                  </option>
                );
              })}
            </select>
            <button className='rating-btn'>Submit</button>
          </div>

        </form>
      </section>
    );

  }
};

export default StarRating;