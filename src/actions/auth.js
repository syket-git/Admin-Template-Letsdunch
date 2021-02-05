import { LOGIN_SUCCESS } from './types';
import { setAlert } from './alert';
import axios from 'axios';

const BASE_URL = 'https://api.letsdunch.com';
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${BASE_URL}/admin/signin`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });
    window.location.replace('/');
    //Message [Sign in success]
  } catch (error) {
    const errors = error?.response?.data?.message;
    if (errors) {
      // dispatch(setAlert(errors, 'danger'));
      //Message [Error Message]
    }
  }
};
