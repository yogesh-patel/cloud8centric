
import {DATA_ADDED_SUCCESSFULLY} from '../constants';
import { pushState } from 'redux-router';

export function signUp(emp){
    return (dispatch)=>{
        dispatch({
            type:DATA_ADDED_SUCCESSFULLY,
            payload:emp
        });
        dispatch(pushState(null,"/"));
    }

}
