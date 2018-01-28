import React, {Component} from 'react';
import styles from './styles.scss';
import Ionicon from 'react-ionicons';

const HeartActions = props => (
  <div className={styles.heartActions}>
    <span>
      <Ionicon icon="ios-heart-outline" fontSize=" 28px" color="red" />
    </span>
    <span>
    {props.like_count}{props.like_count === 1 ? 'like' : 'likes'}
    </span>
  </div>
);




export default HeartActions;