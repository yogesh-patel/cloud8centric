/**
 * Created by synerzip on 10/03/16.
 */
import {createReducer} from '../utils';
import {SHOW_LOGIN} from '../constants';
import {pushState} from 'redux-router';

const initialState = {
    loginScreen:false,
    homeScreen:true,
    signUpScreen:false
};

export default createReducer(initialState, {
    'SHOW_LOGIN': (state, payload) => {
        return Object.assign({}, state, {
            loginScreen:true,
            signUpScreen:false,
            homeScreen:false
        });
    },
    'SHOW_HOME': (state, payload) => {
        return Object.assign({}, state, {
            loginScreen:false,
            signUpScreen:false,
            homeScreen:true
        });
    },
    'SHOW_SIGN_UP': (state, payload) => {
        return Object.assign({}, state, {
            loginScreen:false,
            signUpScreen:true,
            homeScreen:false
        });
    },
});
