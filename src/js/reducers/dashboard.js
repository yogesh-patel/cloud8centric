import {createReducer} from '../utils';
import constants from '../constants';
import _ from 'lodash';

const initialState = {};

export default createReducer(initialState, {
    REDUCER_CLEAN_SUCCESSFULLY: (state, payload)=> {
        return _.cloneDeep(initialState);
    },
});
