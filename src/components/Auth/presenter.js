import React from 'react';
import styles from './styles.scss';
import LoginForm from 'components/LoginForm';
import SignupForm from 'components/SignupForm';

const Auth = props => (
  <div className={styles.auth}>
    <div className={styles.leftColumn}>
      <img src={require("images/auth-closet.png")} alt="옷장 이미지" />
    </div>
    <div className={styles.rightColumn}>
      <div className={styles.borderBoxGroup}>
        <div className={styles.formBox}>
          {props.action === 'login' && <LoginForm />}
          {props.action === 'signup' && <SignupForm />}
        </div>
        <div className={styles.changeBox}>
          {props.action === 'login' && (
            <p>계정이 없으신가요?
            <span 
              className={styles.changeLink}
              onClick={props.changeAction}
            >가입하기
            </span>
          </p>
          )}
        {props.action === 'signup' && (
          <p>계정이 있으신가요?
          <span 
            className={styles.changeLink}
            onClick={props.changeAction}
          >로그인
          </span>
        </p> 
        )}
        </div>
      </div>
    </div>
  </div>
);

export default Auth;