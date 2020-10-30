/* eslint-disable no-unused-vars */
import config from '../config';
import TokenService from './token-service';

const EventService={
  getEvent() {
    return fetch(`${config.API_ENDPOINT}/event`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json();
      });
  },
  postEvent(ev) {
    let p1=new Promise((resolve, reject) => {
      const duration=Math.floor(Math.random()*5000);
      setTimeout(() => {
        resolve(`${ev} sent!`)
      }, duration)
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
