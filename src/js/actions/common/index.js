/**
 * Created by synerzip on 08/12/15.
 */
import { checkHttpStatus, parseJSON } from '../../utils';
import config from '../../config';


export function get(nodeURL) {
    let accessToken = localStorage.getItem('access_token');
    if (accessToken !== null) {
        return fetch(config.BASE_URL + nodeURL, {
            method: 'get',
            headers: {
                'Authorization':'Bearer '+ accessToken
            }

        }).then(checkHttpStatus)
            .then((response) => {
                return parseJSON(response);
            })
            .then(result => {
                return result;
            })
            .catch(error => {
                throw error;
            })
    } else {
        dispatch(pushState(null, '/login'));
    }
}

export function deleteRequest(nodeURL) {
    let loggedinUser = localStorage.getItem('ccmLoggedinUser');
    if (loggedinUser !== null) {
        var loggedinUserObj = JSON.parse(loggedinUser);
        return fetch(config.BASE_URL + nodeURL, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': loggedinUserObj.token
            }

        }).then(checkHttpStatus)
            .then((response) => {
                var token = response.headers.get('X-AUTH-TOKEN');
                updateAccessToken(token);
                return parseJSON(response);
            })
            .then(result => {
                return result;
            })
            .catch(error => {
                throw error;
            })
    }
}

export function post(nodeURL,data) {
    let accessToken = localStorage.getItem('access_token');
    let tokenType = 'Bearer ';

    if (tokenType !== null || accessToken !== null) {
        return fetch(config.BASE_URL + nodeURL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                 'Authorization': tokenType + accessToken
            },
            body:JSON.stringify(data)

        }).then(checkHttpStatus)
            .then((response) => {
                return parseJSON(response);
            })
            .then(result => {
                return result;
            })
            .catch(error => {
                throw error;
            })
    }
}

export function put(nodeURL,data) {
    //get token
    let loggedinUser = localStorage.getItem('ccmLoggedinUser');
    if (loggedinUser !== null) {
        var loggedinUserObj = JSON.parse(loggedinUser);
        return fetch(config.BASE_URL + nodeURL, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': loggedinUserObj.token
            },
            body:JSON.stringify(data)

        }).then(checkHttpStatus)
            .then((response) => {
                var token = response.headers.get('X-AUTH-TOKEN');
                updateAccessToken(token);
                return parseJSON(response);
            })
            .then(result => {
                return result;
            })
            .catch(error => {
                throw error;
            })
    } else {
        dispatch(pushState(null, '/login'));
    }
}
