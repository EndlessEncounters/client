/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App/App';
import {UserProvider} from './contexts/UserContext';
import {EventProvider} from './contexts/EventContext';
import firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from './firebaseConfig';
import {FirebaseAuthProvider} from "@react-firebase/auth";

ReactDOM.render(
  <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
    <BrowserRouter>
      <UserProvider>
        <EventProvider>
          <App />
        </EventProvider>
      </UserProvider>
    </BrowserRouter>
  </FirebaseAuthProvider>,
  document.getElementById('root')
);
