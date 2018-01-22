import React from 'react';
import styles from './styles.scss';
import Ionicon from 'react-ionicons';

export const LoginForm = props => (
  <div className={styles.loginForm}>
    <div className={styles.imgBox}>
      <img src={require("images/big-logo.svg")} alt="" />
    </div>
    <form>
      <input type="text" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <input type="submit" value="로그인" />
    </form>
  </div>
);
export const SignupForm = props => (
  <div className={styles.signupForm}>
    <div className={styles.imgBox}>
      <img src={require("images/big-logo.svg")} alt="" />
    </div>
    <button className={styles.googleLink}>
      <Ionicon icon="logo-google" fontSize="16px" color="white" />
      google로 로그인
    </button>
    <span className={styles.divider}>또는</span>
    <form>
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <input type="submit" value="가입" />
    </form>
    <p>가입하면 Instagram의 약관 및 개인정보처리방침에 동의하게 됩니다.</p>
  </div>
);