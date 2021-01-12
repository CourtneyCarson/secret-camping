import React from 'react';
import config from '../config';
import TokenService from '../services/token-service';
// import './FormWizard.css'

class FormWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      title: '',
      content: '',
      keyword: '',
      imageUrl: null,
      imageAlt: null,
      error: null,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  postForm(title, content, keyword, imageUrl) {
    let URL = `${config.API_ENDPOINT}/location`;

    return fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      'body': JSON.stringify({
        title,
        content,
        keyword,
        image: imageUrl,
      }),
    })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }


  // submit form + after successful submission, re-route to step 1 
  handleSubmit = event => {
    event.preventDefault();
    const { title, content, keyword } = event.target;
    if (this.state.currentStep !== 3) {
      this.postForm(title.value, content.value, keyword.value, this.state.imageUrl)
        .then(() => {
          this.setState({
            currentStep: 3
          });
          window.location = '/list'
        });
    } else {

      // figure out how to get page to refresh so uploaded image doesn't still show. 
      this.setState({
        currentStep: 1
      });
    }
  };



  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className='btn btn-secondary'
          type='button' onClick={this._prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 2) {
      return (
        <button
          className='btn btn-primary float-right'
          type='button' onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }


  // for widget:
  openWidget = () => {
    // create the widget
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'secret-campsites',
        uploadPreset: 'k6ol9ng3',
      },
      (error, result) => {
        console.log(result);

        // added if statement in so that it would only update state when successful. 
        if (result.event === 'success')
          this.setState({
            imageUrl: result.info.secure_url,
            imageAlt: `An image of ${result.info.original_filename}`
          });
      },
    ).open(); // open up the widget after creation
  };





  render() {
    return (
      <React.Fragment>
        <h1>Add A New Site 🧙‍♂️</h1>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/* 
        render the form steps and pass required props in
      */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleImageUpload={this.handleImageUpload}
            openWidget={this.openWidget}
            imageUrl={this.state.imageUrl}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            title={this.state.title}
            content={this.state.content}
            keyword={this.state.keyword}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
          {this.previousButton()}
          {this.nextButton()}

        </form>
      </React.Fragment>
    );
  }
}





////////// STEP 1 CLOUDINARY UPLOAD ///////////////////
function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <section className='step1'>
      <section className='left-side'>
        <button type='button' className='btn widget-btn' onClick={props.openWidget}>Upload Via Widget</button>
      </section>

      <section className='right-side'>
        <p>The resulting image will be displayed here</p>
        {props.imageUrl && (
          <img src={props.imageUrl} alt={props.imageAlt} className='displayed-image' />
        )}
      </section>
    </section>
  );
}


//// rest of information//// 
function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <React.Fragment>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          className='form-control'
          id='title'
          name='title'
          type='text'
          placeholder='Enter title'
          value={props.title}
          onChange={props.handleChange}
        />
        <input
          className='form-control'
          id='content'
          name='content'
          type='content'
          placeholder='Enter content'
          value={props.content}
          onChange={props.handleChange}
        />
        <input
          className='form-control'
          id='keyword'
          name='keyword'
          type='keyword'
          placeholder='Enter location keyword'
          value={props.keyword}
          onChange={props.handleChange}
        />
      </div>
      <button className='btn btn-success btn-block'>Add Site</button>
    </React.Fragment>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className='form-group'>
        <h4> Success! </h4>
      </div>
      <button className='btn btn-success btn-block'>Submit Another</button>
    </React.Fragment>
  );
}

export default FormWizard;