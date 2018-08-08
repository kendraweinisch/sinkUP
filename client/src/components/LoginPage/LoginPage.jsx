import React, { Component } from 'react'
import { GoogleLogout, GoogleLogin } from '../Authentication';

const clientId = '1086638400321-96p0sokdamjj9ape2gfja03dj87vajir.apps.googleusercontent.com';
// import GoogleLogin, { GoogleLogout } from '../dist/google-login'

const success = response => {
  console.log(response.profileObj)
  let user = {
    googleID: response.profileObj.googleId,
    userName: response.profileObj.name,
    userEmail: response.profileObj.email,
    userPhoto: response.profileObj.imageUrl,
  }
  console.log(user)

};

const error = response => {
  console.error(response)
};

const loading = () => {
  console.log('loading')
};

const logout = () => {
  console.log('logout')
};

class LoginPage extends Component {

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          onSuccess={success}
          onFailure={error}
          onRequest={loading}
          offline={false}
          approvalPrompt="force"
          responseType="id_token"
          isSignedIn
        // disabled
        // prompt="consent"
        // className='button'
        // style={{ color: 'red' }}
        >
          <span>Log In</span>
        </GoogleLogin>

        <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
      </div>
    )
  }

}

export default LoginPage;