/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 24/02/16.
 */

import {createReducer} from '../utils';
import constants from '../constants';
import {pushState} from 'redux-router';

let {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} = constants;

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

export default createReducer(initialState, {
    [LOGIN_USER_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            'authenticationStatus':null,
            'statusText': null
        });
    },
    [LOGIN_USER_SUCCESS]: (state, payload) => {
        console.log('payload::', payload);
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': true,
            'authenticationStatus':'passed',
            'token': payload.token,
            'userName': payload.userName,
            'statusText': payload.statusText
        });

    },
    [LOGIN_USER_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': false,
            'authenticationStatus':'failed',
            'token': null,
            'userName': null,
            'statusText': payload.statusText
        });
    }
});
