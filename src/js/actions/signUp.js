
import { pushState } from 'redux-router';
import constants from '../constants';
 import { post } from './common';

let {STEP_1_DATA_ADDED_SUCCESSFULLY,STEP_2_DATA_ADDED_SUCCESSFULLY,STEP_3_DATA_ADDED_SUCCESSFULLY,SIGNUP_USER_REQUEST,
    SHOW_LOGIN,SIGNUP_USER_FAILURE,SIGNUP_USER_SUCCESS,ON_BACK_CLICK,STATUS_ADDED_SUCCESSFULLY,
    SHOW_SIGN_UP_SUCCESS_COMP} = constants;

export function saveStatus(status){
    return (dispatch)=>{
        dispatch( {
            type:STATUS_ADDED_SUCCESSFULLY,
            payload:status
        });
    }
}

export function step_1_Data(data){
    return (dispatch)=>{
        dispatch( {
            type:STEP_1_DATA_ADDED_SUCCESSFULLY,
            payload:data
        });
    }
}

export function step_2_Data(data){
    return (dispatch)=>{
        dispatch( {
            type:STEP_2_DATA_ADDED_SUCCESSFULLY,
            payload:data
        });
    }
}

export function step_3_Data(data){
    return (dispatch)=>{
        dispatch( {
            type:STEP_3_DATA_ADDED_SUCCESSFULLY,
            payload:data
        });
    }
}

export function onBackClick(circleStatus){
    return (dispatch)=>{
        dispatch( {
            type:ON_BACK_CLICK,
            payload:circleStatus
        });
    }
}

export function onComponentRemoved(data){
    return (dispatch)=>{
        dispatch( {
            type:'DATA_ADDED_ON_BACK_CLICK',
            payload:data
        });
    }
}

export function submitSignupForm(signupData){
    return (dispatch)=>{
        dispatch({type:'SIGNUP_USER_REQUEST'});
        var endPointURL = 'api/v1/signUp';
        post(endPointURL,signupData)
        .then((response)=>{
            dispatch({type:'SIGNUP_USER_SUCCESS'});
            dispatch({type:'SHOW_SIGN_UP_SUCCESS_COMP'});
        }).catch(error => {
            dispatch({
                type:'SIGNUP_USER_FAILURE',
                payload: error.message
            });
        })
    }
}
