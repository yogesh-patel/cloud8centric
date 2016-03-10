import {createReducer} from '../utils';
import {SHOW_LOGIN} from '../constants';
import {pushState} from 'redux-router';

const initialState = {
    toggleClass: ''
};

export default createReducer(initialState, {
    'SHOW_NAVIGATION_MENU': (state, payload) => {
        return Object.assign({}, state, {
            toggleClass: 'open'
        });
    },
    'HIDE_NAVIGATION_MENU': (state, payload) => {
        return Object.assign({}, state, {
            toggleClass: ''
        });
    },
});
