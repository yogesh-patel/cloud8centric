/**
 * Created by synerzip on 12/03/16.
 */
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