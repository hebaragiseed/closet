import React from 'react';
import styles from './styles.scss';

const PrivateActions = props => {
  return (
    <div className={styles.privateActions}>
      <div className={styles.iconBox}>
        <img src={require('images/washer.svg')} alt="" />
        <img src={require('images/washer.svg')} alt="" />
      </div>
    </div>

  );
};

export default PrivateActions;