import React, { Component } from 'react';
import NewClothes from './presenter';

class Container extends Component{
  state = {
    file: '',
    imagePreviewUrl: '',
    category: ''
  };
  render() {
    const { file, imagePreviewUrl, category } = this.state;
    return (
      <NewClothes 
        fileValue={file}
        imagePreviewValue={imagePreviewUrl}
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
    event.preventDefault();
    console.log('전송')
  }
};

export default Container;