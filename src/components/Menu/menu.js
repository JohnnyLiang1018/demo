import React, { Component } from 'react';



class Menu extends Component {
    state = {
        
    }
    
    edit(){
        this.setState(
            {
                text: this.state.text,
                editing: true
            }
        )
    }

    render() {
        return (
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#aisle" onClick={this.edit}>Aisle</a>
                <a href="#saving">Online savings</a>
                <a href="#history">Shop by history</a>
                <a href="#cart">Shopping cart</a>
            </div>
        );
    }

    
}

export default Menu;
