import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrivateActions from './presenter';

class Container extends Component{
  static propsTypes = {
    handleDeleteClothes: PropTypes.func.isRequired,
    handleWasherClick: PropTypes.func.isRequired,
  };
  render() {
    return(
      <PrivateActions {...this.props} />
    );
  }
}

export default Container;