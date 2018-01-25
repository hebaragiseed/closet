import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PhotoSlider = props => {
  console.log(props)
const { index0, index1, index2, index3} = props;
  return (
    <div className={styles.photoSlider}>
      <div>
        <img src={props.closet.top[index0]} alt="" />
      </div>
      <div>
        <img src={props.closet.top[index1]} alt="" />
      </div>
      <div>
        <img src={props.closet.top[index2]} alt="" />
      </div>
      <div>
        <img src={props.closet.top[index3]} alt="" />
      </div>
      {/* <div>
        <img src={props.closet.top[0]} alt="" />
      </div> */}
      <div onClick={props.button}>눌러</div>     
    </div>
  );
}
export default PhotoSlider;