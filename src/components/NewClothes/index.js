import { connect } from 'react-redux';
//import  { actionCreator as photosActions } from 'redux/modules/photos'; 
import Container from './container';

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     saveNewClothes: () => {
//       dispatch(photosActions.saveNewClothes())
//     }
//   };
// };

export default connect(null)(Container);