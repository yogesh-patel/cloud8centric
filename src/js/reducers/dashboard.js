import {createReducer} from '../utils';
import {SHOW_LOGIN} from '../constants';
import {pushState} from 'redux-router';
import _ from 'lodash';

const initialState = {};

export default createReducer(initialState, {
    REDUCER_CLEAN_SUCCESSFULLY: (state, payload)=> {
        return _.cloneDeep(initialState);
    },
});
