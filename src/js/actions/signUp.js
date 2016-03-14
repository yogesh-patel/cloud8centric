
import { pushState } from 'redux-router';
import constants from '../constants';
 import { post } from './common';

let {STEP_1_DATA_ADDED_SUCCESSFULLY,STEP_2_DATA_ADDED_SUCCESSFULLY,STEP_3_DATA_ADDED_SUCCESSFULLY,SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,CIRCLE_STATUS_ADDED,STATUS_ADDED_SUCCESSFULLY} = constants;

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

export function saveCircleStatus(circleStatus){
    return (dispatch)=>{
        dispatch( {
            type:CIRCLE_STATUS_ADDED,
            payload:circleStatus
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
        });
    }
}
