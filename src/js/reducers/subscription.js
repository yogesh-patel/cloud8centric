import {createReducer} from '../utils';
import constants from '../constants';
import _ from 'lodash';

let {FETCH_SUBSCRIPTIONS, FETCH_PRODUCTS_AND_PLANS} = constants;

const initialState = {
    subscriptionList: null,
    disabled: true,
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
    'SUBSCRIPTIONS_RECEIVED': (state, payload) => {
        return Object.assign({}, state, {
            'subscriptionList': payload
        });

    },
    'FETCH_PRODUCTS_AND_PLANS': (state, payload) => {
        return Object.assign({}, state, {
            // 'productList': payload.productList,
            // 'paymentPlans': payload.paymentPlans
        });

    },

    'SUBSCRIPTION_DETAIL_RECEIVED': (state, payload) => {
        var _state = _.cloneDeep(state);
        _state.subscriptionDetailLoading = false;

        _state.subscriptionList[payload.subscriptionId].detail = payload.detail;

        return _state;

    },
    'LOG_OUT':(state, payload) => {
        return Object.assign({}, state, {
            'subscriptionList': null,
            'productList':null,
            'paymentPlans':null
        });
    },
    'REDUCER_CLEAN_SUCCESSFULLY':(state,payload)=>{
        return _.cloneDeep(initialState);
    },
});
