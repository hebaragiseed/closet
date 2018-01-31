import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = state => {
  const {photos, user} = state
  return {
    userFeed: photos.feed,
    uid: user.uid,
    name: user.name
  };
}

export default connect(mapStateToProps)(Container);