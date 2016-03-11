import {createReducer} from '../utils';
import _ from 'lodash';
import constants from '../constants';
import {pushState} from 'redux-router';

let {DATA_ADDED_SUCCESSFULLY, LOGIN_USER_FAILURE} = constants;

const initialState = {
    status:null,
    step2:null,
    step3:null
};

export default createReducer(initialState, {
    [DATA_ADDED_SUCCESSFULLY]:(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.status=payload;
        return newState;
    }
});
