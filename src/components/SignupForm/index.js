import { connect } from 'react-redux';
import { actionCreators as userActions } from 'redux/modules/user';
import Container from './container';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    googleLogin: () => {
      dispatch(userActions.googleLogin())
    },
    createAccount: (name, email, password) => {
      dispatch(userActions.createAccount(name, email, password))
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
