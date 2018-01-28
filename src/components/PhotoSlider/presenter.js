import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

const PhotoSlider = props => {
  const {item, itemIdx} = props;
  //const itemIdx = props.itemIdx;
  return (
    <div className={styles.photoSlider}>      
      <div className={styles.photoBox}>
        <div className={`${styles.itemBox} ${styles.itemBox1}`}>
          <img src={item[`${itemIdx}`] ? item[`${itemIdx}`].image : require('images/default.jpeg')} alt="" />
        </div>
        <div className={`${styles.itemBox} ${styles.itemBox2}`}>
          <img src={item[`${itemIdx+1}`] ? item[`${itemIdx+1}`].image : require('images/default.jpeg') } alt="" />
        </div>
        <div className={`${styles.itemBox} ${styles.itemBox3}`}>
          <img src={item[`${itemIdx+2}`] ? item[`${itemIdx+2}`].image : require('images/default.jpeg')} alt="" />
        </div>
        <div className={`${styles.itemBox} ${styles.itemBox4}`}>
          <img src={item[`${itemIdx+3}`] ? item[`${itemIdx+3}`].image : require('images/default.jpeg')} alt="" />
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
    </div>
  );
};
PhotoSlider.propTypes = {
  itemIdx: PropTypes.number.isRequired,
  prevBtn: PropTypes.func.isRequired,
  nextBtn: PropTypes.func.isRequired,
};
export default PhotoSlider;