import React from 'react';
import ReactDOM from 'react-dom';
import Background from './assets/images/hero/hero-5.jpg'; //import for the banner image 
require('./assets/css/style.css');
require ('./assets/images/favicon.ico');
require('./assets/css/bootstrap.min.css');
require('./assets/css/icon-font.min.css');
require('./assets/css/plugins.css');
require('./assets/css/helper.css');
require('./assets/css/style.css');


//This is the class where the components will get called
class App extends React.Component {
  
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
  setLoginState(event){
    if(event === 'Login'){
      this.setState(state =>({
        isLogin: 'Logout'
      }));
    }
    else{
      this.setState(state =>({
        isLogin:'Login'
      }));
    } 
  }


//This part is where the render calls specific classes 
//Everthing inside the <div></div> needs to be modified according to your specific page
  render() {
    return (
    <div className = "App">
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
        <div className ="page-banner-section section" style ={banner}> 
          <div className ="container">
              <div className ="row">
                  <div className ="page-banner-content col text-left">
                      <h1><font size = "7" color = "white">Shop By Aisle</font></h1>
                      <ul className="page-breadcrumb">
                      <li><a href="index.html"><font color = "white">Home</font></a></li>
                      <li><a href="shop-left-sidebar.html"><font color = "white">Shop By Aisle</font></a></li>
                                      </ul>

                  </div>
              </div>
          </div>
        </div>
      );
    };
  }

  //A constant for the style tag within the banner component 



