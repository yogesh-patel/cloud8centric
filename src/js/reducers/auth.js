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
    username: null,
    userObject: null,
    orgObject: null,
    token: null,
    statusText: null
};

export default createReducer(initialState, {
    [LOGIN_USER_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'statusText': null
        });
    },
    [LOGIN_USER_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticated':true,
            'username': payload.username,
            'userObject': payload.userObject,
            'orgObject': payload.orgObject,
            'token': payload.token,
            'statusText': payload.statusText
        });

    },
    [LOGIN_USER_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticated':false,
            'statusText': payload.statusText
        });
    }
});
