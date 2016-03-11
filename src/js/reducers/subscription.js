import {createReducer} from '../utils';
import constants from '../constants';

let {FETCH_SUBSCRIPTIONS, FETCH_PRODUCTS_AND_PLANS} = constants;

const initialState = {
    subscriptionList: {

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
                    ,
    productList:[
                    {
                        'productID': 1,
                        'name': 'Web Collection Book',
                        'description': 'Web Collection Book information'
                    },
                    {
                        'productID': 2,
                        'name': 'Field Testing',
                        'description': 'Field Testing information'
                    },
                    {
                        'productID': 3,
                        'name': 'C8 Server',
                        'description': 'C8 Server information'
                    }
                ],
    paymentPlans:[
                    {
                        'planID': 1,
                        'name': 'Gold'
                    },
                    {
                        'planID': 2,
                        'name': 'Silver'
                    },
                    {
                        'planID': 3,
                        'name': 'Bronze'
                    }
                ]
};

export default createReducer(initialState, {
    [FETCH_SUBSCRIPTIONS]: (state, payload) => {
        return Object.assign({}, state, {
            //'subscriptionList': payload.subscriptionList
        });

    },
    [FETCH_PRODUCTS_AND_PLANS]: (state, payload) => {
        return Object.assign({}, state, {
            // 'productList': payload.productList,
            // 'paymentPlans': payload.paymentPlans
        });

    }
});
