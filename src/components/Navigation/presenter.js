//부모 component <App>
import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

const Navigation = props => {
//console.log(props,'navigation')
  return(
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.leftColumn}>
        <div>
          <h1>옷장</h1>
          <Link to="/">
            <div className={styles.logo}>
              <img src={require("images/logo.svg")} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Link to={`/${props.name}`}>
        <div className={styles.closetIcon} title="내 옷장 보기">
          <img src={require("images/mycloset.svg")} alt="" />
        </div>
        </Link>
        <button onClick={props.handleLogout}>로그아웃</button>
      </div>   
    </div>   
  </div>
  )
}

export default Navigation;
