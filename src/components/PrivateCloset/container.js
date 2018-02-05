import React, { Component } from 'react';
import PrivateCloset from './presenter';

class Container extends Component{
  state = {
    makeClosetSeeing: false
  };
  
  render (){
    return (
      <PrivateCloset 
        {...this.props}
        makeClosetSeeing={this.state.makeClosetSeeing}
        makeClosetOpen= {this._makeClosetOpen}
        makeClosetClose={this._makeClosetClose}
       />
    );
  };
  
  _makeClosetOpen = () => {
    this.setState({
      makeClosetSeeing: true
    });
  };
  _makeClosetClose = () => {
    this.setState({
      makeClosetSeeing: false
    })
  }
};

export default Container;