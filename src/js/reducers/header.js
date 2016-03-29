import {createReducer} from '../utils';
import constants from '../constants';
import _ from 'lodash';

const initialState = {
    showNavigation: false,
    showProducts: false
};

export default createReducer(initialState, {
    SHOW_NAVIGATION_MENU: (state, payload) => {
        return Object.assign({}, state, {
            showNavigation: payload
        });
    },
    REDUCER_CLEAN_SUCCESSFULLY: (state, payload)=> {
        return _.cloneDeep(initialState);
    },
    SHOW_PRODUCTS: (state, payload) => {
        return Object.assign({}, state, {
            showProducts: payload
        });
    }
});
