/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css'
import firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from '../../firebaseConfig';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";


export default class Registration extends React.Component {
  static contextType=UserContext;
  state={error: null}
  handleRegister=(e) => {
    e.preventDefault();
    const {useremail, username, userpass}=e.target;
    AuthApiService.postUser({
      email: useremail.value,
      username: username.value,
      password: userpass.value
    })
      .then(newUser => {
        useremail.value='';
        username.value='';
        userpass.value='';
        console.log('User created')
      })
      .catch(res => {
        this.setState({error: res.error});
      });
  }
  handleGoogleReg=(e) => {
    e.preventDefault()
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider).then(res =>
      AuthApiService.postUser({
        email: res.additionalUserInfo.profile.email,
        username: res.additionalUserInfo.profile.given_name,
        password: res.additionalUserInfo.profile.id
      })
    ).catch(res => {
      this.setState({error: res.error});
    });
  }


  render() {
    return (
      <main className='mainBody'>

        {
          this.state.error&&
          <div className='error'>{this.state.error}</div>
        }

        <form className="form" onSubmit={this.handleRegister}>

          <div className="row">
            <label htmlFor="useremail">Email Address</label>
            <input type="email" name="useremail" id="useremail" />
          </div>

          <div className="row">
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" id='username' />
          </div>

          <div className="row">
            <label htmlFor="userpass">Password</label>
            <input type="password" name="userpass" id="userpass" />
          </div>

          <div>
            <button aria-label="Register button">Register</button>

          </div>
          <button className="googlebutton" onClick={this.handleGoogleReg} aria-label="Register with Google button">Register With Google</button>
          <Link className="accountRte" to='/login'>Already have an account?</Link>
        </form>
      </main>

    )
  }
}
