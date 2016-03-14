
import { pushState } from 'redux-router';
import constants from '../constants';

let {DATA_ADDED_SUCCESSFULLY,CIRCLE_STATUS_ADDED} = constants;

export function saveStatus(status){
    return (dispatch)=>{
        dispatch( {
            type:DATA_ADDED_SUCCESSFULLY,
            payload:status
        });
        //Submit data
        // on Success - > Login
        //On success login -> local storage save token
    }
}

export function saveCircleStatus(circleStatus){
    return (dispatch)=>{
        dispatch( {
            type:CIRCLE_STATUS_ADDED,
            payload:circleStatus
        });
        //Submit data
        // on Success - > Login
        //On success login -> local storage save token
    }
}
