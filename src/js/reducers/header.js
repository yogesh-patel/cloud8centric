import {createReducer} from '../utils';
import constants from '../constants';

let {SHOW_NAVIGATION_MENU, HIDE_NAVIGATION_MENU} = constants;

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
