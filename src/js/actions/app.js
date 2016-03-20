/**
 * Created by synerzip on 10/03/16.
 */

import constants from '../constants';
let {SHOW_LOGIN, SHOW_HOME, SHOW_FORGOT_PASSWORD, SHOW_FORGOT_MESSAGE,
     SHOW_SIGN_UP, SHOW_SIGN_UP_SUCCESS_COMP, REDUCER_CLEAN_SUCCESSFULLY, SIGNUP_USER_SUCCESS} = constants;

export function showLogin() {
    return {
        type: SHOW_LOGIN
    }
}

export function showHome() {
    return {
        type: SHOW_HOME
    }
}

export function showForgotMessage(){
    return {
        type: SHOW_FORGOT_MESSAGE
    }
}

export function showForgotPassword() {
    return {
        type: SHOW_FORGOT_PASSWORD
    }
}

export function showSignUpSuccessFully() {
    return {
        type: SHOW_SIGN_UP_SUCCESS_COMP
    }
}

export function showSignUp(){
    return (dispatch)=>{
        dispatch({type:SHOW_SIGN_UP});
        dispatch({type:SIGNUP_USER_SUCCESS});
    }
}

export function cleanReducer(){
    return (dispatch)=>{
        dispatch({type:REDUCER_CLEAN_SUCCESSFULLY});
    }
}
