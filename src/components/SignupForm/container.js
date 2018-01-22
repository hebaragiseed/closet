import React, { Component } from 'react';
import SignupForm from './presenter';

class Container extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  render() {
    const { name, email, password } = this.state;
    return(
      <SignupForm 
        nameValue={name}
        emailValue={email}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />        
    );
  }
  _handleInputChange = event => {
    const { target: { name, value} } = event;
    console.log(value)
    this.setState({
      [name]: value 
    });
  };
  _handleSubmit = event => {
    event.preventDefault();
  };
}

export default Container;