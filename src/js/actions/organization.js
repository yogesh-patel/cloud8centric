import { get } from './common';
import constants from '../constants';

let {FETCH_ORGANIZATIONS, ORGANIZATIONS_RECEIVED} = constants;

export function fetchOrganizations(organizationId){

    return(dispatch) => {
        dispatch({type:FETCH_ORGANIZATIONS});
        var endPointURL = 'organizations';

        get(endPointURL)
        .then((response)=>{

            dispatch({type:ORGANIZATIONS_RECEIVED,
                payload: {
                    organizationList: response.content
                }
            });

        })
    }

}
