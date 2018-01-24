//import 
import { auth, googleProvider } from 'firebase/client';

//actions
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCES';

//actions creator
function loginUserSuccess(name, uid) {
  return {
    type: LOGIN_USER_SUCCESS,
    name,
    uid
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
      //const email = profile.email;
        dispatch(loginUserSuccess(name, uid))            
      })
    })
    .catch(err => {console.log(err.message)})
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
      dispatch(loginUserSuccess(name, uid,))
      }
    )  
    .catch(err => console.log(err.message))
  });
}

//회원가입할 때 
function createAccount(name, email, password) {
  return (dispach => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('가입왼료')
      alert('가입 되었습니다')
      var user = auth.currentUser;
      user.updateProfile({
      displayName: name
      })
      .then(function() {
      console.log("이름저장성공")
      })
      .catch(function(error) {
        var user = auth.currentUser;
        user.delete()
        alert('다시 회원가입을 작성해주세요')
        
      });
    })
    .catch(err => {
      console.log(err.message);
      alert('가입이 되지 않았습니다. 다시 회원가입해 주세요')
      }
    )
  });    
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
    uid: action.uid
  }
}

//exports
const actionCreators = {
  googleLogin,
  createAccount,
  emailLogin
};
export { actionCreators }

//reducer export
export default reducer;