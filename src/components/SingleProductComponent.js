import React from 'react';
import ReactDOM from 'react-dom';
//import Background from './assets/images/blog/IngredientsBanner.jpg';
import Background from './assets/images/hero/CartHeader.jpg'; //import for the banner image
require ('./assets/images/favicon.ico');
require ('./assets/css/bootstrap.min.css');
require ('./assets/css/icon-font.min.css');
require ('./assets/css/plugins.css');
require ('./assets/css/helper.css');
require ('./assets/css/style.css');

class App extends React.Component
{
     constructor(props){
    super(props);

  // Initialize State
    this.state = {
      isLogin: 'Login',
      Header: 'index',
      Section_one:'index',
      Section_two:'index',
      Section_three:'index',
      Footer:'index'
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
        <Header></Header>
        <Header2></Header2>
        <Banner></Banner>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  };
}


//Header Component
class Header extends React.Component {
  render (){
    return (
    <div>
          <div className ="header-section section">
            <div className ="header-top header-top-one bg-theme-two">
              <div className ="container-fluid">
                <div className ="row align-items-center justify-content-center">
                        <div className ="col mt-10 mb-10 d-none d-md-flex">
                            <div className ="header-top-left">
                                <p>Welcome to Thunderbolt MiniMart</p>
                            </div>
                        </div>
                        <div className ="col mt-10 mb-10"></div>
                        <div className ="col mt-10 mb-10">
                          <div className ="header-top-right">
                            <p><a href="index.html">My Account</a></p>
                            <p><a href="login-register.html">Register</a><a href="login-register.html">Login</a></p>
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


//A constant for the style tag within the banner component 
const banner = {
  padding: "100px 0",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  position: "relative",
  zIndex: "1",
  backgroundImage: `url(${Background})`

}

const head2 = {
  padding: "45px 0",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  position: "relative",
} 

class Header2 extends React.Component {
  render() {
    return (
<div className="header-bottom header-bottom-one header-sticky" style ={head2}>
          <div className="container-fluid">
                <div className="row menu-center align-items-center justify-content-between">
                    <div class ="col mt-15 mb-15">
                      <div className="header-logo">
                        <a href="index.html">
                            <img src= {require('./assets/images/black-logo.png')} alt="Jadusona"></img>
                        </a>
                      </div>
                    </div>
                    <div class ="col order-2 order-lg-3">
                        <div className="header-shop-links">
                          <div className="header-search">
                              <button className="search-toggle"><img src={require('./assets/images/icons/search.png')} alt="Search Toggle"></img>
                                  <img className="toggle-close" src={require('./assets/images/icons/close.png')} alt="Search Toggle"></img>
                              </button>
                                    <div className="header-search-wrap">
                                              <form action="#">
                                                  <input type="text" placeholder="Type and hit enter"></input>
                                                  <button><img src={require('./assets/images/icons/search.png')} alt="Search"></img></button>
                                              </form>
                                      </div>
                            </div>
                            <div className="header-wishlist">
                              <a href="wishlist.html"><img src= {require('./assets/images/icons/wishlist.png')} alt="Wishlist"></img><span>02</span></a>
                            </div>
                            <div className="header-mini-cart">
                              <a href="cart.html"><img src={require('./assets/images/icons/cart.png')} alt="Cart"></img><span>02($250)</span></a>
                            </div>
                        </div>
                              </div>

                              <div className="col order-3 order-lg-2">
                                  <div className="main-menu">
                                      <nav>
                                          <ul>
                                              <li><a href="index.html">HOME</a>
                                              </li>
                                              <li className="active"><a href="shop.html">AISLES</a> </li>
                                              <li><a href="index.html">DEALS</a></li>
                                              <li><a href="recipe-blog-page-Sam.html">RECIPES</a>
                                                  <ul className="sub-menu">
                                                      <li><a href="breakfast-recipe.html">Breakfast</a></li>
                                                      <li><a href="lunch-recipe.html">Lunch</a></li>
                                                      <li><a href="dinner-recipe.html">Dinner</a></li>
                                                  </ul>
                                              </li>
                                              <li><a href="contact.html">MY PURCHASES</a></li>
                                          </ul>
                                      </nav>
                                  </div>
                              </div>
                              <div className ="mobile-menu order-12 d-block d-lg-none col"></div>
                          </div>
                      </div>
                  </div>
    );
  };
}


//Banner Component 
class Banner extends React.Component {
  render() {
    return (
      <div className="page-banner-section section" style={banner}>
        <div className="container">
          <div className="row">
            <div className="page-banner-content col">
              <h1>Single-Product</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
}










class Body extends React.Component {
  render() {
    return (


                
                
        

    <div className="page-section section mt-80 mt-lg-60 mt-md-60 mt-sm-60 mt-xs-40 mb-80 mb-lg-60 mb-md-60 mb-sm-60 mb-xs-40">
        <div className="container">
            <div className="row row-30">

                <div className="col-12">
                    <div className="row row-20 mb-20 mb-xs-0">

                        <div className="col-lg-6 col-12 mb-40">

                        <div className="pro-large-img mb-10 fix easyzoom easyzoom--overlay easyzoom--with-thumbnails">
                     
                          <img src= {require('./assets/images/product/yoplait.jpeg')} alt=""></img>
                                   

                    </div>

                            
                        </div>

                        <div className="col-lg-6 col-12 mb-40">
                            <div className="single-product-content">

                                <div className="head">
                                    <div className="head-left">

                                        <h3 className="title">Yoplait Yogurt</h3>


                                    </div>

                                    <div className="head-right">
                                        <span className="price">$1</span>
                                    </div>
                                </div>

                                <div className="description">
                                    <p>Yoplait Yogurt, Original Mango</p>
                                </div>

                                <span className="availability">Availability: <span>In Stock</span></span>


                                <div className="actions">

                                    <button><i className="ti-shopping-cart"></i><span>ADD TO CART</span></button>
                                    <button className="box" data-tooltip="Compare"><i className="ti-control-shuffle"></i></button>
                                    <button className="box" data-tooltip="Wishlist"><i className="ti-heart"></i></button>

                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="row mb-60 mb-xs-40">
                       
                        <div className="col-12">
                            
                        </div>
                  
                        <div className="tab-content col-12">
                            <div className="pro-info-tab tab-pane active" id="more-info">
                                
                            </div>
                            <div className="pro-info-tab tab-pane" id="data-sheet">
                                <table className="table-data-sheet">
                                    <tbody>
                                        <tr className="odd">
                                            <td>Compositions</td>
                                            <td>Cotton</td>
                                        </tr>
                                        <tr className="even">
                                            <td>Styles</td>
                                            <td>Casual</td>
                                        </tr>
                                        <tr className="odd">
                                            <td>Properties</td>
                                            <td>Short Sleeve</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="pro-info-tab tab-pane" id="reviews">
                                <a href="#">Be the first to write your review!</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="section-title text-left col col mb-60 mb-sm-40 mb-xs-30">
                            <h1>Related Product</h1>
                        </div>
                            <div className="col">

                                <div className="product-item">
                                    <div className="product-inner">

                                        <div className="image">
                                        
                                  
                                        <img src= {require('./assets/images/product/Cheese.jpg')} alt=""></img>
                                   
                                   
                                            <div className="image-overlay">
                                                <div className="action-buttons">
                                                    <button>add to cart</button>
                                                    <button>add to wishlist</button>
                                                </div>
                                            </div>

                                     
                                           

                                            <div className="image-overlay">
                                                <div className="action-buttons">
                                                    <button>add to cart</button>
                                                    <button>add to wishlist</button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="content">

                                            <div className="content-left">

                                                <h4 className="title"><a href="single-product.html">Cheese</a></h4>

   

                                            
                                            </div>

                                            <div className="content-right">
                                                <span className="price">$3.99</span>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col">

                                <div className="product-item">
                                    <div className="product-inner">

                                        <div className="image">
                                  
                                        <img src= {require('./assets/images/product/Cream Cheese.jpeg')} alt=""></img>
                                   
                                   
                                            <div className="image-overlay">
                                                <div className="action-buttons">
                                                    <button>add to cart</button>
                                                    <button>add to wishlist</button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="content">

                                            <div className="content-left">

                                                <h4 className="title"><a href="single-product.html">Cream Cheese</a></h4>



                                            

                                            </div>

                                            <div className="content-right">
                                                <span className="price">$3.99</span>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col">

                                <div className="product-item">
                                    <div className="product-inner">

                                        <div className="image">
                                        <img src= {require('./assets/images/product/Ice Cream.png')} alt=""></img>
               
                                            <div className="image-overlay">
                                                <div className="action-buttons">
                                                    <button>add to cart</button>
                                                    <button>add to wishlist</button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="content">

                                            <div className="content-left">

                                                <h4 className="title"><a href="single-product.html">Ice Cream</a></h4>


                                               

                                            </div>

                                            <div className="content-right">
                                                <span className="price">$4.99</span>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col">

                                <div className="product-item">
                                    <div className="product-inner">

                                        <div className="image">
                                        <img src= {require('./assets/images/product/milk.jpeg')} alt=""></img>
                                   
                                            <div className="image-overlay">
                                                <div className="action-buttons">
                                                    <button>add to cart</button>
                                                    <button>add to wishlist</button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="content">

                                            <div className="content-left">

                                                <h4 className="title"><a href="single-product.html">Milk</a></h4>



                                              
                                            </div>

                                            <div className="content-right">
                                                <span className="price">$3.99</span>
                                            </div>

                                        </div>

                                    </div>
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
//Footer Component
class Footer extends React.Component{
  render() {
    return (
      <div>
      

      <div className="footer-top-section section bg-theme-two-light pt-80 pt-lg-60 pt-md-60 pt-sm-60 pt-xs-40 pb-40 pb-lg-20 pb-md-20 pb-sm-20 pb-xs-0">
      <div className="container">
          <div className="row">

              <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                  <h4 className="title">CONTACT US</h4>
                  <p>You address will be here<br/> Lorem Ipsum text</p>
                  <p><a href="tel:01234567890">01234 567 890</a><a href="tel:01234567891">01234 567 891</a></p>
                  <p><a href="mailto:info@example.com">info@example.com</a><a href="#">www.example.com</a></p>
              </div>
              <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                  <h4 className="title">AISLES</h4>
                  <ul>
                      <li><a href="#">placeholder</a></li>
                      <li><a href="#">placeholder</a></li>
                      <li><a href="#">placeholder</a></li>
                  </ul>
              </div>


              <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                  <h4 className="title">DEALS</h4>
                  <ul>
                      <li><a href="#">Best Seller</a></li>
                      <li><a href="#">Best Deals</a></li>
                      <li><a href="#">On Sale Products</a></li>
                  </ul>
              </div>

              <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                  <h4 className="title">INFORMATION</h4>
                  <ul>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="#">Payment Method</a></li>
                      <li><a href="#">Product Warranty</a></li>
                      <li><a href="#">Return Process</a></li>
                      <li><a href="#">Payment Security</a></li>
                  </ul>
              </div>

          </div>
      </div>
  </div>

  <div className="footer-bottom-section section bg-theme-two pt-15 pb-15">
      <div className="container">
          <div className="row">
              <div className="col text-center">
                  <p className="footer-copyright">Copyright &copy; All rights reserved</p>
              </div>
          </div>
      </div>
  </div>

</div>
    );
  }

  
}

ReactDOM.render(<App/>, document.getElementById('root'));
export default App;