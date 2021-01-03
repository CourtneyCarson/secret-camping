import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
      <section className='sign-up-component'>
        <div className="sign-up-page">
          <h1 className='sign-up-title'>Secret Camping </h1>
          <div className="form-div-reg">

            <h3 className="header">Sign Up</h3>
            <form className="signup-form">
              {/* onSubmit={this.handleSubmit}>
               {errorMessage} */}

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
    );
  }
}
export default SignUp;