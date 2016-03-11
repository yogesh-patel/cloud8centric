
import { pushState } from 'redux-router';
import constants from '../constants';

let {DATA_ADDED_SUCCESSFULLY} = constants;

export function saveStatus(status){
    return (dispatch)=>{
        dispatch( {
            type:DATA_ADDED_SUCCESSFULLY,
            payload:status
        });
        //Submit data
        // on Success - > Login
        //On success login -> local storage save token
        dispatch(pushState(null,"signup"));
    }

}
