import React, { Component } from 'react';
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import Menu from './components/Menu/menu'
import './css/individual_style.css'
import FormComponent from './components/FormComponent/FormComponet'

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
      <body>
        
        <div className="App">
          <Header welcomeMessage = {this.state.welcomeMessage}> </Header>
          
          <Section_one />

          <Section_two />

          <Section_three />

          <Footer />
          <button onClick = {this.setwelcomeMessage}>changeHeader</button>
        </div>
      </body>
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
        <div class="container">
            <div id="branding">
             
            </div>
            <nav>
                <ul>
                    <li class="current"> <a href="index.html">{this.props.welcomeMessage}</a></li>
                    
                </ul>
            </nav>
        
        </div>
      </div>
    );
  }

}

class Section_one extends React.Component{
  render(){
      return(
        <section id = "showcase">
        <div id = "container">
            <div id="branding">
            <h1>THUNDERBOLTS</h1>
            <nav>
                <ul>
                    <li class="current"><a href="index.html">My Purchases</a></li>
                    <li class="current"><a href="index.html">Aisles</a></li>
                    <li class="current"><a href="index.html">Deals</a></li>
                    <li class="current"><a href="index.html">Reciepes</a></li>
                    
                </ul>
            </nav>
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
        <section id = "search">
          <div class="container">
            <nav>

              <form>
                <input type="text" placeholder="Search Products"></input>
                <button type="submit" class="addButton buttonStyle">Enter</button>

              </form>

              <div>
                <a href="index.html"><i class="fa fa-angle-double-left"> Back </i></a>

              </div>

            </nav>
          </div>
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
