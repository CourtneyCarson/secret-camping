import React, { Component } from 'react';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
// let cl = new Cloudinary.Cloudinary({cloud_name: "secret-campsites", secure: true, names: 'snake_case'});
import './AddSiteForm.css'


class AddNewSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      keyword: '',
      imageUrl: null,
      imageAlt: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newSitePayload = {
      title: this.state.title,
      content: this.state.content,
      keyword: this.state.keyword,
    };
    console.log(newSitePayload);
  };

  // what needed for database: 
  // * image(image)
  // * title (note title)
  // * content (note text)
  // * keyword (keyword for maps)
  // need a function to set up publicID to be attached to location_id
  // possibly set set then able to call it as this.state 

  handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData();
    formData.append('file', files[0]);
    // replace this with your upload preset name
    formData.append('upload_preset', 'k6ol9ng3');
    const options = {
      method: 'POST',
    
      body: formData,
    };

    // replace cloudname with your Cloudinary cloud_name
    return fetch('https://api.Cloudinary.com/v1_1/secret-campsites/image/upload', options)
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => {
        this.setState({
          imageUrl: res.secure_url,
          imageAlt: `An image of ${res.original_filename}`
        })
      })
      .catch(err => console.log(err));
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
      this.setState({
        imageUrl: result.info.secure_url,
        imageAlt: `An image of ${result.info.original_filename}`
      })
    },
  ).open(); // open up the widget after creation
};






  render() {
    // for image upload:
    const { imageUrl, imageAlt } = this.state;


    return (
      <section className='add-new-site'>



          {/* <Image cloudName="secret-campsites" publicId="sample" width="300" crop="scale" /> */}
          <section className="left-side">
            <form>
              <div className="form-group">
                <input type="file" />
              </div>

              <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
              <button type="button" className="btn widget-btn" onClick={this.openWidget}>Upload Via Widget</button>            </form>
          </section>
          <section className="right-side">
            <p>The resulting image will be displayed here</p>
            {imageUrl && (
              <img src={imageUrl} alt={imageAlt} className="displayed-image" />
            )}
          </section>


          <form className='add-new-form' onSubmit={this.handleSubmit}>

          <label> Title
        <input
              type='text'
              className='input-title'
              placeholder='write title'
              value={this.state.title}
              name='title'
              id='title'
              onChange={(event) => this.setState({ title: event.target.value })}
              required
            /></label>

          <label> Content
          <input
              type="text"
              className='input-note'
              placeholder='write notes here'
              value={this.state.content}
              name='note'
              id='note'
              onChange={(event) => this.setState({ content: event.target.value })}
              required
            />
          </label>
          <button className='note-button' type='submit'>Add New Site</button>

        </form>









      </section>
    );
  }
}
export default AddNewSite;