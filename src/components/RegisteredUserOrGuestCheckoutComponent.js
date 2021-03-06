import React from 'react';
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




  //This part is where the render calls specific classes 
  //Everthing inside the <div></div> needs to be modified according to your specific page
  render() {
    return (
      <div className="App">
        <Banner></Banner>
        <Body handler = {this.props.handler}></Body>
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
      <div className="page-banner-content col text-left">
        <h1><font size="7" color="white">Registered User Or Guest Checkout</font></h1>
        <ul className="page-breadcrumb">
          <li><a href="index.html"><font color="white">Home</font></a></li>
          <li><a href="shop-left-sidebar.html"><font color="white">Registered User or Guest Checkout</font></a></li>
        </ul>

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
                  <h3>Registered User Checkout</h3>
                  <form action="#" className="mb-30">
                    <div className="row">
                      <div className="col-12 mb-15"><input type="text" placeholder="Username or Email Address" /></div>
                      <div className="col-12 mb-15"><input type="password" placeholder="Password" /></div>
                      <div className="col-12"><input type="submit" defaultValue="Login and Checkout" onClick={(param)=> this.props.handler('checkout')} /></div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-2 col-12 mb-40 text-center">
                <span className="login-register-separator" />
              </div>
              <div className="col-lg-6 col-12 mb-40 ml-auto">
                <div className="login-register-form-wrap">
                  <h3>Guest Checkout</h3>
                  <form action="#">
                    <button className="place-order" onClick={(param)=> this.props.handler('checkout')}>Guest Checkout</button>

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
