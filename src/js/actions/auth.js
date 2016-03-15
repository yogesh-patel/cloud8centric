import constants from '../constants';
import { pushState,push } from 'redux-router';
import config from '../config';
import { checkHttpStatus, parseJSON } from '../utils';
import { get } from './common';

let {LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS} = constants;

export function authenticateUser(username, password) {
    return (dispatch) => {
        dispatch({type: 'LOGIN_USER_REQUEST'});

        var url = 'oauth/token?grant_type=password'
            + '&client_id=' + config.CLIENT_ID
            + '&client_secret=' + config.CLIENT_SECRETE
            + '&username=' + username
            + '&password=' + password;

        return fetch(config.BASE_URL + url, {
            method: 'post',
            headers: {
                'Authorization': 'Basic bW9iaWxlOmNlbnRyaWM4'
            }

        }).then(checkHttpStatus)
            .then((response) => {
                return parseJSON(response);
            })
            .then(result => {

                var access_token = result.access_token;
                localStorage.setItem('access_token', access_token);
                var token_type = result.token_type;
                localStorage.setItem('token_type', token_type);

                getMe()
                .then((meResponse)=>{

                    getOrganizations()
                    .then((orgResponse)=>{
                        dispatch({
                            type: 'LOGIN_USER_SUCCESS',
                            payload: {
                                username: username,
                                userObject:meResponse,
                                orgObject:orgResponse,
                                token: "access_token",
                                statusText: "You have been successfully logged in."
                            }
                        });

                        //dispatch(push("dashboard"));

                    })
                })

            }).catch(error=> {

                var errorDescription = '';
                var errorCode = error.response.status;

                if(errorCode == '503'){
                    errorDescription ='Server is down. Please try again after some time.';
                }

                if(errorCode == '401') {
                    errorDescription = 'Bad Credentials.';
                }

                if(errorCode == '400') {
                    errorDescription = 'Bad Request.';
                }

                dispatch({
                    type: 'LOGIN_USER_FAILURE',
                    payload: {
                        statusText: errorDescription
                    }
                });
            })
    }
}

function getMe(){
    var endPointURL = 'api/v1/me';
    return get(endPointURL);
}

function getOrganizations(){
    var endPointURL = 'api/v1/organizations';
    return get(endPointURL);
}

export function logout() {
    return (dispatch) => {
        localStorage.clear();
        dispatch({
            type: 'LOG_OUT'
        });
        dispatch(pushState(null, "/"));
    }
}
