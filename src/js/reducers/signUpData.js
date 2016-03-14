import {createReducer} from '../utils';
import _ from 'lodash';
import constants from '../constants';
import {pushState} from 'redux-router';

let {DATA_ADDED_SUCCESSFULLY, CIRCLE_STATUS_ADDED} = constants;

const initialState = {
    status:'',
    circleStatus:'',
    step1:'',
    step2:'',
    step3:''
};

export default createReducer(initialState, {
    'DATA_ADDED_SUCCESSFULLY':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.status=payload;
        return newState;
    },
    'CIRCLE_STATUS_ADDED':(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.circleStatus=payload;
        return newState;
    }
});
