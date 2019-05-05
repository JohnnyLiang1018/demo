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
class AisleComponent extends React.Component {
  
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
    <div className = "AisleComponent">
      <Banner></Banner>
      <Body></Body>
    </div>
    );
    };
  }

//Header Component



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
                            <div clasName="product-show">
                                <h4>Show:</h4>
                                <select className="nice-select">
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
                    
                    <div class="sidebar">
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


    
  



  export default AisleComponent;

