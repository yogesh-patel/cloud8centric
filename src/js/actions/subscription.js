import constants from '../constants';
import { push } from 'redux-router';

let {FETCH_SUBSCRIPTIONS, FETCH_PRODUCTS_AND_PLANS} = constants;

export function fetchSubscriptions(){

    return(dispatch) => {
        dispatch({
            // TODO: API call to fetch subscriptions
            type:FETCH_SUBSCRIPTIONS
        });
        dispatch(push("/dashboard/subscriptions"));
    }

}

export function fetchProductsAndPlans(){

    return(dispatch) => {
        dispatch({
            // TODO: API call to fetch products and plans
            type:FETCH_PRODUCTS_AND_PLANS
        });
        dispatch(push("dashboard/subscriptions/create"));
    }

}
