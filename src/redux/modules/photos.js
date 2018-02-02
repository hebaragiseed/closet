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
//db에서 사진 가져오기
function getFeed() {  
  return (dispatch) => {
    db.ref('/users').on('value', function(value) {
      console.log(value.val(),'사진들');
      dispatch(setFeed(value.val()))
    })
  }
}
//좋아요버튼 눌렀을때 
function likeImage(imageId, category, creatorUid) {
  return (dispatch, getState) => {    
    const uid = getState().user.uid;
    //console.log(imageId,category,creatorUid)
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
//새로운 옷 저장하는 아이콘 눌렀을때 db에 저장
function saveNewClothes(file, category, topLength, pantsLength) {
  return (dispatch, getState) => {
    const creator_uid = getState().user.uid;
    const id = topLength.length;
    console.log(id,'aaaa')
    db.ref(`users/${creator_uid}/closet/${category}`).push.set({
      category,
      creator_uid,
      id,
      image: file,
      like_count: 0
    });
  };
}
//옷 사진 제거하는 아이콘 눌렀을때  db에서 제거하기
function deleteClothes(imageId, category, creatorUid) {
  return (dispatch, getState) => {
    console.log('cccccccccc')
    db.ref(`users/${creatorUid}/closet/${category}/${imageId}`).remove()
    .then(
      alert('저장되었습니다')
    )
    .catch(error => alert('다시눌러주세요'));    
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
  saveNewClothes,
  deleteClothes
}

export { actionCreators };
//default reducer esport

export default reducer;