import constants from '../constants';
import { push } from 'redux-router';
import {get} from './common';
import _ from 'lodash';

let {FETCH_SUBSCRIPTIONS, FETCH_PRODUCTS_AND_PLANS} = constants;

export function fetchSubscriptions(organizationId){

    return(dispatch) => {
        dispatch({type:'FETCH_SUBSCRIPTIONS'});
        var endPointURL = 'api/v1/organizations/'+organizationId+'/subscriptions';

        get(endPointURL).
        then((response)=>{
            var dataObject = {};
            var contents = response.content;
            _.each(contents,(content)=>{
                dataObject[content.subscriptionOption.product.id] = {
                    id:content.subscriptionOption.product.id,
                    name:content.subscriptionOption.product.name,
                    detail:null,
                    status:'Ready'
                }
            });
            dispatch({type:'SUBSCRIPTIONS_RECEIVED',
                payload:dataObject
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
