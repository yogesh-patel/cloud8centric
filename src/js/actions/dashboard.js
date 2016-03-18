import constants from '../constants';
import { push } from 'redux-router';


export function showHome(){
    return (dispatch=>{
        dispatch(push("/dashboard/home"));
    })
}

export function showSubscription(){
    return (dispatch=>{
        dispatch(push("/dashboard/subscriptions"));
    })
}

export function showOrganization(){
    return (dispatch=>{
        dispatch(push("/dashboard/organizations"));
    })
}
