/* eslint-disable no-unused-vars */
import config from '../config';
import TokenService from './token-service';

const EventService={
  async getUserStory() {
    return fetch(`${config.API_ENDPOINT}/user/story/`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if(!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res.json();
      })
  },
  makeChoice(choice) {
    return fetch(`${config.API_ENDPOINT}/choice`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({choice: choice})
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json();
      });
  }

}


export default EventService;
