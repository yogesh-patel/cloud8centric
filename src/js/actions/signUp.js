
import {DATA_ADDED_SUCCESSFULLY} from '../constants';
import { pushState } from 'redux-router';

export function signUp(profile){
    return (dispatch)=>{
        //Submit data
        // on Success - > Login
        //On success login -> local storage save token
        dispatch(pushState(null,"/"));
    }

}
