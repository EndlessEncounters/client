import React from 'react';
import UserContext from '../../contexts/UserContext';
import AuthApiService from '../../services/auth-api-service';
import './LoginForm.css'
import firebase from "firebase/app";
import "firebase/auth"
export default class Login extends React.Component {
  static contextType=UserContext;
  state={error: null};

  handleSubmit=(e) => {
    e.preventDefault();
    const {username, userpass}=e.target;
    this.setState({error: null});

    AuthApiService.postLogin({
      username: username.value,
      password: userpass.value
    })
      .then(res => {
        username.value='';
        userpass.value='';
        this.context.processLogin(res.authToken);
      })
      .catch(res => {
        this.setState({error: res.error});
      })
  }
  handleGoogleSignIn=(e) => {
    e.preventDefault()
    const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider).then(res =>
      AuthApiService.postLogin({
        username: res.additionalUserInfo.profile.given_name,
        password: res.additionalUserInfo.profile.id
      })
    ).then(res => {
      this.context.processLogin(res.authToken);
    })
      .catch(res => {
        this.setState({error: res.error});
      })
  }
  render() {
    return (
      <main className='mainBody'>

        {
          this.state.error&&
          <div className='error'>{this.state.error}</div>
        }

        <form className="form" onSubmit={this.handleSubmit}>

          <div className="row">
            <label htmlFor="username" className="flex-1">User Name</label>
            <input type="text" name="username" id='username'
              className="" />
          </div>

          <div className="row">
            <label htmlFor="userpass" className="flex-1">Password</label>
            <input type="password" name="userpass" id="userpass"
              className="" />
          </div>

          <div className="">
            <button className="loginBtn" type="submit" aria-label="Login button">Login</button>

          </div>
          <button className="googlebutton" onClick={this.handleGoogleSignIn} aria-label="Login with Google button">Login With Google</button>
        </form>
       
      </main>
    )
  }
}
