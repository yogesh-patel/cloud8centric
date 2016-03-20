import { get } from './common';
import constants from '../constants';

let {FETCH_ORGANIZATIONS, ORGANIZATIONS_RECEIVED, SET_ACTIVE_ORGANIZATION} = constants;

export function fetchOrganizations(organizationId){

    return(dispatch) => {
        dispatch({type:FETCH_ORGANIZATIONS});

        let endPointURL = 'organizations';

        get(endPointURL)
        .then((response)=>{

            let organizationList = response.content;

            // Set first organization as active organization
            localStorage.setItem('active_organization', organizationList[0]);

            dispatch({type:ORGANIZATIONS_RECEIVED,
                payload: {
                    organizationList: organizationList,
                    activeOrganization: organizationList[0]
                }
            });

        })
    }

}

export function fetchOrganizationDetails(organization){

    return(dispatch) => {

        localStorage.setItem('active_organization', organization);

        dispatch({type:SET_ACTIVE_ORGANIZATION,
            payload: {
                activeOrganization: organization
            }
        });

    }

}
