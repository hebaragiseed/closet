import React from 'react';
import styles from './styles.scss'

const Auth = props => (
  <div className={styles.auth}>
    <div className={styles.leftColumn}>
      <img src={require("images/auth-closet.png")} alt="옷장 이미지" />
    </div>
    <div className={styles.rightColumn}>
    <div className={styles.formBox}>
      <div className={styles.changeBox}>
        {(()=> {
          switch (props.action) {
            case 'login':
              return (
                <p>계정이 있으신가요?
                  <span 
                    className={styles.changeLink}
                    onClick={props.changeAction}
                  >로그인
                  </span>
                </p>
              );
              case 'signup':
              return (
                <p>계정이 없으신가요?
                  <span 
                    className={styles.changeLink}
                    onClick={props.changeAction}
                  >가입하기
                  </span>
                </p> 
              );
              default:
                return null;
          }
        })()}
      </div>
      </div>
    </div>
  </div>
);

export default Auth;