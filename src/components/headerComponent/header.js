import React, { Component } from 'react';

class Header extends Component {
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
        <h3> {this.props.header}</h3>
      </div>
    );
  }

}

export default Header;
