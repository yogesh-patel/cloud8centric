'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
import SubscriptionDetails from './SubscriptionDetails';

class SubscriptionList extends Component{

    gotoAddSubscriptions(){

        this.props.subscriptionActions.fetchProductsAndPlans();

    }

    render(){

        return(
            <div>
                <Row>
                    <Button bsStyle="primary" className="pull-right bottom-buffer" onClick={this.gotoAddSubscriptions.bind(this)}><Glyphicon glyph="plus"/> Add Subscription</Button>
                </Row>
                <Row>
                    <Col xs={2}>
                        <h4>Serial No.</h4>
                    </Col>
                    <Col xs={4}>
                        <h4>Subscription Name</h4>
                    </Col>
                    <Col xs={4}>
                        <h4>Subscription Status</h4>
                    </Col>
                </Row>

                <SubscriptionDetails />

            </div>
        );

    }

}


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList);

