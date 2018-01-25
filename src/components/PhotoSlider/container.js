import React, { Component } from 'react';
import PhotoSlider from './presenter';

class Container extends Component {
  state = {
    index0: 0,
    index1: 1,
    index2: 2,
    index3: 3,
  }
  render () {
  
    return(
      
      <PhotoSlider
      {...this.props}
        index0={this.state.index0}
        index1={this.state.index1}
        index2={this.state.index2}
        index3={this.state.index3}
        button={this._handleNext}
      />
    );
  }
  _handleNext =() => {
    let slide0 = this.state.index0 + 4
    let slide1 = this.state.index1 + 4
    let slide2 = this.state.index2 + 4
    let slide3 = this.state.index3 + 4
    return (
      this.setState({
        index0: slide0,
        index1: slide1,
        index2: slide2,
        index3: slide3,
      })
    );

  }
}

export default Container;