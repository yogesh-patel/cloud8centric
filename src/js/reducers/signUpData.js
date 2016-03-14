import {createReducer} from '../utils';
import _ from 'lodash';
import constants from '../constants';
import {pushState} from 'redux-router';

let {STEP_1_DATA_ADDED_SUCCESSFULLY,STEP_2_DATA_ADDED_SUCCESSFULLY,STEP_3_DATA_ADDED_SUCCESSFULLY,
     CIRCLE_STATUS_ADDED,STATUS_ADDED_SUCCESSFULLY} = constants;

const initialState = {
    status:'',
    circleStatus:'',
    step1:'',
    step2:'',
    step3:'',

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
        newState.status=payload;
        return newState;
    },
    'CIRCLE_STATUS_ADDED':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.circleStatus=payload;
        return newState;
    },
    'STEP_1_DATA_ADDED_SUCCESSFULLY':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.signupInfo.userinfo = payload;
        return newState;
    },
    'STEP_2_DATA_ADDED_SUCCESSFULLY':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.signupInfo.organizationInfo = payload;
        return newState;
    },
    'STEP_3_DATA_ADDED_SUCCESSFULLY':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.signupInfo.organizationInfo = payload;
        return newState;
    }
});
