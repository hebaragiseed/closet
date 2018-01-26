import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

const PhotoSlider = props => {
  console.log(props)
  // const top = props.closet;
  const {itemIdx} = props;
  return (
    <div className={styles.photoSlider}>      
      <div className={styles.photoBox}>
        <div>
          <img src={props.closet.top[itemIdx]} alt="" />
        </div>
        <div>
          <img src={props.closet.top[itemIdx+1]} alt="" />
        </div>
        <div>
          <img src={props.closet.top[itemIdx+2]} alt="" />
        </div>
        <div>
          <img src={props.closet.top[itemIdx+3]} alt="" />
        </div>  
      </div>
      <button 
        className={styles.nextBtn}
        onClick={props.nextbutton}
      >
        <Ionicon icon="md-arrow-dropright" fontSize="30px" color="black" />
       </button>
       <button 
        className={styles.nextBtn}
        onClick={props.prevButton}
      >
        <Ionicon icon="md-arrow-dropleft" fontSize="30px" color="black" />
       </button>
      <span>width:{props.window}</span>   
    </div>
  );
}
export default PhotoSlider;