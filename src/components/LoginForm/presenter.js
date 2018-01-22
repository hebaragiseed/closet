import React from 'react';
import formStyles from 'shared/formStyles.scss';

const LoginForm = props => (
  <div className={formStyles.loginForm}>
    <div className={formStyles.imgBox}>
      <img src={require("images/big-logo.svg")} alt="" />
    </div>
    <form>
      <input type="text" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <input type="submit" value="로그인" />
    </form>
  </div>
);

export default LoginForm;