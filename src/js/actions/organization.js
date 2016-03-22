import { get, post } from './common';
import constants from '../constants';
import { push } from 'redux-router';

let {FETCH_ORGANIZATIONS, ORGANIZATIONS_RECEIVED, ORGANIZATION_SELECTED, SHOW_ORGANIZATION_DETAILS, SHOW_SUBSCRIPTION_DETAILS} = constants;

export function fetchOrganizations() {

    return (dispatch) => {
        dispatch({type: FETCH_ORGANIZATIONS});

        let endPointURL = 'organizations';


        get(endPointURL)
            .then((response)=> {

                let organizationList = response.content;

                getOrganizationDetails(organizationList[0].id)
                    .then((orgResponse)=>{

                        // Set first organization as active organization
                        localStorage.setItem('active_organization', organizationList[0]);

                        dispatch({
                            type: ORGANIZATIONS_RECEIVED,
                            payload: {
                                organizationList: organizationList,
                                selectedOrganization: organizationList[0],
                                organizationDetails: orgResponse
                            }
                        });

                })

        })

    }

}

export function selectOrganization(organization) {
    return (dispatch)=> {

        localStorage.setItem('active_organization', organization);

        getOrganizationDetails(organization.id)
            .then((orgResponse)=>{

                dispatch({
                    type: ORGANIZATION_SELECTED,
                    payload:{
                        selectedOrganization: organization,
                        organizationDetails: orgResponse
                    }

                });

        })

    }
}

export function addOrganizationData(organization) {
    return (dispatch)=> {

        let endPointURL = 'organizations';

        post(endPointURL, organization)
            .then((response)=> {
                dispatch(push("/dashboard/organizations"));
            }).catch(error => {
            dispatch({});
        })
    }

}

export function showOrganizationDetails() {

    return {
        type: SHOW_ORGANIZATION_DETAILS
    }

}

export function showSubscriptionDetail() {

    return {
        type: SHOW_SUBSCRIPTION_DETAILS
    }

}

function getOrganizationDetails(organizationId){

    let endPointURL = 'organizations/'+organizationId;
    return get(endPointURL);

}
