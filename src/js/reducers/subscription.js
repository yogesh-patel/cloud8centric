import {createReducer} from '../utils';
import constants from '../constants';
import _ from 'lodash';

let {FETCH_SUBSCRIPTIONS, FETCH_PRODUCTS_AND_PLANS} = constants;

const initialState = {
    selectedProducts:{
                        1:{}
                    },
    count: 1,
    subscriptionList: null,
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
    'ADD_NEW_SUBSCRIPTION': (state, payload) => {
        var _state = _.cloneDeep(state);
        _state.count++;
        _state.selectedProducts[_state.count] = {};

        return _state;
    },
    'PRODUCT_SELECTED': (state, payload) => {
        var _state = _.cloneDeep(state);

        _state.selectedProducts[payload.rowNumber].product = payload.productName;

        //Set error if current row has duplicate
        _.each(_.keys( _state.selectedProducts),(key)=>{
            if(key != payload.rowNumber){
                if( _state.selectedProducts[key].product == payload.productName){
                    _state.selectedProducts[payload.rowNumber].error = true;
                }
            }
        })

        // Unset error message
        _.each(_.keys( state.selectedProducts),(key)=> {
            if (key != payload.rowNumber) {
                var firstData = _state.selectedProducts[key];
                var duplicate = false;
                _.each(_.keys( state.selectedProducts),(secondKey)=> {
                    if(secondKey != key){
                        var secondData = _state.selectedProducts[secondKey];
                        if(secondData.product == firstData.product){
                            duplicate = true;
                        }
                    }
                });

                if(!duplicate && firstData.error == true){
                    firstData.error = false;
                }
            }
        });

        return _state;
    },
    'PLAN_SELECTED': (state, payload) => {
        var _state = _.cloneDeep(state);

        _state.selectedProducts[payload.rowNumber].plan = payload.planName;


        return _state;
    },
    'PRODUCT_DELETED': (state, payload) => {
        var _state = _.cloneDeep(state);

        delete _state.selectedProducts[payload.rowNumber];

        return _state;
    }
});
