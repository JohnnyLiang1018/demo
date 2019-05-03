import React from 'react';
import ReactDOM from 'react-dom';
import Background from './assets/images/hero/CheckoutDessert.jpg'; //import for the banner image 
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
              <h1>Checkout</h1>
              <ul className="page-breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="checkout.html">Checkout</a></li>
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
              <div className="col-12">
                {/* Checkout Form s*/}
                <form action="#" className="checkout-form">
                  <div className="row row-50">
                    <div className="col-lg-7">
                      {/* Billing Address */}
                      <div id="billing-form" className="mb-20">
                        <h4 className="checkout-title">Shipping Address</h4>
                        <div className="row">
                          <div className="col-md-6 col-12 mb-5">
                            <label>First Name*</label>
                            <input type="text" placeholder="First Name" />
                          </div>
                          <div className="col-md-6 col-12 mb-5">
                            <label>Last Name*</label>
                            <input type="text" placeholder="Last Name" />
                          </div>
                          <div className="col-md-6 col-12 mb-5">
                            <label>Email Address*</label>
                            <input type="email" placeholder="Email Address" />
                          </div>
                          <div className="col-md-6 col-12 mb-5">
                            <label>Phone Number*</label>
                            <input type="text" placeholder="Phone number" />
                          </div>
                          <div className="col-12 mb-5">
                            <label>Address*</label>
                            <input type="text" placeholder="Address line 1" />
                            <input type="text" placeholder="Address line 2" />
                          </div>
                          <div className="col-md-6 col-12 mb-5">
                            <label>Country*</label>
                            <select className="nice-select">
                              <option>United States</option>
                            </select>
                          </div>
                          <div className="col-md-6 col-12 mb-5">
                            <label>City*</label>
                            <input type="text" placeholder="City" />
                          </div>
                          <div className="col-md-6 col-12 mb-5">
                            <label>State*</label>
                            <input type="text" placeholder="State" />
                          </div>
                          <div className="col-md-6 col-12 mb-5">
                            <label>Zip Code*</label>
                            <input type="text" placeholder="Zip Code" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="row">
                        {/* Cart Total */}
                        <div className="col-12 mb-40">
                          <h4 className="checkout-title">Cart Total</h4>
                          <div className="checkout-cart-total">
                            <h4>Product <span>Total</span></h4>
                            <ul>
                              <li>Samsome Notebook Pro 5 X 01 <span>$295.00</span></li>
                              <li>Aquet Drone  D 420 X 02 <span>$550.00</span></li>
                              <li>Play Station X 22 X 01 <span>$295.00</span></li>
                              <li>Roxxe Headphone Z 75 X 01 <span>$110.00</span></li>
                            </ul>
                            <p>Sub Total <span>$1250.00</span></p>
                            <p>Tax <span>$00.00</span></p>
                            <p>Shipping Fee <span>$00.00</span></p>
                            <h4>Grand Total <span>$1250.00</span></h4>
                          </div>
                        </div>
                        {/* Payment Information */}
                        <div className="col-12 mb-40">
                          <h4 className="checkout-title">Payment Information</h4>
                          <div className="checkout-payment-method">
                            <div>
                              <div className="col-md-6 col-12 mb-5">
                                <label>Card Number*</label>
                                <input type="text" placeholder="Card Number" />
                              </div>
                              <div className="col-md-6 col-12 mb-5">
                                <label>Card Holder Name*</label>
                                <input type="text" placeholder="Full Name" />
                              </div>
                              <div className="col-md-6 col-12 mb-5">
                                <label>Expiration*</label>
                                <input type="text" placeholder="MM/YY" />
                              </div>
                              <div className="col-md-6 col-12 mb-5">
                                <label>Security Code*</label>
                                <input type="text" placeholder="CVC" />
                              </div>
                              <div className="col-md-6 col-12 mb-5">
                                <label>ZIP/ Postal Code*</label>
                                <input type="text" placeholder={95192} />
                              </div>
                              <p>By placing order. I agree....  Placeholder</p>
                              <div className="single-method">
                                <input type="checkbox" id="accept_terms" />
                                <label htmlFor="accept_terms">I’ve read and accept the terms &amp; conditions</label>
                              </div>
                            </div>
                            <button className="place-order">Place order</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></form>
              </div>
            </div>
          </div>
          <div className="brand-section section mb-80 mb-lg-60 mb-md-60 mb-sm-60 mb-xs-40">
            <div className="container-fluid">
              <div className="row">
                <div className="brand-slider">
                  <div className="brand-item col">

                    <span><img src={require("./assets/images/brands/pizza-3.jpg")} alt /></span>

                    <span><img src={require("./assets/images/brands/fries-1.jpg")} alt /></span>

                    <span><img src={require("./assets/images/brands/salad-2.jpg")} alt /></span>

                    <span><img src={require("./assets/images/brands/saladBeat.jpg")} alt /></span>

                    <span><img src={require("./assets/images/brands/fruitExotic.jpg")} alt /></span>

                    <span><img src={require("./assets/images/brands/kiwi-1.jpg")} alt /></span>



                  </div>
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