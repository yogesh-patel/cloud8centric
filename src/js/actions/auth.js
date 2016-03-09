import constants from '../constants';

let {LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS} = constants;

export function authenticateUser(username, password){
  return(dispatch) => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
    payload: {
                username: "sonal",
                token: "123",
                statusText:"You have been successfully logged in."
              }
        });
    }
}
