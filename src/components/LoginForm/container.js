import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './presenter';

class Container extends Component {
  state = {
    email: "",
    password: ""
  };
  static propTypes = {
    emailLogin: PropTypes.func.isRequired
  }
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
    const { email, password } = this.state;
    const { emailLogin } = this.props;
    event.preventDefault();
    emailLogin(email, password);
  };
}

export default Container;