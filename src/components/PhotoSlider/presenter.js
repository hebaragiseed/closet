import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

const PhotoSlider = props => {
  console.log(props)
  const {top} = props.closet;
  const {itemIdx} = props;
  return (
    <div className={styles.photoSlider}>      
      <div className={styles.photoBox}>
        <div className={`${styles.itemBox} ${styles.itemBox1}`}>
          <img src={top[itemIdx] || require('images/default.jpeg') } alt="" />

        </div>
        <div className={`${styles.itemBox} ${styles.itemBox2}`}>
          <img src={top[itemIdx+1] ||require('images/default.jpeg')} alt="" />
        </div>
        <div className={`${styles.itemBox} ${styles.itemBox3}`}>
          <img src={top[itemIdx+2] ||require('images/default.jpeg')} alt="" />
        </div>
        <div className={`${styles.itemBox} ${styles.itemBox4}`}>
          <img src={top[itemIdx+3] ||require('images/default.jpeg')} alt="" />
        </div>  
        <button 
          className={styles.nextBtn}
          onClick={props.nextBtn}
        >
          <Ionicon icon="md-arrow-dropright" fontSize="30px" color="black" />
          </button>
        <button 
          className={styles.prevBtn}
          onClick={props.prevBtn}
        >
          <Ionicon icon="md-arrow-dropleft" fontSize="30px" color="black" />
        </button>
      </div>
      <span>width:{props.window}</span>   
    </div>
  );
}
export default PhotoSlider;