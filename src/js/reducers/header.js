import {createReducer} from '../utils';
import constants from '../constants';
import _ from 'lodash';

const initialState = {
    toggleClass: ''
};

export default createReducer(initialState, {
    SHOW_NAVIGATION_MENU: (state, payload) => {
        return Object.assign({}, state, {
            toggleClass: 'open'
        });
    },
    HIDE_NAVIGATION_MENU: (state, payload) => {
        return Object.assign({}, state, {
            toggleClass: ''
        });
    },
    REDUCER_CLEAN_SUCCESSFULLY: (state,payload)=>{
        return _.cloneDeep(initialState);
    },
});
