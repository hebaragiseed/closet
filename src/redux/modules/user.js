//import 
import { auth, googleProvider } from 'firebase/client';

//actions
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCES';
const LOGOUT_USER  = 'LOGOUT_USER';
//actions creator
function loginUserSuccess(name, uid, profileImg) {
  return {
    type: LOGIN_USER_SUCCESS,
    name,
    uid,
    profileImg
  };
}

function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}

//API actions
//구글로 로그인할 때
function googleLogin() {
  return (dispatch) => {
    auth.signInWithPopup(googleProvider) 
    .then(() => {
      const user = auth.currentUser;
      user.providerData.forEach(function (profile) {
        const name = profile.displayName;
        const uid = profile.uid;
        const profileImg = profile.photoURL;              
      //const email = profile.email;
        dispatch(loginUserSuccess(name, uid, profileImg))            
      })
    })
    .catch(err => {alert(err.message)})
  }  
}

//이메일, 비밀번호로 로그인할 때 
function emailLogin(email, password) {
  return (dispatch => {
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      const user = auth.currentUser;
      const name = user.displayName;
      const uid = user.uid; 
      //const email = user.email;
      dispatch(loginUserSuccess(name, uid))
      }
    )  
    .catch(err => alert(err.message))
  });
}

//회원가입할 때 
function createAccount(name, email, password) {
  return (dispatch => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('가입 되었습니다')
      var user = auth.currentUser;
      user.updateProfile({
      displayName: name
      })
      .then(function() {
      //console.log("이름저장성공")
      })
      .catch(function(error) {
        var user = auth.currentUser;
        user.delete()
        alert('다시 회원가입을 작성해주세요')        
      });
    })
    .catch(err => {
      alert('가입이 되지 않았습니다. 다시 회원가입해 주세요')
      }
    )
  });    
}

//로그아웃 버튼 누를때 
function logout() {
  return (dispatch => {
    auth.signOut().then(() => {
      dispatch(logoutUser())
    }).catch(function(error) {
      
    });
  })
}

//initial state
const initialState = {
  isLoggedIn: false
};
//reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return applySetUsers(state, action)
    case LOGOUT_USER:
      return applyLogoutUsers(state)
    default:
      return state
  }
}

//reducer functions
function applySetUsers(state, action) {
  return {
    ...state,
    isLoggedIn: true,
    name: action.name,
    uid: action.uid,
    profileImg: action.profileImg
  };
}

function applyLogoutUsers(state) {
  return {
    isLoggedIn: false,
    name: '',
    uid: '',
    profileImg: ''
  };
}

//exports
const actionCreators = {
  googleLogin,
  createAccount,
  emailLogin,
  logout
};
export { actionCreators }

//reducer export
export default reducer;