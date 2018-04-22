import { GET_USER } from '../types';

export function getUser(user) {
  return {
    type: GET_USER,
    user
  };
}

export function logUserIn(email, password, dispatch) {
  return dispatch => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return dispatch(getUser(json.user));
        }
      });
  };
}

export function registerUser(email, password, dispatch) {
  return dispatch => {
    fetch('/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return dispatch(getUser(json.user));
        }
      })
      .catch(err => console.log(err));
  };
}
