import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Site extends Component {

  render() {

    return (

      <main>
        <div className="site-page">
          <h1 className='site-h1'>Sites</h1>


          <section>
            <img src="example.jpg" alt="secret-camp-spot" />

            <p> Stuff about this secluded campsite.Stuff about this secluded campsite.
              Stuff about this secluded campsite.Stuff about this secluded campsite. </p>
            <div>
              {/* map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25079.178598479353!2d-119.02873911752269!3d38.212280398651565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8097ca2bfa68c0cb%3A0x140de8f45eae419f!2sBodie%2C%20CA!5e0!3m2!1sen!2sus!4v1609189615993!5m2!1sen!2sus"
                width="200"
                height="200"
                frameborder="0"
                // style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                title='map'>

              </iframe>
            </div>


            <label> review
        <input type="text" className='input-note' placeholder='leave a review here' name='note' id='note' />
            </label>
            {/*  potentially a star rating system  */}
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <button className='note-button' type='submit'>Add Review</button>

          </section>



        </div>
      </main>
    );
  }
}