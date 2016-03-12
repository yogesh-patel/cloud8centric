'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
import SubscriptionItem from './SubscriptionItem';

class SubscriptionList extends Component {

    componentDidMount(){
        this.props.subscriptionActions.fetchSubscriptions();
    }

    gotoAddSubscriptions() {

        this.props.subscriptionActions.fetchProductsAndPlans();

    }

    render() {
        let {subscriptionList} = this.props;
        let subscriptionDetails = _.map(_.keys(subscriptionList), (subscriptionId) => {
            var subscription = subscriptionList[subscriptionId];
            return (
                <SubscriptionItem subscription={subscription} key={subscription.id} />
            );
        });
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
                <Row style={{borderBottom:'2px solid #CCCCCC'}}>
                    <Col xs={2} xsHidden>
                        <h4 style={{fontWeight:'bold'}}>#Serial</h4>
                    </Col>
                    <Col xs={6} xsHidden>
                        <h4 style={{fontWeight:'bold'}}>Subscription Name</h4>
                    </Col>
                    <Col xs={4} xsHidden>
                        <h4 style={{fontWeight:'bold'}}>Subscription Status</h4>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <div>
                            {subscriptionDetails}
                        </div>
                    </Col>
                </Row>

            </Grid>
        );

    }

}


const mapStateToProps = (state) => ({
    subscriptionList: state.subscription.subscriptionList
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList);

