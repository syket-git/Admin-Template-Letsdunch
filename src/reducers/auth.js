import { LOGIN_SUCCESS } from '../actions/types';
import Cookies from 'js-cookie';

const data = Cookies.get('userData');
const finalData = JSON.parse(data);

const initialState = {
  token: finalData.token !== undefined ? finalData.token : null,
  loading: finalData.token !== undefined ? false : true,
  isAuthenticated: finalData.token !== undefined ? true : false,
  user: finalData ? finalData : null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      Cookies.set('userData', payload, { expires: 1 });
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    default:
      return state;
  }
};
export default authReducer;
