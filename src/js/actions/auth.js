import constants from '../constants';
import { pushState,push } from 'redux-router';
import config from '../config';
import { checkHttpStatus, parseJSON } from '../utils';

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
                console.log(result);
                var access_token = result.access_token;
                localStorage.setItem('access_token', access_token);
                var token_type = result.token_type;
                localStorage.setItem('token_type', token_type);

                dispatch({
                    type: 'LOGIN_USER_SUCCESS',
                    payload: {
                        username: username,
                        token: "access_token",
                        statusText: "You have been successfully logged in."
                    }
                });
            }).catch(error=> {
                console.log(error);
            })

        //return $http({
        //    method: "post",
        //    url: url,
        //    headers: {
        //        'Authorization': 'Basic bW9iaWxlOmNlbnRyaWM4'
        //    },


        //var interval = setInterval(()=> {
        //    clearInterval(interval);
        //    dispatch({
        //        type: 'LOGIN_USER_SUCCESS',
        //        payload: {
        //            username: username,
        //            token: "123",
        //            statusText: "You have been successfully logged in.",
        //            password: password
        //        }
        //    });
        //    dispatch(push("dashboard"));
        //}, 2000);

    }
}

export function logout() {
    return (dispatch) => {
        dispatch({
            type: 'LOG_OUT'
        });
        dispatch(pushState(null, "/"));
    }
}
