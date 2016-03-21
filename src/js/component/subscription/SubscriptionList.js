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
        var {orgObject} = this.props;
        this.props.subscriptionActions.fetchSubscriptions(orgObject.content[0].id);
    }

    gotoAddSubscriptions() {

        this.props.subscriptionActions.fetchProductsAndPlans();

    }

    render() {

        let {subscriptionList} = this.props;

        let subscriptionDetails = null;

        if(_.size(subscriptionList) > 0){
            subscriptionDetails = _.map(_.keys(subscriptionList), (subscriptionId) => {
                var subscription = subscriptionList[subscriptionId];
                return (
                    <SubscriptionItem subscription={subscription} key={subscription.id} />
                );
            });
        }

        if(subscriptionDetails === null){
            subscriptionDetails = <div className="subscriptions-table no-record-found-block">No Subscriptions found</div>
        }


        return (
            <Grid>
                <Row>
                    <Col sm={12} md={12} lg={12} xsHidden>
                        <h3 className="section-title">
                            Subscriptions
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Button bsStyle="primary"
                                className="pull-right"
                                onClick={this.gotoAddSubscriptions.bind(this)}>
                                <Glyphicon glyph="plus"/> Add Subscription
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="subscription-table">
                            <div className="subscription-table-header text-bold">
                                <div className="subscriptions-table-serial-no">Serial No.</div>
                                <div className="subscriptions-table-name">Subscription Name</div>
                                <div className="subscription-table-status subscription-status-header">Subscription Status</div>
                                <div className="clear-both"/>
                            </div>

                            {subscriptionDetails}

                        </div>
                    </Col>
                </Row>
            </Grid>

        );

    }

}


const mapStateToProps = (state) => ({
    subscriptionList: state.subscription.subscriptionList,
    orgObject: state.auth.orgObject
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList);
