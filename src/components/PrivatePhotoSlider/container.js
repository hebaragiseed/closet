import React, { Component } from 'react';
import PrivatePhotoSlider from './presenter';

class Container extends Component {
  state = {
    itemIdx: 0,    
    resizeItemNumber: 4,
  }

  _handleWindowResize = () => {  
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768 ) {
      this.setState({ resizeItemNumber: 4 });
    } else if (windowWidth < 320) {
      this.setState({ resizeItemNumber: 1 });
    } else if (windowWidth < 600) {
      this.setState({ resizeItemNumber: 2 }); 
    } else if (windowWidth < 768) {
      this.setState({ resizeItemNumber: 3 }); 
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', this._handleWindowResize);
  }
  componentWillMount() {
    window.removeEventListener('resize', this._handleWindowResize )
  }
  
  render () {
    //console.log(this.props.closetItem)
    //console.log("화면 크기에 따라 보이는 이미지수 ",this.state.resizeItemNumber)
    return(      
      <PrivatePhotoSlider
        item = {this.props.closetItem}
        itemIdx={this.state.itemIdx}       
        nextBtn={this._handleNext}
        prevBtn={this._handlePrev}
      />
    );
  }

  _handleNext =() => {
  //처음 아이템의 0번 인덱스에서 부터 화면 크기에 따라 4/2/1 더함
  let nextItemidx = this.state.itemIdx + this.state.resizeItemNumber; 
  let length = this.props.closetItem.length + this.state.resizeItemNumber; 
  //console.log(this.props.closetItem.length,this.state.resizeItemNumber,'privitePhotoSlider')
    if (nextItemidx <  length) {
      return (
        this.setState({
        itemIdx: nextItemidx     
        })    
      )
    } else {
      return (
        this.setState({
        itemIdx: 0     
        })    
      )
    }
}
  _handlePrev =() => {
    //처음 아이템의 0번 인덱스에서 부터 화면 크기에 따라 4/2/1 빼기
    let prevItemIdx = this.state.itemIdx - this.state.resizeItemNumber;    
    if (prevItemIdx > 0) {
      return (
        this.setState({
        itemIdx: prevItemIdx     
        })    
      )
    } else {
      return (
        this.setState({
        itemIdx: 0     
        })    
      )
    }
  }
}

export default Container;