import React from 'react';
import styles from './styles.scss';

const Loading = props => (
  <div className={styles.loading}>
    <img 
      src={require("images/spinner.jpg")} 
      alt="" 
      className={styles.spinner} />
  </div>
);

export default Loading;
