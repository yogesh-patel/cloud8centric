import constants from '../constants';
import { push } from 'redux-router';
import config from '../config';
import { checkHttpStatus, parseJSON } from '../utils';
import { get } from './common';

let {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS} = constants;

export function authenticateUser(username, password) {

    return (dispatch) => {
        dispatch({type: LOGIN_USER_REQUEST});

        let url = 'oauth/token?grant_type=password'
            + '&client_id=' + config.CLIENT_ID
            + '&client_secret=' + config.CLIENT_SECRETE
            + '&username=' + username
            + '&password=' + password;

        return fetch('https://localhost:8888/' + url, {
            method: 'post',
            headers: {
                'Authorization': 'Basic bW9iaWxlOmNlbnRyaWM4'
            }

        }).then(checkHttpStatus)
            .then((response) => {
                return parseJSON(response);
            })
            .then(result => {

                let access_token = result.access_token;
                localStorage.setItem('access_token', access_token);
                let token_type = result.token_type;
                localStorage.setItem('token_type', token_type);

                getMe()
                .then((meResponse)=>{

                    getOrganizations()
                    .then((orgResponse)=>{
                        dispatch({
                            type: LOGIN_USER_SUCCESS,
                            payload: {
                                username: username,
                                userObject:meResponse,
                                orgObject:orgResponse,
                                token: "access_token",
                                statusText: "You have been successfully logged in."
                            }
                        });

                        dispatch(push("dashboard"));

                    })
                })

            }).catch(error=> {

                let errorDescription = '';

                if(error.message == 'Failed to fetch'){
                    errorDescription ='Server is down. Please try again after some time.';
                }

                if(error.message == 'Unauthorized' || error.message == 'Bad Request') {
                    errorDescription = 'Bad Credentials.';
                }

                dispatch({
                    type: LOGIN_USER_FAILURE,
                    payload: {
                        statusText: errorDescription
                    }
                });
            })
    }

}

function getMe(){

    let endPointURL = 'me';
    return get(endPointURL);

}

function getOrganizations(){

    let endPointURL = 'organizations';
    return get(endPointURL);

}


export function emptyStatuxText(){

    return (dispatch) => {
        dispatch({
            type: CLEAR_LOGIN_ERROR_MESSAGE,
            payload: {
                statusText: null
            }
        });
    }

}

export function logout() {

    return (dispatch) => {
        localStorage.clear();
        dispatch({
            type: LOG_OUT
        });
        dispatch({
            type: CLEAR_LOGIN_ERROR_MESSAGE,
            payload: {
                statusText: null
            }
        });
        dispatch(push(null, "/"));
    }

}
