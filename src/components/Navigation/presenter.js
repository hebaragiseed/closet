import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

const Navigation = props => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.leftColumn}>
        <div>
          <h1>옷장</h1>
          <Link to="/" >
            <div className={styles.logo}>
              <img src={require("images/logo.svg")} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Link to="/explore">
        <div className={styles.closetIcon}>
          <img src={require("images/mycloset.svg")} alt="" />
        </div>
        </Link>
        <button>로그아웃</button>
      </div>   
    </div>   
  </div>
);

export default Navigation;
