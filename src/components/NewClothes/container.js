import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewClothes from './presenter';

class Container extends Component{
  state = {
    file: '',
    category: ''
  };
  static propTypes = {
    saveNewClothes: PropTypes.func.isRequired
  }
  render() {
    const { file, category } = this.state;
    return (
      <NewClothes 
        fileValue={file}
        categoryValue={category}
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
    const { file, category } = this.state;
    const { saveNewClothes } = this.props;
    event.preventDefault();
    if (file && category) {
      saveNewClothes(file, category);
      this.setState({
        file: '',
        category: ''
      });   
    } else if (file) {
      return alert('종류를 선택해주세요');
    } else if (category) {
      return alert('사진을 선택해주세요');
    } else {
      return alert('사진과 종류를 선택해주세요');
    } 
  }
};

export default Container;