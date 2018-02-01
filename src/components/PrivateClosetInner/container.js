import React, { Component } from 'react';
import PrivateClosetInner from './presenter';

class Container extends Component {
  state = {
    seeingNewClothes: false
  };

  render() {
    return(
      <PrivateClosetInner {...this.props}
        seeingNewClothes={this.state.seeingNewClothes}
        openNewClothes={this._openNewClothes}
        closeNewClothes={this._closeNewClothes} />
    );
  }

  _openNewClothes = () => {
    this.setState({
      seeingNewClothes: true
    });
  };
  _closeNewClothes = () => {
    this.setState({
      seeingNewClothes: false
    });
  };
} 


export default Container;