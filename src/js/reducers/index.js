import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import auth from './auth';
import product from './product';
import signUp from './signUpData';

export default combineReducers({
    auth,
    signUp,
    product,
    router: routerStateReducer
});
