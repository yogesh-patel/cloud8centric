import { get } from './common';

export function fetchOrganizations(organizationId){

    return(dispatch) => {
        dispatch({type:'FETCH_ORGANIZATIONS'});
        var endPointURL = 'api/v1/organizations';

        get(endPointURL)
        .then((response)=>{

            dispatch({type:'ORGANIZATIONS_RECEIVED',
                payload: {
                    organizationList: response.content
                }
            });

        })
    }

}
