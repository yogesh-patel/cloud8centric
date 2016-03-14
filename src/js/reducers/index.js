import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import auth from './auth';
import product from './product';
import signUp from './signUpData';
import app from './app';
import signUpData from './signUpData';
import header from './header';
import subscription from './subscription';
import dashboard from './dashboard';

export default combineReducers({
    auth,
    dashboard,
    app,
    signUpData,
    product,
    header,
    subscription,
    router: routerStateReducer
});
