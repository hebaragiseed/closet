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
//좋아요버튼 눌렀을때 
function likeImage(imageId, category, creatorUid) {
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
  };
}

function saveNewClothes(file, category, topLength, pantsLength) {
  return (dispatch, getState) => {
    const creator_uid = getState().user.uid;
    const a = topLength.length;
    console.log(a,'aaaa')
    db.ref(`users/${creator_uid}/closet/${category}/${a}`).set({
      category,
      creator_uid,
      id: a,
      image: file,
      like_count: 0
    })
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
  likeImage,
  saveNewClothes
}

export { actionCreators };
//default reducer esport

export default reducer;