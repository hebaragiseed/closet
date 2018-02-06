//부모 component <PhotoSlider>
import React from 'react';
import styles from './styles.scss';
import Ionicon from 'react-ionicons';

const HeartActions = props => (
  <div className={styles.heartActions}>
    <span onClick={props.handleHeartClick} >
      { props.hearts[props.currentUser] ? <Ionicon icon="ios-heart" fontSize="20" color="red" />:
      <Ionicon icon="ios-heart-outline" fontSize=" 20px" color="red" />}
    </span>
    <span>
    {props.likeCount}{props.likeCount === 1 ? 'like' : 'likes'}
    </span>
  </div>
);




export default HeartActions;