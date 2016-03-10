import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import auth from './auth';
import product from './product';
import signUp from './signUpData';
import app from './app';
import header from './header';

export default combineReducers({
    auth,
    app,
    signUp,
    product,
    header,
    router: routerStateReducer
});
