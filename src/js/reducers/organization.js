import {createReducer} from '../utils';
import _ from 'lodash';

const initialState = {
    organizationList: null
};

export default createReducer(initialState, {
    'ORGANIZATIONS_RECEIVED': (state, payload) => {
        return Object.assign({}, state, {
            'organizationList': payload.organizationList
        });

    }
});