//Body Components (also includes side bar) 
//Change all <img></img> tags to the appropriate format 
  class Body extends React.Component {
    render () {
      return (
        
<div>
         <div className="blog-section section mt-80 mt-lg-60 mt-md-60 mt-sm-60 mt-xs-40 mb-40 mb-lg-20 mb-md-20 mb-sm-20 mb-xs-0">
              <div className="container">
                  <div className="row row-30">

                  <div className="col-md-9 col-lg-8 col-12 order-1 order-lg-2 mb-40">
                    <div className="row">

                      <div className="col-12">
                            <div className="product-show">
                                <h4>Show:</h4>
                                <select clasName="nice-select">
                                    <option>8</option>
                                    <option>12</option>
                                    <option>16</option>
                                    <option>20</option>
                                </select>
                            </div>
                            <div className="product-short">
                                <h4>Short by:</h4>
                                <select className="nice-select">
                                    <option>Name Ascending</option>
                                    <option>Name Descending</option>
                                    <option>Date Ascending</option>
                                    <option>Date Descending</option>
                                    <option>Price Ascending</option>
                                    <option>Price Descending</option>
                                </select>
                            </div>
                        </div>
                         <div className="single-blog">
                         <div className="col-xl-4 col-md-6 col-12 mb-40">
                            <div className="product-item">
                               <div className="product-inner">
                                 <div className="image">
                                   <img src= {require('./assets/images/product/product-apple.jpg')} alt=""></img>
                                     <div className="image-overlay">
                                       <div className="action-buttons">
                                          <button>add to cart</button>
                                       </div>
                                    </div>  
                                 </div>
                                    <div className="content">
                                       <div className="content-left">
                                          <h4 className="title"><a href="single-product.html">Apples</a></h4>
                                      </div>
                                    <div className="content-right">
                                      <span className="price">$25</span>
                                   </div>
                                </div>
                              </div>
                          </div> 
                          </div> 
                          <div className="col-xl-4 col-md-6 col-12 mb-40">
                          <div className="product-item">
                               <div className="product-inner">
                                 <div className="image">
                                   <img src= {require('./assets/images/product/product-bananas.jpg')} alt=""></img>
                                     <div className="image-overlay">
                                       <div className="action-buttons">
                                          <button>add to cart</button>
                                       </div>
                                    </div>  
                                 </div>
                                    <div className="content">
                                       <div className="content-left">
                                          <h4 className="title"><a href="single-product.html">Bananas</a></h4>
                                      </div>
                                    <div className="content-right">
                                      <span className="price">$09</span>
                                   </div>
                                </div>
                              </div>
                          </div>  
                          </div>  
                          <div className="col-xl-4 col-md-6 col-12 mb-40">
                            <div className="product-item">
                               <div className="product-inner">
                                 <div className="image">
                                   <img src= {require('./assets/images/product/product-grapes.jpg')} alt=""></img>
                                     <div className="image-overlay">
                                       <div className="action-buttons">
                                          <button>add to cart</button>
                                       </div>
                                    </div>  
                                 </div>
                                    <div className="content">
                                       <div className="content-left">
                                          <h4 className="title"><a href="single-product.html">Grapes</a></h4>
                                      </div>
                                    <div className="content-right">
                                      <span className="price">$18</span>
                                   </div>
                                </div>
                              </div>
                          </div> 
                          </div> 
                          <div className="col-xl-4 col-md-6 col-12 mb-40">
                            <div className="product-item">
                               <div className="product-inner">
                                 <div className="image">
                                   <img src= {require('./assets/images/product/product-grapefruit.jpg')} alt=""></img>
                                     <div className="image-overlay">
                                       <div className="action-buttons">
                                          <button>add to cart</button>
                                       </div>
                                    </div>  
                                 </div>
                                    <div className="content">
                                       <div className="content-left">
                                          <h4 className="title"><a href="single-product.html">Grapefruit</a></h4>
                                      </div>
                                    <div className="content-right">
                                      <span className="price">$12</span>
                                   </div>
                                </div>
                              </div>
                          </div> 
                          </div> 
                          <div className="col-xl-4 col-md-6 col-12 mb-40">
                            <div className="product-item">
                               <div className="product-inner">
                                 <div className="image">
                                   <img src= {require('./assets/images/product/product-orange.jpg')} alt=""></img>
                                     <div className="image-overlay">
                                       <div className="action-buttons">
                                          <button>add to cart</button>
                                       </div>
                                    </div>  
                                 </div>
                                    <div className="content">
                                       <div className="content-left">
                                          <h4 className="title"><a href="single-product.html">Orange</a></h4>
                                      </div>
                                    <div className="content-right">
                                      <span className="price">$12</span>
                                   </div>
                                </div>
                              </div>
                          </div> 
                          </div> 
                  
                          <div className="col-xl-4 col-md-6 col-12 mb-40">
                            <div className="product-item">
                               <div className="product-inner">
                                 <div className="image">
                                   <img src= {require('./assets/images/product/product-peanutbutter.jpg')} alt=""></img>
                                     <div className="image-overlay">
                                       <div className="action-buttons">
                                          <button>add to cart</button>
                                       </div>
                                    </div>  
                                 </div>
                                    <div className="content">
                                       <div className="content-left">
                                          <h4 className="title"><a href="single-product.html">Peanut Butter</a></h4>
                                      </div>
                                    <div className="content-right">
                                      <span className="price">$12</span>
                                   </div>
                                </div>
                              </div>
                          </div> 
                          </div> 
                          <div className="col-xl-4 col-md-6 col-12 mb-40">
                            <div className="product-item">
                               <div className="product-inner">
                                 <div className="image">
                                   <img src= {require('./assets/images/product/product-steak.jpg')} alt=""></img>
                                     <div className="image-overlay">
                                       <div className="action-buttons">
                                          <button>add to cart</button>
                                       </div>
                                    </div>  
                                 </div>
                                    <div className="content">
                                       <div className="content-left">
                                          <h4 className="title"><a href="single-product.html">Steak</a></h4>
                                      </div>
                                    <div className="content-right">
                                      <span className="price">$29</span>
                                   </div>
                                </div>
                              </div>
                          </div> 
                          </div> 
                          <div className="col-xl-4 col-md-6 col-12 mb-40">
                            <div className="product-item">
                               <div className="product-inner">
                                 <div className="image">
                                   <img src= {require('./assets/images/product/product-watermelon.jpg')} alt=""></img>
                                     <div className="image-overlay">
                                       <div className="action-buttons">
                                          <button>add to cart</button>
                                       </div>
                                    </div>  
                                 </div>
                                    <div className="content">
                                       <div className="content-left">
                                          <h4 className="title"><a href="single-product.html">Watermelon</a></h4>
                                      </div>
                                    <div className="content-right">
                                      <span className="price">$08</span>
                                   </div>
                                </div>
                              </div>
                          </div> 
                          </div> 
                          <div className="col-xl-4 col-md-6 col-12 mb-40">
                            <div className="product-item">
                               <div className="product-inner">
                                 <div className="image">
                                   <img src= {require('./assets/images/product/product-zucchini.jpg')} alt=""></img>
                                     <div className="image-overlay">
                                       <div className="action-buttons">
                                          <button>add to cart</button>
                                       </div>
                                    </div>  
                                 </div>
                                    <div className="content">
                                       <div className="content-left">
                                          <h4 className="title"><a href="single-product.html">Zucchini</a></h4>
                                      </div>
                                    <div className="content-right">
                                      <span className="price">$19 <span className="old">$35</span></span>
                                   </div>
                                </div>
                              </div>
                          </div> 
                          </div> 
                         
                       </div>

                       <div className="col-12">
                            <ul className="page-pagination">
                                <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                      </div>
                       
                <div className="comment-wrap mt-40"></div>
                </div>

                <div className="col-xl-3 col-lg-4 col-12 order-2 order-lg-1 mb-40">
                
                    <div className="sidebar">
                    
                    <h4 className="sidebar-title">Aisle</h4>
                        

                        <ul className="sidebar-list">
                        <li><a href="#">Baby Care <span class="num">18</span></a></li>
                            <li><a href="#">Beverages <span class="num">09</span></a></li>
                            <li><a href="#">Bread & Bakery <span class="num">05</span></a></li>
                            <li><a href="#">Breakfast & Cereal <span class="num">03</span></a></li>
                            <li><a href="#">Canned Goods <span class="num">15</span></a></li>
                            <li><a href="#">Condiments, Spices & Bake <span class="num">07</span></a></li>
                            <li><a href="#">Cookies, Snacks & Candy <span class="num">02</span></a></li>
                            <li><a href="#">Dairy, Eggs, & Cheese <span class="num">03</span></a></li>
                            <li><a href="#">Deli <span class="num">15</span></a></li>
                            <li><a href="#">Flowers <span class="num">07</span></a></li>
                            <li><a href="#">Frozen Foods <span class="num">02</span></a></li>
                            <li><a href="#">Fruits & Vegetables <span class="num">03</span></a></li>
                            <li><a href="#">Grains, Pastas & Sides <span class="num">15</span></a></li>
                            <li><a href="#">International Cuisine <span class="num">07</span></a></li>
                            <li><a href="#">Meal Kits <span class="num">02</span></a></li>
                            <li><a href="#">Meats & Seafood <span class="num">02</span></a></li>
                            <li><a href="#">Paper, Cleaning & House <span class="num">03</span></a></li>
                            <li><a href="#">Personal Care & Health <span class="num">15</span></a></li>
                            <li><a href="#">Pet Care <span class="num">07</span></a></li>
                            <li><a href="#">Tobacco <span class="num">02</span></a></li>
                            <li><a href="#">Wine, Beer & Spirits <span class="num">02</span></a></li>
                        </ul>
                    </div>
                    
                    <h4 className="sidebar-title">Popular Products</h4>
                        <div className="sidebar-product-wrap">
                        <div className="sidebar-product">
                                <a href="single-product.html" className="image"><img src= {require('./assets/images/product/product-goatmilk.jpg')} alt=""></img></a>
                                <div className="content">
                                    <a href="single-product.html" className="title">Goat Milk</a>
                                    <span className="price">$25 <span className="old">$38</span></span>
                                
                                </div>
                          </div>
                          <div className="sidebar-product">
                                <a href="single-product.html" className="image"><img src= {require('./assets/images/product/product-chocolatesoymilk.jpg')} alt=""></img></a>
                                <div className="content">
                                    <a href="single-product.html" className="title">Silk Chocolate Soymilk</a>
                                    <span className="price">$25 <span className="old">$21</span></span>
                                
                                </div>
                          </div>
                          <div className="sidebar-product">
                                <a href="single-product.html" className="image"><img src= {require('./assets/images/product/product-cabbage.jpg')} alt=""></img></a>
                                <div className="content">
                                    <a href="single-product.html" className="title">Cabbage</a>
                                    <span className="price">$25 <span className="old">$29</span></span>
                                
                                </div>
                          </div>
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
                        <img src= {require('./assets/images/brands/tacos.jpg')} alt=""></img>
                   
                        <img src= {require('./assets/images/brands/burntalmondcake.jpg')} alt=""></img>

                        <img src= {require('./assets/images/brands/waffles.jpg')} alt=""></img>

                        <img src= {require('./assets/images/brands/sushi.jpg')} alt=""></img>

                        <img src= {require('./assets/images/brands/pastasalad.jpg')} alt=""></img>
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



  export default App;
  ReactDOM.render(<App/>, document.getElementById('root'));
