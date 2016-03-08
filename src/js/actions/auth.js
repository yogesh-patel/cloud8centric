import {
    LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE
} from '../constants';


export function authenticateUser(username, password){

  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
                username: "sonal",
                token: "123",
                statusText:"You have been successfully logged in."
              }
    }

}
