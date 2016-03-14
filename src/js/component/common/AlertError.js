'use strict';

import React, {Component, View} from 'react';
import {Alert} from 'react-bootstrap';

class AlertMessage extends Component{

    render(){
        var {message} = this.props;
        return(
            <Alert className="login-error-msg" bsStyle="danger">
                {message}
            </Alert>
        );

    }

}

export default AlertMessage;
