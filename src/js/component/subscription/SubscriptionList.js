'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
import SubscriptionDetails from './SubscriptionDetails';

class SubscriptionList extends Component {

    gotoAddSubscriptions() {

        this.props.subscriptionActions.fetchProductsAndPlans();

    }

    render() {

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Button bsStyle="primary"
                                className="pull-right"
                                onClick={this.gotoAddSubscriptions.bind(this)}><Glyphicon glyph="plus"/> Add
                            Subscription</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} xsHidden>
                        <h4 style={{fontWeight:'bold'}}>#Serial</h4>
                    </Col>
                    <Col xs={7} xsHidden>
                        <h4 style={{fontWeight:'bold'}}>Subscription Name</h4>
                    </Col>
                    <Col xs={4} xsHidden>
                        <h4 style={{fontWeight:'bold'}}>Subscription Status</h4>
                    </Col>
                </Row>

                <SubscriptionDetails />

            </Grid>
        );

    }

}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList);

