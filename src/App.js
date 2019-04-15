import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import Menu from './components/Menu/menu'
import './css/individual_style.css'
import FormComponent from './components/FormComponent/FormComponet'
require('./vendors/css/ionicons.min.css')
require('./vendors/css/normalize.css')
require('./vendors/css/grid.css')
require('./resources/css/style.css')
require('./resources/css/queries.css')
require('./resources/css/font.css')

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      welcomeMessage: 'Welcome'

      
    }
    this.setwelcomeMessage = this.setwelcomeMessage.bind(this)
  }
  setwelcomeMessage(){
    if(this.state.welcomeMessage === 'Welcome'){
      this.setState({welcomeMessage: 'Welcome Back'})
    }
    else{
      this.setState({welcomeMessage: 'Welcome'})
    }
  }

  render() {
    if(this.state.welcomeMessage === 'Welcome'){

    return (
      <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>ThunderBolt</title>
      </Head>

      <body>
        
        <div className="App">
          <Header welcomeMessage = {this.state.welcomeMessage}> </Header>
          <Section_one></Section_one>
          <Section_two></Section_two>
        </div>
      </body>
      </div>
    );
    }
    else{
      return(
        <body>
          <div className = "App">
            <FormComponent />
            <button onClick = {this.setwelcomeMessage}>changeHeader</button>
          </div>
        </body>



      );
    }
  }

}
class Head extends React.Component {
  render(){
    return ReactDOM.createPortal(this.props.children,document.head);
  }
}


class Header extends React.Component {
  componentWillMount(){
    console.log('Component WILL MOUNT!')
  }
  componentDidMount(){
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps){
    console.log('Component WILL RECEIVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
 }
 componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
 }
 componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
 }
 componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
 }

  render() {
    return (
      <div>
        <nav>
          <div class="row">
            <img src={require('./resources/img/logo.png')} alt="logo" class="logo-black"></img>
            <ul class ="main-nav">
              <li><a href="#">My Purchases</a></li>
              <li><a href="#">Aisles</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Recipes</a></li>
            </ul>
          </div>
        </nav>
        <div class="hero-text-box">
          <h1>Market fresh.</h1>
          <h1>Money smart.</h1>
          <a class="btn btn-full" href="#">Shop Now</a>
          <a class="btn btn-ghost" href="#">About Us</a>
        </div>
      </div>
    );
  }

}

class Section_one extends React.Component{
  render(){
      return(
        <section class="section-categories">
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
      <section id = "boxes">
        <div class="container">
          <div class="Items">
            <img class="image" src="resources/img/strawberry.jpg"></img>
          </div>

          <div class="itemDescription">
            <h1>California Strawberry- 5 lb</h1>
            <p> $ 7.99 </p>
            <br></br>
            <p>All California strawberries are hand-picked to ensure only the highest quality berries are harvested. Strawberry plants continually produce new fruit throughout their season. During peak season plants are harvested every three days.</p>   
            <button type = "submit" class = "addButton buttonStyle"> ADD </button> 
          </div>
        </div>
      </section>
    );
  }
}

export default App;
