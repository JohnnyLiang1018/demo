import React from 'react';
import ReactDOM from 'react-dom';
import Background from './assets/images/hero/CartHeader.jpg'; //import for the banner image
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
              <h1>Your Shopping Cart</h1>
              <ul className="page-breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="cart.html">Cart</a></li>
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
            <form action="#">
              <div className="row">
                <div className="col-12">
                  <div className="cart-table table-responsive mb-40">
                    <table>
                      <thead>
                        <tr>
                          <th className="pro-thumbnail">Product Image</th>
                          <th className="pro-title">Product Name</th>
                          <th className="pro-price">Price</th>
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-subtotal">Total</th>
                          <th className="pro-remove">Remove An Item</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pro-thumbnail"><a href="#"><img src={require("./assets/images/product/product-1.jpg")} alt /></a></td>
                          <td className="pro-title"><a href="#">Tmart Baby Dress</a></td>
                          <td className="pro-price"><span className="amount">$25</span></td>
                          <td className="pro-quantity"><div className="pro-qty"><input type="text" defaultValue={1} /></div></td>
                          <td className="pro-subtotal">$25</td>
                          <td className="pro-remove"><a href="#">×</a></td>
                        </tr>
                        <tr>
                          <td className="pro-thumbnail"><a href="#"><img src={require("./assets/images/product/product-2.jpg")} alt /></a></td>
                          <td className="pro-title"><a href="#">Jumpsuit Outfits</a></td>
                          <td className="pro-price"><span className="amount">$09</span></td>
                          <td className="pro-quantity"><div className="pro-qty"><input type="text" defaultValue={1} /></div></td>
                          <td className="pro-subtotal">$09</td>
                          <td className="pro-remove"><a href="#">×</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-12">
                  <div className="cart-buttons mb-30">
                    <input type="button" defaultValue="Update Cart" />
                    <a href="#">Continue Shopping</a>
                  </div>
                  {/*
                        <div class="cart-coupon mb-40">
                            <h4>Coupon</h4>
                            <p>Enter your coupon code if you have one.</p>
                             <div class="cuppon-form">
                                <input type="text" placeholder="Coupon code" />
                                <input type="submit" value="Apply Coupon" />
                             </div>
                        </div>
                        */}
                </div>
                <div className="col-lg-4 col-md-5 col-12">
                  <div className="cart-total fix mb-40">
                    <h3>Cart Totals</h3>
                    <table>
                      <tbody>
                        <tr className="cart-subtotal">
                          <th>Subtotal</th>
                          <td><span className="amount">$306.00</span></td>
                        </tr>
                        <tr className="cart-shipping">
                          <th>Tax</th>
                          <td><span className="amount">$0.00</span></td>
                        </tr>
                        <tr className="cart-shipping">
                          <th>Shipping Fee</th>
                          <td><span className="amount">$0.00</span></td>
                        </tr>
                        <tr className="order-total">
                          <th>Total</th>
                          <td>
                            <strong><span className="amount">$306.00</span></strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="proceed-to-checkout section mt-30">
                      <a href="#">Proceed to Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="brand-section section mb-80 mb-lg-60 mb-md-60 mb-sm-60 mb-xs-40">
            <div className="container-fluid">
              <div className="row">
                <div className="brand-slider">
                  <div className="brand-item col">
                  
                    <span><img src={require("./assets/images/brands/ramen-1.jpg")} alt /></span>
                  
                    <span><img src={require("./assets/images/brands/sushi-2.jpg")} alt /></span>
                  
                    <span><img src={require("./assets/images/brands/friedChicken-1.jpg")} alt /></span>
                  
                    <span><img src={require("./assets/images/brands/californiaroll.jpg")} alt /></span>
                    
                    <span><img src={require("./assets/images/brands/curry-30.jpg")} alt /></span>

                    <span><img src={require("./assets/images/brands/pizzaDeep.jpeg")} alt /></span>
                    
                

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