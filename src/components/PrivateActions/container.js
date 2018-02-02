import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrivateActions from './presenter';

class Container extends Component{
  // state = {
  //   washer: true
  // }
  static propsTypes = {
    handleDeleteClothes: PropTypes.func.isRequired,
    handleWasherClick: PropTypes.func.isRequired,
  };
  render() {
    return(
      <PrivateActions 
        {...this.props}
        
      />
    );
  }
}

export default Container;