import React,{PureComponent} from "react";
import LandingPage from "./components/landingPage";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes } from 'react-router-dom';
import Header from "./components/header";

class App extends PureComponent {
  render() { 
    return (
      <div>
      <Header/>
      <Routes>
        <Route  path='/' element={<LandingPage/>} />
        <Route  path='/work' element={<Work/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/contact' element={<Contact/>} />
      </Routes>
        </div>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Work = () => (
  <div>
    <h2>Work</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);
 
export default App;