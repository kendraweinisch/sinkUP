import React, { Component } from 'react'
import { GoogleLogout, GoogleLogin } from '../Authentication';

const clientId = '1086638400321-96p0sokdamjj9ape2gfja03dj87vajir.apps.googleusercontent.com';
// import GoogleLogin, { GoogleLogout } from '../dist/google-login'

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
  constructor(props) {
    super(props)
    console.log(props)
    this.success = this.success.bind(this)
  }



  success(response) {
    console.log("successful login")
    const { profileObj } = response;
    // this is where we send a request to create a new user
    const newUser = {
      "name": profileObj.name,
      "email": profileObj.email,
      "googleId": profileObj.googleId,
      "photo": profileObj.imageUrl,
    }
    const url = "http://localhost:3001/api/users"
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(newUser), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      return res.json()
    })
      .then(response => {
        console.log('Success:', response.data)
        console.log(this.props)
        this.props.userfn(response.data)
      })
      .catch(error => console.error('Error:', error));
    // find a way to store googleId in state
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          onSuccess={this.success}
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