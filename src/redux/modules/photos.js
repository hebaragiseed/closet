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
function makeNewCloset(uid, name) {
  console.log('됬니?')
  db.ref(`users/${uid}`).set({
    "closet" : {
      "pants" : [ {
        "category" : "pants",
        "creator_uid" : uid,
        "hearts" : {
          "6fd0IaI4ZOYXVCpVcMlTvCcRBoJ3" : true
        },
        "id" : 0,
        "image" : "http://image.wconcept.co.kr/productimg/image/img2/06/300415406.jpg?thumbnail=246x328",
        "is_washed" : false,
        "like_count" : 0
      }],
      "top" : [ {
        "category" : "pants",
        "creator_uid" : uid,
        "hearts" : {
          "6fd0IaI4ZOYXVCpVcMlTvCcRBoJ3" : true
        },
        "id" : 0,
        "image" : "http://image.wconcept.co.kr/productimg/image/img2/06/300415406.jpg?thumbnail=246x328",
        "is_washed" : false,
        "like_count" : 0
      }]
    },
    
    name,
    uid

  });
  
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
  makeNewCloset
}

export { actionCreators };
//default reducer esport

export default reducer;