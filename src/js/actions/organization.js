import { get, post } from './common';
import constants from '../constants';
import { push } from 'redux-router';
let {FETCH_ORGANIZATIONS, ORGANIZATIONS_RECEIVED,ORGANIZATION_SELECTED} = constants;

export function fetchOrganizations(organizationId) {

      return(dispatch) => {
        dispatch({type:FETCH_ORGANIZATIONS});

        let endPointURL = 'organizations';


        get(endPointURL)
            .then((response)=> {


                dispatch({
                    type: 'ORGANIZATIONS_RECEIVED',
                    payload: {
                        organizationList: response.content
                    }
                });

            let organizationList = response.content;

            // Set first organization as active organization
            localStorage.setItem('active_organization', organizationList[0]);

            dispatch({type:ORGANIZATIONS_RECEIVED,
                payload: {
                    organizationList: organizationList,
                    selectedOrganization: organizationList[0]
                }
            });
            })
    }
}

export function selectOrganization(organization) {
    return (dispatch)=> {
        localStorage.setItem('active_organization', organization);

        dispatch({
            type: 'ORGANIZATION_SELECTED',
            payload: organization
        });
    }
}

export function addOrganizationData(organization){
    return (dispatch)=>{

        let endPointURL = 'organizations';

        post(endPointURL,organization)
        .then((response)=>{
             dispatch(push("/dashboard/organizations"));
        }).catch(error => {
            dispatch({
            });
        })
    }

}
