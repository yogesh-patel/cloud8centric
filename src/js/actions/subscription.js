import constants from '../constants';
import { push } from 'redux-router';
import { get } from './common';
import _ from 'lodash';

let {FETCH_SUBSCRIPTIONS, FETCH_PRODUCTS_AND_PLANS, ADD_NEW_SUBSCRIPTION, PRODUCT_SELECTED, PLAN_SELECTED, PRODUCT_DELETED, CREATE_SUBSCRIPTION, PRODUCTS_AND_PLANS_RECEIVED, SUBSCRIPTIONS_RECEIVED, SUBSCRIPTION_DETAIL_REQUEST_SENT, SUBSCRIPTION_STATUS_RECEIVED} = constants;

export function fetchSubscriptions(organizationId){

    return(dispatch) => {
        dispatch({type:FETCH_SUBSCRIPTIONS});

        let endPointURL = 'organizations/'+organizationId+'/subscriptions';

        get(endPointURL)
        .then((response)=>{

            let subscriptionObject = {};
            let contents = response.content;

            _.each(contents,(subscription)=>{
                if(subscriptionObject[subscription.subscriptionOption]){
                    subscriptionObject[subscription.subscriptionOption.product.id] = {
                        id:subscription.subscriptionOption.product.id,
                        name:subscription.subscriptionOption.product.name,
                        detail:null,
                        status:'Ready'
                    }
                }
            });

            dispatch({type:SUBSCRIPTIONS_RECEIVED,
                payload:subscriptionObject
            });

        })
    }

}

export function getSubscriptionStatus(subscriptionId){

    return(dispatch) => {
        dispatch({type:SUBSCRIPTION_DETAIL_REQUEST_SENT});

        let endPointURL = 'product-status/'+subscriptionId;
        let subscriptionObject = null;

        // get(endPointURL)
        // .then((response)=>{

            // subscriptionObject = {
            //     subscriptionId:subscriptionId,
            //     productDetails:

            // }

        //     dispatch({type:dispatch({type:SUBSCRIPTION_STATUS_RECEIVED,payload:{,
        //         payload:subscriptionObject
        //     });

        // })

        let interval = setInterval(()=>{
            clearInterval(interval);
            dispatch({type:SUBSCRIPTION_STATUS_RECEIVED,payload:{
                subscriptionId:subscriptionId,
                detail:[
                    {
                        productId:1,
                        productName:'Product 0',
                        status:'Ready',
                        username:'username',
                        productURL:'URL'
                    },
                    {
                        productId:2,
                        productName:'Product 1',
                        status:'Error',
                        username:'username',
                        productURL:'URL'
                    }
                ]
            }});
        },200);

    }

}

export function fetchProductsAndPlans(){

    return(dispatch) => {
        dispatch({type:FETCH_PRODUCTS_AND_PLANS});

        let endPointURL = 'products';

        get(endPointURL)
        .then((response)=>{

            dispatch({type:PRODUCTS_AND_PLANS_RECEIVED,
                payload:{
                    productList: response.content
                }
            });

        })

        dispatch(push("dashboard/subscriptions/create"));
    }

}

export function addNewSubscription() {

    return {
        type:ADD_NEW_SUBSCRIPTION
    }

}

export function productSelected(rowNumber, productName){

    return {
        type:PRODUCT_SELECTED,
        payload: {
            rowNumber: rowNumber,
            productName: productName
        }
    }

}

export function planSelected(rowNumber, planName, productId){

    return {
        type:PLAN_SELECTED,
        payload: {
            rowNumber: rowNumber,
            planName: planName,
            productId: productId
        }
    }

}

export function productDeleted(rowNumber){

    return {
        type:PRODUCT_DELETED,
        payload: {
            rowNumber: rowNumber,
        }
    }

}

export function createNewSubscription(subscriptionInfo){

    return(dispatch) => {
        dispatch({type:CREATE_SUBSCRIPTION});
        // API call for creating subscription
        dispatch(push("dashboard/subscriptions"));
    }

}
