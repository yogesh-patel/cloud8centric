import {createReducer} from '../utils';
import _ from 'lodash';
import constants from '../constants';
import {pushState} from 'redux-router';

let {STEP_1_DATA_ADDED_SUCCESSFULLY,STEP_2_DATA_ADDED_SUCCESSFULLY,STEP_3_DATA_ADDED_SUCCESSFULLY,
     SIGNUP_USER_FAILURE,ON_BACK_CLICK,STATUS_ADDED_SUCCESSFULLY,SIGNUP_USER_SUCCESS} = constants;

const initialState = {
    step_1_Status:false,
    step_2_Status:false,
    step_3_Status:false,
    currentStep:'step1',
    statusText:'',

    signupInfo:{
        "organizationInfo": {
          "addressLine1": "",
          "addressLine2": "",
          "addressLine3": "",
          "city": "",
          "country": "",
          "organizationName": "",
          "organizationURL": "",
          "phoneNumber": "",
          "province": "",
          "zipCode": ""
        },
        "userinfo": {
          "emailAddress": "",
          "firstName": "",
          "lastName": "",
          "password": "",
          "confirmPassword": "",
          "username": "",
          "roles": ["AccountOwner"]
        }
      }
};

export default createReducer(initialState, {
    'STATUS_ADDED_SUCCESSFULLY':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.currentStep = payload;
        return newState;
    },
    'ON_BACK_CLICK':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.currentStep = payload;
        return newState;
    },
    'STEP_1_DATA_ADDED_SUCCESSFULLY':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.signupInfo.userinfo = payload;
        newState.currentStep = 'step2';
        newState.step_1_Status = true;
        return newState;
    },
    'STEP_2_DATA_ADDED_SUCCESSFULLY':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.signupInfo.organizationInfo = payload;
        newState.currentStep = 'step3';
        newState.step_2_Status = true;
        return newState;
    },
    'STEP_3_DATA_ADDED_SUCCESSFULLY':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.signupInfo.organizationInfo = payload;
        newState.step_3_Status = true;
        return newState;
    },
    'DATA_ADDED_ON_BACK_CLICK':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.signupInfo.organizationInfo = payload;
        return newState;
    },
    'SIGNUP_USER_FAILURE':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.statusText = payload;
        return newState;
    },
    'SIGNUP_USER_SUCCESS':(state,payload)=>{
        return _.cloneDeep(initialState);
    },
});
