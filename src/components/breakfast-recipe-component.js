import React from 'react';
import ReactDOM from 'react-dom';
import Background from './assets/images/blog/breakfast-banner.png';
require('./assets/css/style.css');
require ('./assets/images/favicon.ico');
require('./assets/css/bootstrap.min.css');
require('./assets/css/icon-font.min.css');
require('./assets/css/plugins.css');
require('./assets/css/helper.css');
require('./assets/css/style.css');


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



  render() {
    return (
    <div className = "App">
      <Header></Header>
      <Banner></Banner>
      <Body></Body>
      <Footer></Footer>
    </div>
    );
    };
  }

  class Header extends React.Component {
    render() {
      return (
        <div>
        <div className="main-wrapper">

    <div className ="header-section section">

        <div className="header-top header-top-one bg-theme-two">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">

                    <div className="col mt-10 mb-10 d-none d-md-flex">
                        <div className="header-top-left">
                            <p>Welcome to Thunderbolt MiniMart</p>
                        </div>
                    </div>

                    <div className="col mt-10 mb-10">
                        <ul className="header-lan-curr">
                        </ul>
                    </div>

                    <div className="col mt-10 mb-10">
                        <div className="header-top-right">

                            <p><a href="#">My Account</a></p>
                            <p><a href="login-register.html">Register</a><a href="login-register.html">Login</a></p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="header-bottom header-bottom-one header-sticky@">
            <div className="container-fluid">
                <div className="row menu-center align-items-center justify-content-between">

                    <div className="col mt-15 mb-15">
                        <div className="header-logo">
                            <a href="index.html">
                                <img src={require('./assets/images/black-logo.png')} alt="Jadusona"></img>
                            </a>
                        </div>
                    </div>

                    <div className="col order-2 order-lg-3">
                        <div className="header-shop-links">

                            <div className="header-search">
                                <button className="search-toggle"><img src= {require('./assets/images/icons/search.png')} alt="Search Toggle"></img><img className="toggle-close" src="assets/images/icons/close.png" alt="Search Toggle"></img></button>
                                <div className="header-search-wrap">
                                    <form action="#">
                                        <input type="text" placeholder="Type and hit enter"></input>
                                        <button><img src= {require('./assets/images/icons/search.png')} alt="Search"></img></button>
                                    </form>
                                </div>
                            </div>

                            <div className="header-wishlist">
                                <a href="wishlist.html"><img src= {require('./assets/images/icons/wishlist.png')} alt="Wishlist"></img></a>
                            </div>

                            <div className="header-mini-cart">
                                <a href="cart.html"><img src={require('./assets/images/icons/cart.png')} alt="Cart"></img></a>
                            </div>

                        </div>
                    </div>

                    <div className="col order-3 order-lg-2">
                        <div className="main-menu">
                            <nav>
                                <ul>
                                    <li><a href="index.html">HOME</a>
                                    </li>
                                    <li><a href="shop.html">AISLES</a> </li>
                                    <li><a href="#">DEALS</a></li>
                                    <li className="active"><a href="recipe-blog-page-Sam.html">RECIPES</a>
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
                    
                    <div className="mobile-menu order-12 d-block d-lg-none col"></div>

                </div>
            </div>
        </div>

    </div>
    </div>
    </div>
      );
    }
  }
