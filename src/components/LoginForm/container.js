import React, { Component } from 'react';
import LoginForm from './presenter';

class Container extends Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    const { email, password } = this.state;
    return (
      <LoginForm 
        emailValue={email}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        />
    );
  }
  _handleInputChange = event => {
    const { target: { value, name } } = event;
      this.setState({
        [name]: value
      });
  };
  _handleSubmit = event => {
    event.preventDefault()
  };
}

export default Container;