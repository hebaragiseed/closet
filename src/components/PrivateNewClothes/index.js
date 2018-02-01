import { connect } from 'react-redux';
import  { actionCreators as photosActions } from 'redux/modules/photos'; 
import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
  const {topLength, pantsLength} = ownProps
  return {
    saveNewClothes: (file, category) => {
      dispatch(photosActions.saveNewClothes(file, category, topLength, pantsLength))
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);