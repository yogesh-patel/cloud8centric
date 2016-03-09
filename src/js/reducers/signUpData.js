import {createReducer} from '../utils';
import {DATA_ADDED_SUCCESSFULLY} from '../constants';
import _ from 'lodash';

const initialState = {
    employees:[
        {
            username:1,
            password:'Yogesh',
        }
    ]
};

export default createReducer(initialState, {
    [DATA_ADDED_SUCCESSFULLY]:(state,payload)=>{
        var newState = _.cloneDeep(state);
        newState.employees.push(payload);
        alert(employees.length);
        return newState;
    }
});
