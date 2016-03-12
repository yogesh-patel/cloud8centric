import constants from '../constants';
import { push } from 'redux-router';

let {FETCH_SUBSCRIPTIONS, FETCH_PRODUCTS_AND_PLANS} = constants;

export function fetchSubscriptions(){

    return(dispatch) => {
        dispatch({type:'FETCH_SUBSCRIPTIONS'});

        var interval = setInterval(()=>{
            clearInterval(interval);
            dispatch({type:'SUBSCRIPTIONS_RECEIVED',
                payload:{
                    1:{
                        id: 1,
                        name: 'C8 Service',
                        status: 'Ready',
                        detail:null
                    },
                    2:{
                        id: 2,
                        name: 'Field Test Service',
                        status: 'In Progress',
                        detail:null
                    }
                }
            });
        },1000);

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
