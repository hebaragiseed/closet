import { connect } from 'react-redux';
import { actionCreators as userActions } from 'redux/modules/user';
import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    emailLogin: (email, password) => {
      dispatch(userActions.emailLogin(email, password))
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
