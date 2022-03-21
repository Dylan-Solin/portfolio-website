import React,{PureComponent} from "react";
import LandingPage from "./components/landingPage";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends PureComponent {
  render() { 
    return (
    <div>
      <LandingPage/>
    </div>  
    );
  }
}
 
export default App;