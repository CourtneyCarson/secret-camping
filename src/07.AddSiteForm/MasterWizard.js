import React from 'react';


class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      title: '',
      content: '',
      keyword: '',
      imageUrl: null,
      imageAlt: null,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, content, keyword, imageUrl, imageAlt } = this.state;
    alert(`Your new site submission: \n 
           Title: ${title} \n 
           Content: ${content} \n
           Keyword: ${keyword}
           imageUrl: ${imageUrl}
           imageAlt: ${imageAlt}
           `);
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
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }
/////////// helper functions for cloudinary 
//  handleImageUpload = () => {
//   const { files } = document.querySelector('input[type="file"]');
//   const formData = new FormData();
//   formData.append('file', files[0]);
//   // replace this with your upload preset name
//   formData.append('upload_preset', 'k6ol9ng3');
//   const options = {
//     method: 'POST',

//     body: formData,
//   };

//   // replace cloudname with your Cloudinary cloud_name
//   return fetch('https://api.Cloudinary.com/v1_1/secret-campsites/image/upload', options)
//     .then(res => res.json())
//     // .then(res => console.log(res))
//     .then(res => {
//       this.setState({
//         imageUrl: res.secure_url,
//         imageAlt: `An image of ${res.original_filename}`
//       });
//     })
//     .catch(err => console.log(err));
// };


// for widget:
 openWidget = () => {
  // create the widget
  window.cloudinary.createUploadWidget(
    {
      cloudName: 'secret-campsites',
      uploadPreset: 'k6ol9ng3',
    },
    (error, result) => {
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
        <h1>React Wizard Form 🧙‍♂️</h1>
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
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}

        </form>
      </React.Fragment>
    );
  }
}

///////////////////////// HELPER FUNCTIONS FOR CLOUDINARY UPLOAD ////////////



////////// STEP 1 CLOUDINARY UPLOAD ///////////////////
function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }


  
  // const { imageUrl, imageAlt } = this.state;

  return (
    <section className='step1'>
   <section className="left-side">
        {/* <div className="form-group">
          <input type="file" />
        </div> */}

        {/* <button type="button" className="btn" onClick={props.handleImageUpload} >Submit</button> */}
        <button type="button" className="btn widget-btn" onClick={props.openWidget}>Upload Via Widget</button>
     
    </section>
    
    {/* <section className="right-side">
      <p>The resulting image will be displayed here</p>
      {imageUrl && (
        <img src={imageUrl} alt={imageAlt} className="displayed-image" />
      )}
    </section> */}


    </section>
 



    // <div className="form-group">
    //   <label htmlFor="email">Email address</label>
    //   <input
    //     className="form-control"
    //     id="email"
    //     name="email"
    //     type="text"
    //     placeholder="Enter email"
    //     value={props.email}
    //     onChange={props.handleChange}       
    //     />
    // </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}

export default MasterForm;