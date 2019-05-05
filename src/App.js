import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import './css/individual_style.css'
import{ BrowserRouter as Router, Route, Link} from "react-router-dom"
import FormComponent from './components/FormComponent/FormComponet'
import Websocket from 'react-websocket'
require('./vendors/css/ionicons.min.css')
require('./vendors/css/normalize.css')
require('./vendors/css/grid.css')
require('./resources/css/style.css')
require('./resources/css/queries.css')
require('./components/FormComponent/form.css')



class App extends Component {
  

  constructor(props){
    super(props);

  // Initialize State
    this.state = {
      isLogin: 'Login',
      Header: 'index',
      Section_one:'index',
      Section_two:'index',
      Section_three:'index',
      Footer:'index',
      ws: new WebSocket('ws://localhost:8082'),
      message:''
    }
    this.updateState = this.updateState.bind(this)
  }

  // Update State
  updateState(event){
    if(event === 'Login'){
      this.setState(state =>({
        isLogin: 'Logout'
      }));
    }
    else if(event === 'LoginSuccess'){
      this.setState(state =>({
        isLogin: 'Login'
      }));
    }
    else{
      this.setState(state =>({
        isLogin:'Login'
      }));
    } 
  }



  render() {
    if(this.state.isLogin === 'Logout'){
      return (
        <div>
          <FormComponent handler = {this.updateState}/>
        </div>
    );
    }
    else if(this.state.isLogin === 'Login'){
      return(
        <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>ThunderBolt</title>
        </Head>
        <body>
        
          <div className="App">
          {/* Passing props to child component */}
            <Header isLogin = {this.state.isLogin} handler = {this.updateState}> </Header>
            <Section_one></Section_one>
            <Section_two></Section_two>
            <Section_three />
            <Footer_one />
          </div>

        </body>
 
        </div>
      );
     }
  }
    // else{
    //  return(
    //    <body>
    //      <div className = "App">
    //        <FormComponent />
    //        <button onClick = {this.setwelcomeMessage}>changeHeader</button>
    //      </div>
    //    </body>



    //  );
    // }
  }

class Head extends React.Component {
  render(){
    return ReactDOM.createPortal(this.props.children,document.head);
  }
}


class Header extends React.Component {
  componentDidMount(){
    console.log('Component DID MOUNT!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
 }
 componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
 }
 componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
 }

  render() {
    return (
      <header>
        <nav>
          <div className="row">
            <img src={require('./resources/img/black-logo.png')} alt="logo" class="logo-black"></img>
            <img src={require('./resources/img/logo.png')} alt="logo" class="logo"></img>
           
            
            <ul className ="main-nav">
              <li><a href="#">My Purchases</a></li>
              <li><a href="#">Aisles</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Receip</a></li>

            {/* Update state and use props value */}
              <li><a href="#" onClick={(param) => this.props.handler('Login')}>{this.props.isLogin}</a></li>
              <li><a href="cart.html"><img src={require('./resources/img/cart-white.png')} alt="Cart"></img><span>02($250)</span></a></li>
            </ul>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>Market fresh.</h1>
          <h1>Money smart.</h1>
          <a className="btn btn-full" href="#">Shop Now</a>
          <a className="btn btn-ghost" href="#">About Us</a>
        </div>
      </header>
    );
  }

}

class Section_one extends React.Component{
  render(){
      return(
        <section className="section-categories">
          <div class="row">
            <h2>Main Categories</h2>
          </div>
          <div class="row">
            <div class="col span-1-of-4">
              <h3>Baby Care</h3>
            </div>
            <div class="col span-1-of-4">
              <h3>Beverages</h3>
            </div>
            <div class="col span-1-of-4">
              <h3>Bread &amp; Bakery</h3>
            </div>
            <div class="col span-1-of-4">
              <h3>Breakfast &amp; Cereal</h3>
            </div>
          </div>
        </section>
        );
    }
  }

class Section_one_v2 extends React.Component{
  render(){
    return(
      <section id = "showcase">
      <div id = "container">
          <div id="branding">
          <h1>THUNDERBOLTS</h1>
          <nav>
              <ul>
                  <li class="current"><a href="index.html">Account</a></li>
                  <li class="current"><a href="index.html">My Order</a></li>
                  
              </ul>
          </nav>
          </div>
      </div>
      </section>
    );
  }

}


class Section_two extends React.Component{
  render(){
      return(
        <section class="section-pics">
          <ul class="pics-showcase clearfix">
            <li>
              <figure class="pic-photo">
                <img src={require('./resources/img/1.jpg')} alt="Food 1"></img>
              </figure>
            </li>
            <li>
              <figure class="pic-photo">
                <img src={require('./resources/img/2.jpg')} alt="Food 2"></img>
              </figure>
            </li>
            <li>
              <figure class="pic-photo">
                <img src={require('./resources/img/3.jpg')} alt="Food 3"></img>
              </figure>
            </li>
            <li>
              <figure class="pic-photo">
                <img src={require('./resources/img/4.jpg')} alt="Food 4"></img>
              </figure>
            </li>
          </ul>
          <ul class="pics-showcase clearfix">
            <li>
              <figure class="pic-photo">
                <img src={require('./resources/img/5.jpg')} alt="Food 5"></img>
              </figure>
            </li>
            <li>
              <figure class="pic-photo">
                <img src={require('./resources/img/6.jpg')} alt="Food 6"></img>
              </figure>
            </li>
            <li>
              <figure class="pic-photo">
                <img src={require('./resources/img/7.jpg')} alt="Food 7"></img>
              </figure>
            </li>
            <li>
              <figure class="pic-photo">
                <img src={require('./resources/img/8.jpg')} alt="Food 8"></img>
              </figure>
            </li>
          </ul>
        </section>
      );
    }
  }
class Section_three extends React.Component{
  render(){
    return(
      <section class="download-app">
        <div class="row">
          <h2>Download our app</h2>
        </div>
        <div class="row">
          <div class="col span-1-of-2 app-box">
            <img src={require("./resources/img/iphone-app.png")} alt="app on iPhone" class="app-screen js--wp-2"></img>
          </div>
          <div class="col span-1-of-2 app-box">
            <div class="works-step">
              <div>1</div>
              <p>Browse and Search Inventory</p>
            </div>
            <div class="works-step">
              <div>2</div>
              <p>In-store Navigation and Barcode Scanning</p>
            </div>
            <div class="works-step">
              <div>3</div>
              <p>Accurate and Intuitive Coupons</p>
            </div>
          </div>
          <a href="#" class="btn-app"><img src={require("./resources/img/download-app.svg")} alt="App Store Button"></img></a>
          <a href="#" class="btn-app"><img src={require("./resources/img/download-app-android.png")} alt="Play Store Button"></img></a>
    
        </div>
      
      </section>
    );
  }
}
class Footer_one extends React.Component{
  render(){
    return(
    <footer>
      <div class="row">
        <div class="col span-1-of-2">
          <ul class="footer-nav">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">iOS App</a></li>
          </ul>
        </div>
        <div class="col span-1-of-2">
          <ul class="social-links">
            <li><a href="#"><i class="ion-social-facebook"></i></a></li>
            <li><a href="#"><i class="ion-social-twitter"></i></a></li>
            <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
            <li><a href="#"><i class="ion-social-instagram"></i></a></li>
          </ul>
        </div>
      </div>

      <div class="row">
        <p>
          Copyright &copy; 2019 by ThunderBolt. All rights reserved.
        </p>
      </div>
    </footer>
    );
  }
}


export default App;
