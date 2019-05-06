import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import{ BrowserRouter as Router, Route, Link} from "react-router-dom"
import FormComponent from './components/FormComponent/FormComponet'
import Websocket from 'react-websocket'
import AisleComponent from './components/Aisle with Headerfooter'
import BreakfastRecipe from './components/breakfast-recipe-component'
import Homepage from './components/homepage'
import Checkout from './components/CheckoutComponent'
import Cart from './components/CartComponent'
import Deal from './components/New_deal'
import DinnerRecipe from './components/dinner-recipe-component'
import History from './components/History'
import LunchRecipe from './components/lunch-recipe-component'
import RecipeList from './components/recipe-list-component'
import UserCheckout from './components/RegisteredUserOrGuestCheckoutComponent'
import LoginPage from './components/LoginPage'


class App extends Component {
  

  constructor(props){
    super(props);

  // Initialize State
    this.state = {
      isLogin: 'login',
      current_page:'homepage',
      ws: new WebSocket('ws://localhost:8082'),
      message:''
    }
    this.updateState = this.updateState.bind(this)
  }

  // Update State
  updateState(event){
    if(event === 'login'){
      this.setState(state =>({
        isLogin: 'logout'
      }));
    }
    
      this.setState(state =>({
        current_page: event
      }));
  }



  render() {
    if(this.state.current_page === 'homepage'){
      return (
        <div>
          <Homepage state = {this.state} handler = {this.updateState}/>
        </div>
    );
    }
    else if(this.state.current_page === 'register'){
      return(
        <div>
          <FormComponent handler = {this.updateState}/>
        </div>
      );
     }
    else if(this.state.current_page === 'checkout'){
      return(
        <div>
          <Checkout handler ={this.updateState} />
        </div>

      );
    }
    else if(this.state.current_page === 'deal'){
      return(
        <div>
          <Deal handler = {this.updateState}/>
        </div>
      );
    }
    else if(this.state.current_page === 'history'){
      return(
        <div>
          <History handler = {this.updateState} />
        </div>
      );
    }
    else if(this.state.current_page === 'aisle'){
      return(
        <div>
          <AisleComponent handler = {this.updateState} />
        </div>
      );
    }
    else if(this.state.current_page === 'cart'){
      return(
        <div>
          <Cart handler = {this.updateState} />
        </div>
      );
    }
    else if(this.state.current_page === 'breakfast'){
      return(
        <div>
          <BreakfastRecipe handler = {this.updateState}/>
        </div>
      )
    }
    else if(this.state.current_page === 'lunch'){
      return(
        <div>
          <LunchRecipe handler = {this.updateState}/>
        </div>
      );
    }
    else if(this.state.current_page === 'dinner'){
      return(
        <div>
          <DinnerRecipe handler = {this.updateState}/>
        </div>
      );
    }
    else if(this.state.current_page === 'userCheckout'){
      return(
        <div>
          <UserCheckout handler = {this.updateState}/>
        </div>
      )
    }
    else if(this.state.current_page === 'recipeList'){
      return(
        <div>
          <RecipeList handler = {this.updateState} />
        </div>
      )
    }
    else if(this.state.current_page === 'login' && this.state.isLogin === 'logout'){
      return (
        <div>
          <LoginPage handler = {this.updateState} />
        </div>
      )
    }
  }
}


export default App;
