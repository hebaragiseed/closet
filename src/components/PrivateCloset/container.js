import React, { Component } from 'react';
import PrivateCloset from './presenter';

class Container extends Component{
  // static prp
  render (){
    return (
      <PrivateCloset 
        {...this.props}
        buttonNewCloset={this._buttonNewCloset}

       />
    );
  };
  _buttonNewCloset = () => {
    const {uid, name, handleNewCloset} = this.props;
    handleNewCloset(uid,name);
  }
};

export default Container;