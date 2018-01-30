import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = state => {
  const {photos, user} = state
  return {
    userFeed: photos.feed,
    userUid: user.uid
  };
}

export default connect(mapStateToProps)(Container);