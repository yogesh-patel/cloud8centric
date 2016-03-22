import {createReducer} from '../utils';
import _ from 'lodash';
import constants from '../constants';

const initialState = {
    organizationList: null,
    selectedOrganization:null,
    organizationDetails:null,
    organizationDetailsTab:true,
    subscriptionDetailsTab:false
};

export default createReducer(initialState, {
    ORGANIZATIONS_RECEIVED: (state, payload) => {
        return Object.assign({}, state, {
            organizationList: payload.organizationList,
            selectedOrganization: payload.selectedOrganization,
            organizationDetails: payload.organizationDetails
        });
    },
    REDUCER_CLEAN_SUCCESSFULLY: (state,payload)=>{
        return _.cloneDeep(initialState);
    },
    ORGANIZATION_SELECTED:(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.selectedOrganization = payload.selectedOrganization;
        newState.organizationDetails = payload.organizationDetails;
        return newState;
    },
    SHOW_ORGANIZATION_DETAILS: (state, payload) => {
        return Object.assign({}, state, {
            organizationDetailsTab:true,
            subscriptionDetailsTab:false
        });
    },
    SHOW_SUBSCRIPTION_DETAILS: (state, payload) => {
        return Object.assign({}, state, {
            organizationDetailsTab:false,
            subscriptionDetailsTab:true
        });
    },

});
