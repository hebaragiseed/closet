import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrivateMakeCloset from './presenter';

class Container extends Component{
  state = {
    fileTop: '',
    fitlePants: '',
  };
  static propTypes = {
    saveMakeCloset: PropTypes.func.isRequired
  }
  render() {
    const { fileTop, filePants } = this.state;
    return (
      <PrivateMakeCloset
        fileTopValue={fileTop}
        filePantsValue={filePants}
        handleImageChange={this._handleImageChange}
        handleSubmit={this._handleSubmit}
        {...this.props}
      />
    );
  }
  _handleImageChange = event => {
    const { target: {value, name } } = event;
    console.log(value, name);
    this.setState({
      [name]: value
    })
  }
  _handleSubmit = event => {
    const { fileTop, filePants } = this.state;
    const { saveMakeCloset } = this.props;
    event.preventDefault();
    if (fileTop && filePants) {
      saveMakeCloset(fileTop, filePants);
      this.setState({
        fileTop: '',
        filePants: ''
      });   
    } else if (fileTop) {
      return alert('pants 사진도 넣어주세요');
    } else if (filePants) {
      return alert('top사진도 넣어주세요');
    } else {
      return alert('사진을 모두 넣어주세요');
    } 
  }
};

export default Container;