import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './presenter';

class Container extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  static propTypes = {
    googleLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired,
  }
  render() {
    const { name, email, password } = this.state;
    return(
      <SignupForm 
        nameValue={name}
        emailValue={email}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleGoogleLogin={this._handleGoogleLogin}
      />        
    );
  }
  _handleInputChange = event => {
    const { target: { name, value} } = event;
    this.setState({
      [name]: value 
    });
  };
  _handleSubmit = event => {
    const { name, email, password } = this.state;
    const { createAccount } = this.props
    event.preventDefault();
    createAccount(name, email, password);
  };
  _handleGoogleLogin = ()=> {
    const { googleLogin } = this.props;
    googleLogin();
  };
}

export default Container;