import config from '../config';

const AuthApiService = {
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        return !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json();
      });
  },
  postLogin( {username, password} ) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        return !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json();
      });
  }
}

export default AuthApiService;