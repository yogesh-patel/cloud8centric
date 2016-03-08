import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import auth from './auth';
import product from './product';

export default combineReducers({
    auth,
    product,
    router: routerStateReducer
});
