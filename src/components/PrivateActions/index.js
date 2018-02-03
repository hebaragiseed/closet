import  { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
  const {imageId, category, creatorUid, washer} = ownProps;
  return {
    handleDeleteClothes: () => {
      dispatch(photoActions.deleteClothes(imageId, category, creatorUid))
    },
    handleWasherClick: () => {
      if ( washer ) {
        dispatch(photoActions.washerCancle(imageId, category, creatorUid))
      } else {
        dispatch(photoActions.washerClothes(imageId, category, creatorUid))
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
