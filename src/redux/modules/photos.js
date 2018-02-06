//imports
import { db } from 'firebase/client';

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
function saveNewClothes(file, category, itemLength) {
  return (dispatch, getState) => {
    const creator_uid = getState().user.uid;
    const id = itemLength.length;
    //console.log(id,file, category,'saveNewClothes')
    db.ref(`users/${creator_uid}/closet/${category}/${id}`).set({
      category,
      creator_uid,
      id,
      image: file,
      like_count: 0,
      is_washed: false
    });
  };
}
//옷 사진 제거하는 아이콘 눌렀을때  db에서 제거하기
function deleteClothes(imageId, category, creatorUid) {
  return (dispatch) => {
    db.ref(`users/${creatorUid}/closet/${category}/${imageId}`).remove();
  }
}
//세탁기 아이콘 눌렀을 때 
function washerClothes(imageId, category, creatorUid) {
  return (dispach) => {
    db.ref(`users/${creatorUid}/closet/${category}/${imageId}`).update({is_washed: true})
    alert('세탁합니다')
  }
}
//세탁기 아이콘 눌렀을 때 
function washerCancle(imageId, category, creatorUid) {
  return (dispach) => {
    db.ref(`users/${creatorUid}/closet/${category}/${imageId}`).update({is_washed: false})
    alert('세탁 끝')
  }
}
//개인 옷장만들기 버튼 눌렀을 때
function saveMakeCloset(fileTop, filePants) {
  return (dispach, getState) => {
    const {uid, name} = getState().user;
    db.ref(`users/${uid}`).set({
      "closet" : {
        "top" : [ {
          "category" : "top",
          "creator_uid" : uid,
          "id" : 0,
          "image" : fileTop,
          "is_washed" : false,
          "like_count" : 0
        }],
        "pants" : [ {
          "category" : "pants",
          "creator_uid" : uid,
          "id" : 0,
          "image" : filePants,
          "is_washed" : false,
          "like_count" : 0
        }]
      },      
      name,
      uid
    });
  };
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
  deleteClothes,
  washerClothes,
  washerCancle,
  saveMakeCloset
}

export { actionCreators };

//default reducer export
export default reducer;