import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => {
      dispatch(userActions.logout());
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
