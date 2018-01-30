import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state) => {
  const { user, routing: { location }} = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname,
    name: user.name,
    uid: user.uid
  };
}

export default connect(mapStateToProps)(Container);
