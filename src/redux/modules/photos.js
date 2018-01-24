//imports
import { auth, db } from 'firebase/client';

//actions


//action creators


//API actions
function getFeed() {  
  return (dispatch) => {
    db.ref('/users').on('value', function(value) {
      //dispatch(setphotos(value.val()))
      console.log(value.val());
    })
  }
}

//initial state
const initialState = {};

//reducer
function reducer(state=initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

//reducer function

//exports
const actionCreators = {
  getFeed
}

export { actionCreators };
//default reducer esport

export default reducer;