/**
 * Created by synerzip on 12/03/16.
 */
'use strict';

import React, {Component, View} from 'react';

class LoadingMask extends React.Component{
    render(){
        return (
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        )
    }
}

export default LoadingMask;