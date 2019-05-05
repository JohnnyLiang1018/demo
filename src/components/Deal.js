import React, { Component } from 'react';
require('./assets/css/bootstrap.min.css')
require('./assets/css/icon-font.min.css')
require('./assets/css/plugins.css')
require('./assets/css/helper.css')
require('./assets/css/style.css')







class Deal extends Component {
    

    render() {
        return (
            
        <div class="product-section section mt-80 mt-lg-60 mt-md-60 mt-sm-60 mt-xs-40 mb-40 mb-lg-20 mb-md-20 mb-sm-20 mb-xs-0">
            <div class="container">

            <div class="row">
                <div class="section-title text-center col mb-30">
                    <h1>SHOP BY DEALS</h1>
                    <p>Check Out This Weeks Savings On Our Popular Items </p>
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
                        
                        <button><a href="dummy add to cart">add to cart</a></button>
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
                    <button><a href="dummy add to cart"> add to cart</a></button>
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
                                    <button><a href="dummy add to cart">add to cart</a></button>
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
                <button><a href="dummy add to cart">add to cart</a></button>
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

export default Deal;
