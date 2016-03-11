/**
 * Created by synerzip on 10/03/16.
 */
import {createReducer} from '../utils';
import {SHOW_LOGIN} from '../constants';
import {pushState} from 'redux-router';

const initialState = {
    loginScreen: false,
    homeScreen: true,
    forgotPasswordScreen: false
};

export default createReducer(initialState, {
    'SHOW_LOGIN': (state, payload) => {
        return Object.assign({}, state, {
            loginScreen: true,
            forgotPasswordScreen: false,
            homeScreen: false
        });
    },
    'SHOW_FORGOT_PASSWORD': (state, payload) => {
        console.log('payload::', payload);
        return Object.assign({}, state, {
            loginScreen: false,
            forgotPasswordScreen: true,
            homeScreen: false
        });
    },
    'SHOW_HOME': (state, payload) => {
        return Object.assign({}, state, {
            loginScreen: false,
            forgotPasswordScreen: false,
            homeScreen: true
        });
    },
});
