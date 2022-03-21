import React, { PureComponent } from 'react';
import '../styles/App.css';
import WebNavbar from './navbar';
import Slideshow from './slideshow';

class LandingPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    state = {  }

    render() {
        return (
            <div id="landingPage">
               <WebNavbar/>
               <Slideshow/>
            </div>
          );
    }
}
 
export default LandingPage;