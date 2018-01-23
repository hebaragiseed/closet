import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import formStyles from 'shared/formStyles.scss';

const SignupForm = props => (
  <div className={formStyles.signupForm}>
    <div className={formStyles.imgBox}>
      <img src={require("images/big-logo.svg")} alt="" />
    </div>
    <button className={formStyles.googleLink} onClick={props.handleGoogleLogin}>
      <Ionicon icon="logo-google" fontSize="16px" color="white" />
      google로 로그인
    </button>
    <span className={formStyles.divider}>또는</span>
    <form onSubmit={props.handleSubmit}>
      <input 
        type="text" 
        name="name"
        placeholder="이름"
        value={props.nameValue}
        onChange={props.handleInputChange}
        />
      <input 
        type="email" 
        name="email"
        placeholder="이메일"
        value={props.emailValue}
        onChange={props.handleInputChange}
      />
      <input 
        type="password" 
        name="password"
        placeholder="비밀번호"
        value={props.passwordValue}
        onChange={props.handleInputChange}
        />
      <input type="submit" value="가입" />
    </form>
    <p>가입하면 Instagram의 약관 및 개인정보처리방침에 동의하게 됩니다.</p>
  </div>
);

SignupForm.propTypes = {
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleGoogleLogin: PropTypes.func.isRequired
};

export default SignupForm;