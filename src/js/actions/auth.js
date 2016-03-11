import constants from '../constants';
import { push } from 'redux-router';

let {LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS} = constants;

export function authenticateUser(username, password){
    return(dispatch) => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: {
                username: username,
                token: "123",
                statusText:"You have been successfully logged in.",
                password: password
            }
        });
        dispatch(push("dashboard"));
    }
}
