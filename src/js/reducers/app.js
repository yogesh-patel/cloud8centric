import {createReducer} from '../utils';
import {SHOW_LOGIN} from '../constants';
import {pushState} from 'redux-router';
import _ from 'lodash';

const initialState = {
    loginScreen: false,
    homeScreen: true,
    forgotPasswordScreen: false,
    forgotMessageScreen: false,
    signUpScreen:false,
    loading:false,
    signupSuccessComponent:false,
};

export default createReducer(initialState, {
    SHOW_LOGIN: (state, payload) => {
        return Object.assign({}, state, {
            loginScreen: true,
            forgotPasswordScreen: false,
            forgotMessageScreen: false,
            homeScreen: false
        });
    },
    SHOW_FORGOT_PASSWORD: (state, payload) => {
        return Object.assign({}, state, {
            loginScreen: false,
            forgotPasswordScreen: true,
            forgotMessageScreen: false,
            homeScreen: false
        });
    },
    SHOW_HOME: (state, payload) => {
        return Object.assign({}, state, {
            loginScreen: false,
            forgotPasswordScreen: false,
            forgotMessageScreen: false,
            signUpScreen:false,
            homeScreen: true
        });
    },
    SHOW_FORGOT_MESSAGE: (state, payload) => {
        return Object.assign({}, state, {
            loginScreen: false,
            forgotPasswordScreen: false,
            forgotMessageScreen: true,
            homeScreen: false,
            signUpScreen:false,
        });
    },
    SHOW_SIGN_UP: (state, payload) => {
        return Object.assign({}, state, {
            loginScreen:false,
            signUpScreen:true,
            homeScreen:false
        });
    },
    LOGIN_USER_REQUEST: (state, payload) => {
        return Object.assign({}, state, {
            loading:true
        });
    },
    LOGIN_USER_FAILURE: (state, payload) => {
        return Object.assign({}, state, {
            loading:false
        });
    },
    LOGIN_USER_SUCCESS: (state, payload) => {
        return Object.assign({}, state, {
            loading:false
        });
    },
    SUBSCRIPTION_DETAIL_REQUEST_SENT: (state, payload) => {
        return Object.assign({}, state, {
            loading:true
        });

    },
    SUBSCRIPTION_STATUS_RECEIVED: (state, payload) => {
        return Object.assign({}, state, {
            loading:false
        });

    },
    SIGNUP_USER_REQUEST: (state, payload) => {
        return Object.assign({}, state, {
            loading:true
        });
    },
    SIGNUP_USER_SUCCESS: (state, payload) => {
        return Object.assign({}, state, {
            loading:false
        });
    },
    SIGNUP_USER_FAILURE: (state, payload) => {
        return Object.assign({}, state, {
            loading:false
        });
    },
    FETCH_SUBSCRIPTIONS: (state, payload) => {
        return Object.assign({}, state, {
            loading:true
        });
    },
    SUBSCRIPTIONS_RECEIVED: (state, payload) => {
        return Object.assign({}, state, {
            loading:false
        });
    },
    FETCH_ORGANIZATIONS: (state, payload) => {
        return Object.assign({}, state, {
            //loading:true
        });
    },
    ORGANIZATIONS_RECEIVED: (state, payload) => {
        return Object.assign({}, state, {
            loading:false
        });
    },
    SHOW_SIGN_UP_SUCCESS_COMP: (state, payload) => {
        return Object.assign({}, state, {
            loginScreen: false,
            forgotPasswordScreen: false,
            forgotMessageScreen: false,
            homeScreen: false,
            signUpScreen:false,
            signupSuccessComponent:true
        });
    },
    REDUCER_CLEAN_SUCCESSFULLY: (state,payload)=>{
        return _.cloneDeep(initialState);
    },
    FETCH_PRODUCTS_AND_PLANS: (state, payload) => {
        return Object.assign({}, state, {
            loading:true
        });
    },
    PRODUCTS_AND_PLANS_RECEIVED: (state, payload) => {
        return Object.assign({}, state, {
            loading:false
        });
    },
});
