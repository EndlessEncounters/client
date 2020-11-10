/* eslint-disable no-unused-vars */
import config from '../config';
import TokenService from './token-service';

const CharacterService={
  async getUserCharacter() {
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
  getEntity(id) {
    return fetch(`${config.API_ENDPOINT}/entity/${id}`)
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
          return res.json();
      })
  },
  postCharacter(character) {
    return fetch(`${config.API_ENDPOINT}/character`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(character)
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json();
      });
  },
  getInventory() {
    return fetch(`${config.API_ENDPOINT}/character/inventory`, {
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
  getGear() {
    return fetch(`${config.API_ENDPOINT}/character/gear`, {
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
  getAbilities() {
    return fetch(`${config.API_ENDPOINT}/character/abilities`, {
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
  getSpells() {
    return fetch(`${config.API_ENDPOINT}/character/spells`, {
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
}

export default CharacterService;