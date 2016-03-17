import constants from '../constants';
import { push } from 'redux-router';
import { get } from './common';
import _ from 'lodash';

let {FETCH_SUBSCRIPTIONS, FETCH_PRODUCTS_AND_PLANS, ADD_NEW_SUBSCRIPTION, PRODUCT_SELECTED, SUBSCRIPTIONS_NAME_ADDED, PLAN_SELECTED, PRODUCT_DELETED} = constants;

export function fetchSubscriptions(organizationId){

    return(dispatch) => {
        dispatch({type:'FETCH_SUBSCRIPTIONS'});
        var endPointURL = 'api/v1/organizations/'+organizationId+'/subscriptions';

        get(endPointURL)
        .then((response)=>{

            var subscriptionObject = {};
            var contents = response.content;

            _.each(contents,(subscription)=>{
                subscriptionObject[subscription.subscriptionOption.product.id] = {
                    id:subscription.subscriptionOption.product.id,
                    name:subscription.subscriptionOption.product.name,
                    detail:null,
                    status:'Ready'
                }
            });

            dispatch({type:'SUBSCRIPTIONS_RECEIVED',
                payload:subscriptionObject
            });

        })
    }

}

export function getDetail(subscriptionId){

    return(dispatch) => {
        dispatch({type:'SUBSCRIPTION_DETAIL_REQUEST_SENT'});

        var interval = setInterval(()=>{
            clearInterval(interval);
            dispatch({type:'SUBSCRIPTION_DETAIL_RECEIVED',payload:{
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
        dispatch({type:'FETCH_PRODUCTS_AND_PLANS'});
        dispatch(push("dashboard/subscriptions/create"));
    }

}

export function addNewSubscription() {

    return {
        type: 'ADD_NEW_SUBSCRIPTION'
    }

}

export function productSelected(rowNumber, productName){

    return {
        type: 'PRODUCT_SELECTED',
        payload: {
            rowNumber: rowNumber,
            productName: productName
        }
    }

}

export function planSelected(rowNumber, planName){

    return {
        type: 'PLAN_SELECTED',
        payload: {
            rowNumber: rowNumber,
            planName: planName
        }
    }

}

export function productDeleted(rowNumber){

    return {
        type: 'PRODUCT_DELETED',
        payload: {
            rowNumber: rowNumber,
        }
    }

}
