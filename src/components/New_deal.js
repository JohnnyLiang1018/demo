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

class New_deal extends React.Component {
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
        <div className = "New_deals">
          <Banner></Banner>
          <Body></Body>
        </div>
        );
        };
      }

      //Banner Component 
class Banner extends React.Component {
    render() {
      return (
        <div className ="page-banner-section section" style ={banner}> 
          <div className ="container">
              <div className ="row">
                  <div className ="page-banner-content col text-left">
                      <h1><font size = "7" color = "white">Oure Deals This Week</font></h1>
                      
                        <p><font color ="red"> Check Out This Weeks Savings On Our Popular Items </font></p>
                      <ul className="page-breadcrumb">
                      <li><a href="index.html"><font color = "white">Home</font></a></li>
                      {/*<li><a href="shop-left-sidebar.html"><font color = "white">Shop By Aisle</font></a></li>*/}
                                      </ul>

                  </div>
              </div>
          </div>
        </div>
      );
    };
  }
  const banner = {
    padding: "100px 0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    position: "relative",
    zIndex: "1",
    backgroundImage: `url(${Background})`
  
  } 
  
      
  class Body extends React.Component {
    render () {
      return (
        <div class="product-section section mt-80 mt-lg-60 mt-md-60 mt-sm-60 mt-xs-40 mb-40 mb-lg-20 mb-md-20 mb-sm-20 mb-xs-0">
        <div class="container">

        <div class="row">
            <div class="section-title text-center col mb-30">
             {/*   <h1>SHOP BY DEALS</h1>
                <p>Check Out This Weeks Savings On Our Popular Items </p>*/}
            </div>
        </div>

        <div class="row"></div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">

            <div class="product-item">
                <div class="product-inner">

                <div class="image">
                <img src={require('./assets/images/product/product-apple.jpg')} alt=""></img>
                
                <div class="image-overlay">
                    <div class="action-buttons">
                    {/* We are not buying product from the Deal page, after customer see the deal list, will go back to home and buy 
                    regulary with Aisle*/}
                  {/*  <button><a href="dummy add to cart">add to cart</a></button>*/}
                    </div>
                </div> 

                </div>

            <div class="content">

                <div class="content-left">

                    <h4 class="title"><a href="single-product.html">Apples</a></h4>

                </div>

            <div class="content-right">
                <span class="price">
                
                        <s><font color = "red">$2.50
                        </font></s>-$1.00
                    
                </span>
            </div>

            </div>

            </div>
        </div>

        </div>{/*class="col-xl-3 col-lg-4 is End */}
        <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">

<div class="product-item">
<div class="product-inner">

    <div class="image">
     <img src={require('./assets/images/product/product-grapes.jpg')} alt=""></img>
        <div class="image-overlay">
            <div class="action-buttons">
               {/* <button><a href="dummy add to cart"> add to cart</a></button>*/}
            </div>
        </div>

    </div>

    <div class="content">

        <div class="content-left">
        
            <h4 class="title"><a href="single-product.html">Grapes</a></h4>

        </div>

        <div class="content-right">
            <span class="price"><font color = "red">$8.25</font>-$6.00</span>
        </div>

    </div>

</div>
</div>

</div>{/*This end class="col-xl-3  */}
<div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">

                <div class="product-item">
                    <div class="product-inner">

                        <div class="image">
                        
                        <img src={require('./assets/images/product/product-peanutbutter.jpg')} alt=""></img>
                    
                            <div class="image-overlay">
                                <div class="action-buttons">
                              {/*  <button><a href="dummy add to cart">add to cart</a></button>*/}
                                </div>
                            </div>

                        </div>

                        <div class="content">

                            <div class="content-left">

                                <h4 class="title"><a href="single-product.html">Peanut Butter</a></h4>



                            </div>

                            <div class="content-right">
                                <span class="price"><font color = "red">$5.50</font>-$4.00</span>
                            </div>

                        </div>

                    </div>
                </div>

            </div>{/*This end*/ }
            <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">

<div class="product-item">
<div class="product-inner">

    <div class="image">
    <img src={require('./assets/images/product/product-chocolatesoymilk.jpg')} alt=""></img>
        <div class="image-overlay">
            <div class="action-buttons">
          {/*  <button><a href="dummy add to cart">add to cart</a></button>*/}
            </div>
        </div>

    </div>

    <div class="content">

        <div class="content-left">

            <h4 class="title"><a href="single-product.html"> Chocolate Soy Milk</a></h4>

        </div>

        <div class="content-right">
            <span class="price"><font color = "red">$6.10</font>-$5.00</span>
        </div>

    </div>

</div>
</div>

</div>



        
        
        
        
        
        </div>   {/* This end  class="container"*/}

 {/* This end  class="product-section section mt-80 mt-lg-6*/}   
 </div> 
    );
}


}
export default New_deal;

