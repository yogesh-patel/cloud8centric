/**
 * Created by synerzip on 12/03/16.
 */
import {createReducer} from '../utils';
import {SHOW_LOGIN} from '../constants';
import {pushState} from 'redux-router';
import _ from 'lodash';

const initialState = {
    showProducts:false
};

export default createReducer(initialState, {
    'SHOW_PRODUCTS': (state, payload) => {
        return Object.assign({}, state, {
            showProducts:true
        });
    },
    'HIDE_PRODUCTS': (state, payload) => {
        return Object.assign({}, state, {
            showProducts:false
        });
    },
    'REDUCER_CLEAN_SUCCESSFULLY':(state,payload)=>{
        return _.cloneDeep(initialState);
    },
});
