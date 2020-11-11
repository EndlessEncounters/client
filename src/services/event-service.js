/* eslint-disable no-unused-vars */
import config from '../config';
import TokenService from './token-service';

const EventService={
  async getUserStory(id) {
    return fetch(`${config.API_ENDPOINT}/story/${id}`, {
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

  }

}


export default EventService;
