import axios from 'axios';
import { FETCH_TEST } from './types';

const API_ROOT = '/api';

// eslint-disable-next-line import/prefer-default-export
export function fetchTest() {
  return (dispatch) => {
    axios.get(`${API_ROOT}/test`).then((response) => {
      dispatch({
        type: FETCH_TEST,
        payload: response.data,
      });
    });
  };
}

export function login() {
  return (dispatch) => {
  //  window.href.location = 'http://www.google.com'

    axios.get(`${API_ROOT}/login`).then((response) => {
      // dispatch({
      //   type: FETCH_TEST,
      //   payload: response.data,
      // });
    });
  };
}
