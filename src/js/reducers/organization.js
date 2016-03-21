import {createReducer} from '../utils';
import _ from 'lodash';

const initialState = {
    organizationList: null,
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
    'SET_ACTIVE_ORGANIZATION': (state, payload) => {
        return Object.assign({}, state, {
            'activeOrganization': payload.activeOrganization
        });
    }
});
