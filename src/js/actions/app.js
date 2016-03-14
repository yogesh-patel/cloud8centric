/**
 * Created by synerzip on 10/03/16.
 */

import constants from '../constants';
let {SHOW_LOGIN,SHOW_HOME,SHOW_FORGOT_PASSWORD, SHOW_FORGOT_MESSAGE} = constants;

export function showLogin() {
    return {
        type: SHOW_LOGIN
    }
}

export function showForgotPassword() {
    return {
        type: SHOW_FORGOT_PASSWORD
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
