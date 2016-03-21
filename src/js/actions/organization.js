import { get } from './common';
import constants from '../constants';
let {FETCH_ORGANIZATIONS, ORGANIZATION_SELECTED} = constants;
import { push } from 'redux-router';

export function fetchOrganizations(organizationId) {

    return (dispatch) => {
        dispatch({type: 'FETCH_ORGANIZATIONS'});
        var endPointURL = 'api/v1/organizations';

        get(endPointURL)
            .then((response)=> {

                dispatch({
                    type: 'ORGANIZATIONS_RECEIVED',
                    payload: {
                        organizationList: response.content
                    }
                });

            })
    }
}

export function selectOrganization(org) {
    return (dispatch)=> {
        dispatch({
            type: 'ORGANIZATION_SELECTED',
            payload: org
        });
       // dispatch(push("/dashboard/organizationEdit"));
        //dispatch(push("/dashboard/organizations"));
    }
}

//export function fetchProductsAndPlans(){
//
//    return(dispatch) => {
//        dispatch({type:'FETCH_ORGANIZATION_DETAILS'});
//        dispatch(push("dashboard/organizations/"edit/" + org.id"));
//    }
//
//}
