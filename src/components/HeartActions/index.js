import { connect } from 'react-redux';
import Container from './container'; 
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state) => {
  const { user :{ uid } } = state;
  return {
    currentUser: uid
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { imageId, category, creatorUid } = ownProps;
  return {
    handleHeartClick:() => {
     dispatch(photoActions.likeImage(imageId, category, creatorUid))   
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
