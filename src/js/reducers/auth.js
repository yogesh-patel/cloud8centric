import {createReducer} from '../utils';
import constants from '../constants';
import {pushState} from 'redux-router';
import _ from 'lodash';

const initialState = {
    username: null,
    userObject: null,
    userRole: null,
    orgObject: null,
    token: null,
    statusText: null
};

export default createReducer(initialState, {
    LOGIN_USER_REQUEST: (state, payload) => {

        return Object.assign({}, state, {
            statusText: null
        });

    },
    LOGIN_USER_SUCCESS: (state, payload) => {

        return Object.assign({}, state, {
            username: payload.username,
            userObject: payload.userObject,
            orgObject: payload.orgObject,
            userRole:payload.userRole,
            token: payload.token,
            statusText: payload.statusText
        });

    },
    LOGIN_USER_FAILURE: (state, payload) => {

        return Object.assign({}, state, {
            statusText: payload.statusText
        });

    },
    CLEAR_LOGIN_ERROR_MESSAGE: (state, payload) => {

        return Object.assign({}, state, {
            statusText: payload.statusText
        });

    },
    REDUCER_CLEAN_SUCCESSFULLY: (state,payload)=>{

        return _.cloneDeep(initialState);

    },
});
