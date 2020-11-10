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
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
          return res.json();
      })
  },
<<<<<<< HEAD
  postEvent(ev) {
    let p1=new Promise((resolve, reject) => {
      const duration=Math.floor(Math.random()*5000);
      setTimeout(() => {
        resolve(`${ev} sent!`)
      }, duration)
=======
  makeChoice(choice) {
    return fetch(`${config.API_ENDPOINT}/choice`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({choice:choice})
>>>>>>> 9b4dc72520b71ec86a4797a81d7b04f0a6e21210
    })
    return p1;
    // return fetch(`${config.API_ENDPOINT}/choice`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `bearer ${TokenService.getAuthToken()}`,
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(ev)
    // })
    //   .then(res => {
    //     return (!res.ok)
    //       ? res.json().then(e => Promise.reject(e))
    //       :res.json();
    //   });
  }

}


export default EventService;
