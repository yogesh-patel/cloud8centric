import {createReducer} from '../utils';
import _ from 'lodash';
import constants from '../constants';

const initialState = {
    organizationList: null,
    selectedOrganization:null
};

export default createReducer(initialState, {
    ORGANIZATIONS_RECEIVED: (state, payload) => {
        return Object.assign({}, state, {
            'organizationList': payload.organizationList,
            'selectedOrganization': payload.selectedOrganization
        });
    },
    REDUCER_CLEAN_SUCCESSFULLY: (state,payload)=>{
        return _.cloneDeep(initialState);
    },
    ORGANIZATION_SELECTED:(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.selectedOrganization = payload;
        return newState;
    }
});
