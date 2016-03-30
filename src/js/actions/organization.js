import { get, post } from './common';
import constants from '../constants';
import { push } from 'redux-router';
import { checkHttpStatus, parseJSON } from '../utils';
import _ from 'lodash';

let {FETCH_ORGANIZATIONS, ORGANIZATIONS_RECEIVED, ORGANIZATION_SELECTED,
    SHOW_ORGANIZATION_DETAILS, SHOW_SUBSCRIPTION_DETAILS, ORGANIZATION_CREATED,
    ORGANIZATION_CREATION_FAILED, CURRENT_PAGE_OF_ORGANIZATION_LIST} = constants;

export function fetchOrganizations(offset) {

    return (dispatch) => {
        // dispatch({type: FETCH_ORGANIZATIONS});

        //let endPointURL = 'organizations';
        let endPointURL = 'organizations?offset=' + offset + '&limit=10&sortBy=id&sort=ASC'

        get(endPointURL)
            .then((response)=> {

                let organizationList = response.content;

                if(_.size(organizationList) > 0){

                    dispatch({type: FETCH_ORGANIZATIONS});

                    getOrganizationDetails(organizationList[0].id)
                        .then((orgResponse)=>{

                            // Set first organization as active organization
                            localStorage.setItem('active_organization', organizationList[0].id);

                            dispatch({
                                type: ORGANIZATIONS_RECEIVED,
                                payload: {
                                    organizationList: organizationList,
                                    selectedOrganization: organizationList[0],
                                    organizationDetails: orgResponse
                                }
                            });
                    })

                }

        })

    }

}

export function selectOrganization(organization) {
    return (dispatch)=> {

        localStorage.setItem('active_organization', organization.id);

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
                dispatch({
                    type:ORGANIZATION_CREATED
                })

                dispatch(push("/dashboard/organizations"));

            }).catch(error=>{
                parseJSON(error).then((errorObj)=>{
                     dispatch({
                        type:ORGANIZATION_CREATION_FAILED,
                        payload: errorObj.message
                    });
                })
            })
    }

}

export function showOrganizationDetails(selectedOption, activeKey) {

    return {
        type: SHOW_ORGANIZATION_DETAILS,
        payload: {
            selectedOption: selectedOption,
            activeKey: activeKey
        }
    }

}

export function showSubscriptionDetail(selectedOption, activeKey) {

    return {
        type: SHOW_SUBSCRIPTION_DETAILS,
        payload: {
            selectedOption: selectedOption,
            activeKey: activeKey
        }
    }

}

function getOrganizationDetails(organizationId){

    let endPointURL = 'organizations/'+organizationId;
    return get(endPointURL);

}

export function saveCurrentPageNumber(page) {
    let offset = (page - 1) * 10;
    // return {
    //     type: CURRENT_PAGE_OF_ORGANIZATION_LIST,
    //     payload: offset
    // }
    return (dispatch) => {
        dispatch({

            type: CURRENT_PAGE_OF_ORGANIZATION_LIST,
            payload: offset

        });
        dispatch(fetchOrganizations(offset));
    }


}
