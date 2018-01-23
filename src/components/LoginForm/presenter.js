import React from 'react';
import PropTypes from 'prop-types';
import formStyles from 'shared/formStyles.scss';

const LoginForm = props => (
  <div className={formStyles.loginForm}>
    <div className={formStyles.imgBox}>
      <img src={require("images/big-logo.svg")} alt="" />
    </div>
    <form onSubmit={props.handleSubmit}>
      <input 
        type="email" 
        name="email"
        placeholder="이메일"
        onChange={props.handleInputChange}  
        value={props.emailValue}
        />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        onChange={props.handleInputChange}
        value={props.passwordValue}
         />
      <input type="submit" value="로그인" />
    </form>
  </div>
);

LoginForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired   
};

export default LoginForm;