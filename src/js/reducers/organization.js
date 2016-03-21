import {createReducer} from '../utils';
import _ from 'lodash';
import constants from '../constants';
let {ORGANIZATIONS_RECEIVED, ORGANIZATION_SELECTED} = constants;

const initialState = {
    organizationList: null,
    selectedOrganization:null,
    activeOrganization: null
};

export default createReducer(initialState, {
    'ORGANIZATIONS_RECEIVED': (state, payload) => {
        return Object.assign({}, state, {
            'organizationList': payload.organizationList,
            'activeOrganization': payload.activeOrganization
        });
    },
    'REDUCER_CLEAN_SUCCESSFULLY': (state,payload)=>{
        return _.cloneDeep(initialState);
    },
    [ORGANIZATION_SELECTED]:(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.selectedOrganization = payload;
        return newState;
    },
    'SET_ACTIVE_ORGANIZATION': (state, payload) => {
        return Object.assign({}, state, {
            'activeOrganization': payload.activeOrganization
        });
    }
});
