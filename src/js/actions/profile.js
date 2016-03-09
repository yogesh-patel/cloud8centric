/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 24/02/16.
 */

import { checkHttpStatus, parseJSON, get, post } from '../utils';
import {
    FETCH_ACCOUNT_DATA_REQUEST,
} from '../constants';
import { pushState } from 'redux-router';
import config from '../config';
import _ from 'lodash';


export function fetchAccountDataRequest() {
    return {
        type: FETCH_ACCOUNT_DATA_REQUEST
    }
}

export function fetchAccountDataRequestFail(failData) {
    return {
        type: FAIL_ACCOUNT_DATA_REQUEST,
        payload: failData
    }
}

export function fetchAccountData() {
    return function (dispatch) {
        dispatch(fetchAccountDataRequest());
    }
}

export function getAuthorization() {
    return dispatch => {
    }
}