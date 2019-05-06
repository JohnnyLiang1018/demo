import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Background from './assets/images/hero/UserOrGuest.jpg';
require('./assets/css/style.css');
require('./assets/images/favicon.ico');
require('./assets/css/bootstrap.min.css');
require('./assets/css/icon-font.min.css');
require('./assets/css/plugins.css');
require('./assets/css/helper.css');
require('./assets/css/style.css');

//This is the class where the components will get called
class App extends React.Component {

  constructor(props) {
    super(props);

    // Initialize State
    this.state = {
      isLogin: 'Login',
      Header: 'index',
      Section_one: 'index',
      Section_two: 'index',
      Section_three: 'index',
      Footer: 'index'
    }
    this.setLoginState = this.setLoginState.bind(this)
  }

  // Update State
  setLoginState(event) {
    if (event === 'Login') {
      this.setState(state => ({
        isLogin: 'Logout'
      }));
    }
    else {
      this.setState(state => ({
        isLogin: 'Login'
      }));
    }
  }




  //This part is where the render calls specific classes 
  //Everthing inside the <div></div> needs to be modified according to your specific page
  render() {
    return (
      <div className="App">
        <Banner></Banner>
        <Body></Body>
      </div>
    );
  };
}



//A constant for the style tag within the banner component 
const banner = {
  padding: "100px 0",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  position: "relative",
  zIndex: "1",
  backgroundImage: `url(${Background})`

}

//Banner Component 
class Banner extends React.Component {
  render() {
    return (
      <div className="page-banner-section section" style={banner}>
        <div className="container">
          <div className="row">
            <div className="page-banner-content col">
              <h1>Order Confirmation</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

//Body Components (also includes side bar) 
//Change all <img></img> tags to the appropriate format 
class Body extends React.Component {
  render() {
    return (
      <div>
        <div className="page-section section mt-80 mt-lg-60 mt-md-60 mt-sm-60 mt-xs-40 mb-40 mb-lg-20 mb-md-20 mb-sm-20 mb-xs-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-40">
                <div className="login-register-form-wrap">
                  <h3>Order Confirmation</h3>
                  <form action="#">
                    <p>Your Order Has Been Placed. Thank you for shopping at Thunderbolt.com</p>
                    <button className="place-order">Go Back To Homepage</button>

                  </form>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className="brand-section section mb-80 mb-lg-60 mb-md-60 mb-sm-60 mb-xs-40">
          <div className="container-fluid">
            <div className="row">
              <div className="brand-slider">
                <div className="brand-item col">

                  <span><img src={require("./assets/images/brands/steak-1.jpg")} alt /></span>

                  <span><img src={require("./assets/images/brands/SalmonSeared.jpg")} alt /></span>

                  <span><img src={require("./assets/images/brands/burgerThicc.jpeg")} alt /></span>

                  <span><img src={require("./assets/images/brands/orange.png")} alt /></span>

                  <span><img src={require("./assets/images/brands/lavacake.jpg")} alt /></span>

                  <span><img src={require("./assets/images/brands/blueberrycheesecake.jpg")} alt /></span>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
ReactDOM.render(<App />, document.getElementById('root'));
