import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        registerUsername: '',
        registerPassword: '',
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { registerUsername, registerPassword } = event.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      email: registerUsername.value,
      password: registerPassword.value,
    })

      .then(res => {
        // check auth when you register
        TokenService.saveAuthtoken(res.authToken);
        TokenService.saveUserId(res.id);
        window.location = '/login';
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };


  validateUserName(inputEmail) {
    let outputEmail = inputEmail;
    let mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
    if (!inputEmail.match(mailformat)) {
      outputEmail = '';
    }
    return outputEmail;
  }

  validatePassword(inputPassword) {
    let outputPassword = inputPassword;
    let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if (!inputPassword.match(passwordFormat)) {
      outputPassword = '';
    }
    return outputPassword;
  }




  render() {

    const errorMessage = this.state.error ? (
      <p className="error-message">{this.state.error}</p>
    ) : (false);

    return (
      <main>
        <section className='sign-up-component'>
          <section className='sign-up-overlay'>
            <div className="sign-up-page">

              <h1 className='sign-up-title'>Secret Camping </h1>

              <div className="form-div-reg">
                <h3 className="header">Sign Up</h3>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                  {errorMessage}
                  <label className="signup-label">Email
                    <input
                      className="sign-up-input"
                      type="text"
                      name="registerUsername"
                      placeholder="email@email.com"
                      required />
                  </label>

                  <label className="signup-label">Password
                   <input
                      className="sign-up-input"
                      type="password"
                      name="registerPassword"
                      placeholder="password"
                      required />
                  </label>

                  <button type="submit" className="sign-up-button">Register</button>
                </form>

                <div className="link-register-div">
                  <p> Already Have An Account?
                  <Link to="/login" className="login-link">Log In</Link></p>
                </div>
              </div>

            </div>
          </section>
        </section>
      </main>
    );
  }
}
export default SignUp;