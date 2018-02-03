import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = state => {
  const {photos, user} = state
  return {
    userFeed: photos.feed,
    uid: user.uid,
    name: user.name
  };
}
const mapDispatchToProps = (dispatch, ownProps) => {  
  return {
    handleNewCloset: (uid,name) => {
      dispatch(photoActions.makeNewCloset(uid, name))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);