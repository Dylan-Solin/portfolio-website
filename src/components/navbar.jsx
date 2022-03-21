import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// eslint-disable-next-line no-unused-vars
class WebNavbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (

            <Navbar bg="light" expand="lg">
                <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '200px' }}
        navbarScroll
      >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
            </Navbar>
        
        );
    }
}
 
export default Navbar;