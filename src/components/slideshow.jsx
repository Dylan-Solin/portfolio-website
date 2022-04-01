import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";

import image1 from '../images/IMG_1924.jpg'
import image2 from '../images/IMG_2529.jpg'
import image3 from '../images/IMG_4354.jpg'
import image4 from '../images/IMG_4540.jpg'
import image5 from '../images/IMG_4693.jpg'


const slideImages = [
    {
      url: image1,
      caption: 'Slide 1'
    },
    {
        url: image2,
        caption: 'Slide 2'
      },
      {
        url: image3,
        caption: 'Slide 3'
      },
      {
        url: image4,
        caption: 'Slide 4'
      },
      {
        url: image5,
        caption: 'Slide 5'
      },
  ];

class Slideshow extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div id="slide" className="slide-container">
            <Slide arrows={false}>
             {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                  <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                  </div>
                </div>
              ))} 
            </Slide>
          </div>
         );
    }
}
 
export default Slideshow;