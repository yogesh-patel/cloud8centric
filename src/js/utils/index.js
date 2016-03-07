import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import config from '../config';
import fetch from 'isomorphic-fetch';

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action = {}) => {
        const reducer = reducerMap[action.type];

        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function parseJSON(response) {
    return response.json()
}

export function get(nodeURL){
    return fetch(config.BASE_URL + nodeURL, {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }

    }).then(checkHttpStatus)
        .then(parseJSON)
        .then(result => {
            return result;
        })
        .catch(error => {
            throw error;
        })
}

export function post(nodeURL, data) {
    //get token
    return fetch(config.BASE_URL + nodeURL, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    }).then(checkHttpStatus)
        .then(parseJSON)
        .then(result => {
            return result;
        })
        .catch(error => {
            throw error;
        })
}


export function put(nodeURL, data) {
    return fetch(config.BASE_URL + nodeURL, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    }).then(checkHttpStatus)
        .then(parseJSON)
        .then(result => {
            return result;
        })
        .catch(error => {
            throw error;
        })
}