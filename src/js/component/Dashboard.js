'use strict';

import React, {Component} from 'react';
import LeftNavigation from './common/LeftNavigation';
import CommonHeader from './common/CommonHeader';
import {Grid, Row, Col, Button} from 'react-bootstrap';

class Dashboard extends Component{

    render(){

        return(
            <div className="container">
                <CommonHeader />
                <LeftNavigation />
                <div className="container" style={{marginTop:60}}>
                    {this.props.children}
                </div>
            </div>
        );

    }

}

export default Dashboard;
