import React, { Component }from 'react';
import Auth from './presenter';

class Container extends Component {
  state = {
    action: 'login'
  }
  render() {
    const { action } = this.state;
    return <Auth action={action} changeAction={this._changeAction} />;
  }
  _changeAction = () => {
    this.setState(prevState => {
      const {action} = prevState;
      if (prevState === 'login') {
        return (
          action: 'signup'
        );
      } else if (prevState === 'signup') {
        return (
          action: 'login'
        );
      };
    })
  };
}

export default Container;
