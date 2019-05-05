import React, { Component } from 'react';
import Background from './assets/images/product/HistoryBack.jpg';
require('./assets/css/style.css');
require ('./assets/images/favicon.ico');
require('./assets/css/bootstrap.min.css');
require('./assets/css/icon-font.min.css');
require('./assets/css/plugins.css');
require('./assets/css/helper.css');
require('./assets/css/style.css');

export default class App extends Component {
    render() {
      return(
          <div>
              <head>
                <meta charset="utf-8" />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <title>Thunderbolts</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico" />            
                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />           
                <link rel="stylesheet" href="assets/css/icon-font.min.css" />
                <link rel="stylesheet" href="assets/css/plugins.css" />
                <link rel="stylesheet" href="assets/css/helper.css" />
                <link rel="stylesheet" href="assets/css/style.css" />
                <script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>
            </head>


            <div className="main-wrapper">
        
            <div className="header-section section">
        
                <div className="header-top header-top-one bg-theme-two">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
        
                            <div className="col mt-10 mb-10 d-none d-md-flex">
                                <div className="header-top-left">
                                    <p>Welcome to Thunderbolts</p>
                                    <p>Hotline: <a href="tel:0123456789">0123 456 789</a></p>
                                </div>
                            </div>
        
                            <div className="col mt-10 mb-10">
                                
                                <ul className="header-lan-curr">
        
                                    <li><a href="#">eng</a>
                                        <ul>
                                            <li><a href="#">english</a></li>
                                            <li><a href="#">spanish</a></li>
                                            <li><a href="#">france</a></li>
                                            <li><a href="#">russian</a></li>
                                            <li><a href="#">chinese</a></li>
                                        </ul>
                                    </li>
        
                                    <li><a href="#">$usd</a>
                                        <ul>
                                            <li><a href="#">pound</a></li>
                                            <li><a href="#">dollar</a></li>
                                            <li><a href="#">euro</a></li>
                                            <li><a href="#">yen</a></li>
                                        </ul>
                                    </li>
        
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
                </div>
        

        
            <div className="page-banner-section section" style={{backgroundImage: `url(${Background})`}} >
                <div className="container">
                    <div className="row">
                        <div className="page-banner-content col">
        
                            <h1>My Purchase History</h1>
                            <ul className="page-breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="wishlist.html">History</a></li>
                            </ul>
        
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="page-section section mt-80 mt-lg-60 mt-md-60 mt-sm-60 mt-xs-40 mb-80 mb-lg-60 mb-md-60 mb-sm-60 mb-xs-40">
                <div className="container">
        
                    <form action="#">               
                        <div className="row">
                            <div className="col-12">
                                <div className="cart-table table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="pro-thumbnail">Image</th>
                                                <th className="pro-title">Product</th>
                                                <th className="pro-price">Price</th>
                                                <th className="pro-quantity">Quantity</th>
                                                <th className="pro-subtotal">Total</th>
                                                <th className="pro-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="pro-thumbnail"><a href="#"><img src={require("./assets/images/product/CheeriosFam.png")} alt="" /></a></td>
                                                <td className="pro-title"><a href="#">Cheerios Gluten Free</a></td>
                                                <td className="pro-price"><span className="amount">$4.3</span></td>
                                                <td className="pro-quantity"><div className="pro-qty"><input type="text" value="1" /></div></td>
                                                <td className="pro-add-cart"><a href="#">add to cart</a></td>
                                                <td className="pro-remove"><a href="#">×</a></td>
                                            </tr>
                                            <tr>
                                                <td className="pro-thumbnail"><a href="#"><img src={require("./assets/images/product/EGGPic.jpg")} alt="" /></a></td>
                                                <td className="pro-title"><a href="#">A Large Brown Eggs</a></td>
                                                <td className="pro-price"><span className="amount">$3.5</span></td>
                                                <td className="pro-quantity"><div className="pro-qty"><input type="text" value="1" /></div></td>
                                                <td className="pro-add-cart"><a href="#">add to cart</a></td>
                                                <td className="pro-remove"><a href="#">×</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </form>
        
                </div>
            </div>
        
            
            <div className="brand-section section mb-80 mb-lg-60 mb-md-60 mb-sm-60 mb-xs-40">
                <div className="container-fluid">
                    <div className="row">
                        <div className="brand-slider">
                            <img src={require("./assets/images/product/Product Image.jpg")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        
            
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
                            <h4 className="title">PRODUCTS</h4>
                            <ul>
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">Best Seller</a></li>
                                <li><a href="#">Trendy Items</a></li>
                                <li><a href="#">Best Deals</a></li>
                                <li><a href="#">On Sale Products</a></li>
                                <li><a href="#">Featured Products</a></li>
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
        
                        <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
                            <h4 className="title">NEWSLETTER</h4>
                            <p>Subscribe our newsletter and get all update of our product</p>
        
                            <form id="mc-form" className="mc-form footer-subscribe-form" novalidate="true">
                                <input id="mc-email" autocomplete="off" placeholder="Enter your email here" name="EMAIL" type="email" />
                                <button id="mc-submit"><i className="fa fa-paper-plane-o"></i></button>
                            </form>
                            <div className="mailchimp-alerts">
                                <div className="mailchimp-submitting"></div>
                                <div className="mailchimp-success"></div>
                                <div className="mailchimp-error"></div>
                            </div>
        
                            <h5>FOLLOW US</h5> 
                            <p className="footer-social"><a href="#">Facebook</a> - <a href="#">Twitter</a> - <a href="#">Google+</a></p>
        
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
        
        
        
        
        <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
        
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/plugins.js"></script>
        <script src="assets/js/ajax-mail.js"></script>
        <script src="assets/js/main.js"></script>
        </div>
        </div>

      );
    }
}
