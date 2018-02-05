import { connect } from 'react-redux';
import  { actionCreators as photosActions } from 'redux/modules/photos'; 
import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
  //const {topLength, pantsLength} = ownProps
  return {
    saveNewClothes: (file, category) => {
      if ( category === 'top' ) {
        const itemLength = ownProps.topLength
        dispatch(photosActions.saveNewClothes(file, category, itemLength))
      } else if ( category === 'pants' ) {
        const itemLength = ownProps.pantsLength;        
        dispatch(photosActions.saveNewClothes(file, category, itemLength))        
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);