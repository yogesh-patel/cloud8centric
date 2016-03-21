import constants from '../constants';

export function showHome(){

    return (dispatch=>{
        dispatch(push("/dashboard/home"));
    })

}
