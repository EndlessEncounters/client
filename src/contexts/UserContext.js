import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

const UserContext=React.createContext({
  user: {},
  error: null,
  setError: () => { },
  clearError: () => { },
  setUser: () => { },
  processLogin: () => { },
  processLogout: () => { }
});

export default UserContext

export class UserProvider extends Component {
  constructor(props) {
    super(props)
    const state={user: {}, error: null}

    const jwtPayload=TokenService.parseAuthToken()

    if(jwtPayload) {
      state.user={
        id: jwtPayload.user_id,
        username: jwtPayload.sub
      }
    }

    this.state=state;
  }

  setError=error => {
    console.error(error);
    this.setError({error});
  }

  clearError=() => {
    this.setState({error: null});
  }

  setUser=user => {

    this.setState({user});
    window.localStorage.setItem('userInfo', user.id);
  }

  processLogin=authToken => {
    TokenService.saveAuthToken(authToken);
    const jwtPayload=TokenService.parseAuthToken();
    this.setUser({
      id: jwtPayload.user_id,
      access_token: jwtPayload.access_token,
      username: jwtPayload.sub
    });
    TokenService.saveAccessToken(jwtPayload.access_token);
  }

  processLogout=() => {
    TokenService.clearAuthToken();
    this.setUser({});
  }

  render() {
    const value={
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
