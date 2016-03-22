import {createReducer} from '../utils';
import constants from '../constants';
import _ from 'lodash';

const initialState = {
    selectedProducts:{
                        1:{}
                    },
    count: 1,
    subscriptionList: null,
    productList:[],
    productTierList:[]
};

export default createReducer(initialState, {
    SUBSCRIPTIONS_RECEIVED: (state, payload) => {
        return Object.assign({}, state, {
            subscriptionList: payload
        });
    },
    PRODUCTS_AND_PLANS_RECEIVED: (state, payload) => {
        return Object.assign({}, state, {
            productList: payload.productList
        });
    },
    SUBSCRIPTION_STATUS_RECEIVED: (state, payload) => {
        var _state = _.cloneDeep(state);
        _state.subscriptionDetailLoading = false;

        _state.subscriptionList[payload.subscriptionId].detail = payload.detail;

        return _state;
    },
    LOG_OUT:(state, payload) => {
        return Object.assign({}, state, {
            subscriptionList: null,
            productList:null,
            paymentPlans:null
        });
    },
    REDUCER_CLEAN_SUCCESSFULLY:(state,payload)=>{
        return _.cloneDeep(initialState);
    },
    ADD_NEW_SUBSCRIPTION: (state, payload) => {
        var _state = _.cloneDeep(state);
        _state.count++;
        _state.selectedProducts[_state.count] = {};

        return _state;
    },
    PRODUCT_SELECTED: (state, payload) => {
        var _state = _.cloneDeep(state);
        _state.productTierList = [];
        let description = null;
        let productId = null;

        // Get all the product tier list for selected product
        _.map(_state.productList, (product) => {
            if(product.name == payload.productName){
                description = product.description;
                productId = product.id;

                _.map(product.productPlans, (plan)=>{
                    _state.productTierList.push(plan);
                });

            }
        });

        let hasDuplicate = false;

        _state.selectedProducts[payload.rowNumber].productName = payload.productName;
        _state.selectedProducts[payload.rowNumber].description = description;
        _state.selectedProducts[payload.rowNumber].productId = productId;

        _.each(_.keys( _state.selectedProducts),(key)=>{
            if(key != payload.rowNumber){
                if( _state.selectedProducts[key].productName == payload.productName){
                    _state.selectedProducts[payload.rowNumber].error = true;
                    hasDuplicate = true;
                }
            }
        });

        if(hasDuplicate){
            _.each(_.keys( _state.selectedProducts),(key)=>{
                if(key != payload.rowNumber){
                    _state.selectedProducts[key].disabled = true;
                    _state.selectedProducts[key].error = false;
                }
            });
        }
        else{
             _.each(_.keys( _state.selectedProducts),(key)=>{
                _state.selectedProducts[key].disabled = false;
                _state.selectedProducts[key].error = false;
            });
        }

        return _state;
    },
    PLAN_SELECTED: (state, payload) => {
        var _state = _.cloneDeep(state);
        let planId = null;

        // Get the product tier id for selected product tier
        _.map(_state.productList, (product) => {
            if(product.id == payload.productId){
                _.map(product.productPlans, (plan)=>{
                    if(plan.name == payload.planName){
                        planId = plan.id;
                    }
                });
            }
        });

        _state.selectedProducts[payload.rowNumber].planName = payload.planName;
        _state.selectedProducts[payload.rowNumber].planId = planId;

        return _state;
    },
    PRODUCT_DELETED: (state, payload) => {
        var _state = _.cloneDeep(state);

        delete _state.selectedProducts[payload.rowNumber];

        _.each(_.keys( _state.selectedProducts),(key)=>{
            _state.selectedProducts[key].disabled = false;
            _state.selectedProducts[key].error = false;
        });

        return _state;
    },
    CREATE_SUBSCRIPTION: (state, payload) => {
        var _state = _.cloneDeep(state);

        return _state;
    }
});