const banner = {
  padding: "100px 0",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  position: "relative",
  zIndex: "1",
  backgroundImage: `url(${Background})`

} 
class Banner extends React.Component {
    render() {
      return (
        <div className ="page-banner-section section" style ={banner}>
          <div className ="container">
              <div className ="row">
                  <div className ="page-banner-content col text-center">
                      <h1><font size = "7" color = "white">French Toast</font></h1>
                  </div>
              </div>
          </div>
        </div>
      );
    };
  }


  class Body extends React.Component {
    render () {
      return (
      <div>
         <div className="blog-section section mt-80 mt-lg-60 mt-md-60 mt-sm-60 mt-xs-40 mb-40 mb-lg-20 mb-md-20 mb-sm-20 mb-xs-0">
              <div className="container">
                  <div className="row row-30">
                      <div className="col-xl-9 col-lg-8 col-12 order-1 order-lg-2 mb-40">
                         <div className="single-blog">
                             <div className="image-wrap">
                                <img src= {require('./assets/images/blog/french_toast1.png')} alt=""></img>
                             </div>
                            <div className="content">
                              <ul className="meta"></ul>
                            <div className="desc">
                                <h3><font size="5" color="black">Ingredients</font></h3>
                                <p><font size="4" color="black">Servings: Approx. 4</font><br /></p>
                                <p><font size="4" color="black"> - 1 teaspoon ground cinnamon</font><br />
                                <font size="4" color="black"> - 1/4 teaspoon ground nutmeg</font>< br/>
                                <font size="4" color="black">- 2 tablespoons sugar</font>< br/>
                                <font size="4" color="black">- 4 tablespoons butter</font>< br/>
                                <font size="4" color="black">- 4 eggs</font>< br/>
                                <font size="4" color="black">- 1/4 cup milk</font>< br/>
                                <font size="4" color="black">- 1/2 teaspoon vanilla extract</font>< br/>
                                <font size="4" color="black">- 8 slices challah, brioche, or white bread</font>< br/>
                                <font size="4" color="black">- 1/2 cup maple syrup, warmed</font>< br/></p>
                                <h3><font size="5" color="black">Directions</font></h3>< br/>
                                <font size="4" color="black">- In a small bowl, combine cinnamon, nutmeg, and sugar and set aside briefly.</font>< br/>
                                <font size="4" color="black">- In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. Dip bread in egg 
                                mixture. Fry slices until golden brown, then flip to cook the other side.</font>< br/>
                                <font size="4" color="black">- Serve!</font>< br/>                      
                            </div>
                            <div className="blog-footer row mt-45"></div>
                        </div>
                    </div>
                    <div className="comment-wrap mt-40"></div>
                </div>

                <div className="col-xl-3 col-lg-4 col-12 order-2 order-lg-1 mb-40">
                    <div className="sidebar">
                        <h4 className="sidebar-title">Recipe Menu</h4>
                        <ul className="sidebar-list">
                            <li><a href="recipe-blog-page-Sam.html">Recipe List</a></li>
                            <li><a href="breakfast-recipe.html">Breakfast</a></li>
                            <li><a href="lunch-recipe.html">Lunch</a></li>
                            <li><a href="dinner-recipe.html">Dinner</a></li>
                        </ul>
                    </div>
                   <div class="sidebar">
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>
      );
    }
  }

  class Footer extends React.Component{
    render() {
      return (
      <div class="footer-top-section section bg-theme-two-light pt-80 pt-lg-60 pt-md-60 pt-sm-60 pt-xs-40 pb-40 pb-lg-20 pb-md-20 pb-sm-20 pb-xs-0">
      <div class="container">
          <div class="row">

              <div class="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                  <h4 class="title">CONTACT US</h4>
                  <p>You address will be here<br/> Lorem Ipsum text</p>
                  <p><a href="tel:01234567890">01234 567 890</a><a href="tel:01234567891">01234 567 891</a></p>
                  <p><a href="mailto:info@example.com">info@example.com</a><a href="#">www.example.com</a></p>
              </div>
              <div class="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                  <h4 class="title">AISLES</h4>
                  <ul>
                      <li><a href="#">placeholder</a></li>
                      <li><a href="#">placeholder</a></li>
                      <li><a href="#">placeholder</a></li>
                  </ul>
              </div>


              <div class="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                  <h4 class="title">DEALS</h4>
                  <ul>
                      <li><a href="#">Best Seller</a></li>
                      <li><a href="#">Best Deals</a></li>
                      <li><a href="#">On Sale Products</a></li>
                  </ul>
              </div>

              <div class="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                  <h4 class="title">INFORMATION</h4>
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
      );
    }
  }

  export default App;
  ReactDOM.render(<App/>, document.getElementById('root'));

