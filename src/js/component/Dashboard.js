'use strict';

import React, {Component} from 'react';
import LeftNavigation from './common/LeftNavigation';
import CommonHeader from './common/CommonHeader';
import SubscriptionList from './subscription/SubscriptionList';
import {Grid, Row, Col, Button} from 'react-bootstrap';

class Dashboard extends Component{

    render(){

        return(
            <div>
                <CommonHeader />
                <LeftNavigation />

                <div className="content-margin">
                    <Grid>
                        <Row>
                            <SubscriptionList />
                        </Row>
                    </Grid>
                </div>
            </div>
        );

    }

}

export default Dashboard;
