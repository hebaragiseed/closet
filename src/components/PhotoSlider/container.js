import React, { Component } from 'react';
import PhotoSlider from './presenter';

class Container extends Component {
  state = {
    itemIdx: 0,    
    resizeItemNumber: 4,
  }

  _handleWindowResize = () => {  
    const wd = window.innerWidth;
    if (wd >= 768 ) {
      this.setState({ resizeItemNumber: 4 });
    } else if (wd <= 420) {
      this.setState({ resizeItemNumber: 1 });
    } else if (wd < 768) {
      this.setState({ resizeItemNumber: 2 }); 
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', this._handleWindowResize);
  }
  componentWillMount() {
    window.removeEventListener('resize', this._handleWindowResize )
  }

  render () {
    return(      
      <PhotoSlider
      {...this.props}
        itemIdx={this.state.itemIdx}       
        nextbutton={this._handleNext}
        prevbutton={this._handlePrev}        
        window={this.state.resizeItemNumber}
      />
    );
  }

  _handleNext =() => {
  //처음 아이템의 0번 인덱스에서 부터 화면 크기에 따라 4/2/1 더함
  let nextItemidx = this.state.itemIdx + this.state.resizeItemNumber;    
    return (
      this.setState({
      itemIdx: nextItemidx     
      })
    );
  }
  _handlePrev =() => {
    //처음 아이템의 0번 인덱스에서 부터 화면 크기에 따라 4/2/1 빼기
    let prevItemIdx = this.state.itemIdx - this.state.resizeItemNumber;    
    return (
      this.setState({
        itemIdx: prevItemIdx     
      })
    );
  }
}

export default Container;