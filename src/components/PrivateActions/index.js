import  { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
  const {imageId, category, creatorUid} = ownProps;
  return {
    handleDeleteClothes: () => {
      console.log('디스패치안되')
      dispatch(photoActions.deleteClothes(imageId, category, creatorUid))
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
