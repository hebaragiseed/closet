//imports
import { auth, db } from 'firebase/client';

//actions
const SET_FEED = 'SET_FEED';

//action creators
function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

//API actions
function getFeed() {  
  return (dispatch) => {
    db.ref('/users').on('value', function(value) {
      console.log(value.val());
      dispatch(setFeed(value.val()))
    })
  }
}

function likeImage(imageId,category,creatorUid) {
  return (dispatch, getState) => {    
    const uid = getState().user.uid;
    console.log(imageId,category,creatorUid)
    db.ref(`users/${creatorUid}/closet/${category}/${imageId}`).transaction((like)=> {
      if (like) {
        if (like.hearts && like.hearts[uid]) {
          like.like_count--;
          like.hearts[uid] = null;
        } else {
          like.like_count++;
          if (!like.hearts) {
            like.hearts = {};
          }
          like.hearts[uid] = true;
        }
      }
      return like;      
    });
    //console.log(imageId,category,creatorUid)
  }
}


//initial state
const initialState = {};

//reducer
function reducer(state=initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
}

//reducer function
function applySetFeed(state, action) {
  const { feed }  = action;
  return {
    ...state,
    feed
  };
}

//exports
const actionCreators = {
  getFeed,
  likeImage
}

export { actionCreators };
//default reducer esport

export default reducer;