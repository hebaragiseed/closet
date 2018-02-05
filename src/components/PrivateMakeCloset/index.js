import { connect } from 'react-redux';
import  { actionCreators as photosActions } from 'redux/modules/photos'; 
import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveMakeCloset: (fileTop, filePants) => {
      dispatch(photosActions.saveMakeCloset(fileTop, filePants))
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);