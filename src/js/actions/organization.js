import { get } from './common';
import constants from '../constants';

let {FETCH_ORGANIZATIONS, ORGANIZATIONS_RECEIVED} = constants;

export function fetchOrganizations(organizationId){

    return(dispatch) => {
        dispatch({type:FETCH_ORGANIZATIONS});

        let endPointURL = 'organizations';

        get(endPointURL)
        .then((response)=>{

            let organizationList = response.content;
            dispatch({type:ORGANIZATIONS_RECEIVED,
                payload: {
                    organizationList: organizationList
                }
            });

            // Set first organization as active organization
            let active_organization = organizationList[0];
            localStorage.setItem('active_organization', active_organization);

        })
    }

}
