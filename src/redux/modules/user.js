//import 
import { auth, db, googleProvider } from 'firebase/client';

//actions


//actions creator

//API actions
function googleLogin() {
  return (dispatch) => {
    auth.signInWithPopup(googleProvider) 
    .then(result => {
      const user = auth.currentUser     
      if (user != null) {
        user.providerData.forEach(function (profile) {
          console.log("Sign-in provider: "+profile.providerId);
          console.log("  Provider-specific UID: "+profile.uid);
          console.log("  Name: "+profile.displayName);
          console.log("  Email: "+profile.email);
          console.log("  Photo URL: "+profile.photoURL);
        });
        auth.onAuthStateChanged(function(userState) {
          if (userState) {
            // User is signed in.
            console.log('userlogin')
          } else {
            // No user is signed in.
            console.log('userlogin')
          }
        });
      }
  })
  .catch(err => {console.log(err.message)})
  }
  
}

//이메일, 비밀번호로 로그인할 때 
function emailLogin(email, password) {
  return (dispatch => {
    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
            const user = auth.currentUser;
            let name, email, photoUrl, uid, emailVerified;
      
          if (user != null) {
          name = user.displayName;
          email = user.email;
          photoUrl = user.photoURL;
          emailVerified = user.emailVerified;
          uid = user.uid; 
          console.log(name, email, uid)
          }

        } else {
          // No user is signed in.
        }
      });
      
    })
    
    .catch(err => err.message)
  })
  // auth.onAuthStateChanged(firebaseUser => {
  //   if(firebaseUser) {
  //     console.log(firebaseUser)
  //   } else  {
  //     console.log('not logged in');
  //   }
  // });
  
}
//회원가입할 때 
function createAccount(name, email, password) {
  return (dispach) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(console.log('가입왼료'))
    .catch(err => console.log(err.message))
  } 
    
}

//initial state
const initialState = {
  isLoggedIn: false
}
//reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

//reducer functions

//exports
const actionCreators = {
  googleLogin,
  createAccount,
  emailLogin
};
export { actionCreators }

//reducer export
export default reducer;