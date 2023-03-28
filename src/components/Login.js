import React from 'react'
import firebaseConfig from '../config/Firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import apiServices from '../services/Services';


const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
apiServices.SignIn();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

function singinwithgoogle() {

  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(credential)
      console.log(user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential)

    });
}
function singinwithfacebook() {

  signInWithPopup(auth, facebookAuthProvider)
    .then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = FacebookAuthProvider.credentialFromError(error);

    });
}
export default function Login(props) {
  console.log(props)
  return (
    <>
      <div className="col-md-4 col-lg-4 col-12">
        <div className="card m_background">
          <div className="login_title">
            <h1>Login</h1>
            <h5>Welcome to Color Prediction Game{props.allData.userData.name} </h5>
            <button onClick={()=>{props.allData.setUserData(prevState => ({
            ...prevState,
            name: "new name",
          }))}}>changename</button>
          </div>

          <div className="content_bottom_part mt-5">
            <div className="row">

              <button className="btn google_btn" onClick={() => { singinwithgoogle() }}><i className="fa fa-google" aria-hidden="true"></i>Login with Google Account</button>


              <button className="btn facebook_btn" onClick={()=>{singinwithfacebook()}}><i className="fa fa-facebook" aria-hidden="true"></i>Login with Facebook Account</button>

            </div>
          </div>
        </div>
      </div>


    </>
  )
}
