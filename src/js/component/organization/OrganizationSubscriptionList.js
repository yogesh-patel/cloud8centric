'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import _ from 'lodash';
import OrganizationSubscriptionItem from './OrganizationSubscriptionItem';

class OrganizationSubscriptionList extends Component {

    render() {
        let {subscriptionList} = this.props;

        let subscriptionDetails = null;

        if (_.size(subscriptionList) > 0) {
            subscriptionDetails = _.map(_.keys(subscriptionList), (subscriptionId) => {
                var subscription = subscriptionList[subscriptionId];
                return (
                    <SubscriptionItem subscription={subscription} key={subscription.id}/>
                );
            });
        }

        if (subscriptionDetails === null) {
            subscriptionDetails =
                <div className="subscriptions-table no-record-found-block">No Subscriptions found</div>
        }

        return (
            <div className="subscription-table">
                <div className="subscription-table-header text-bold">
                    <div className="subscriptions-table-serial-no">Serial No.</div>
                    <div className="subscriptions-table-name">Subscription Name</div>
                    <div className="clear-both"/>
                </div>

                {subscriptionDetails}

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    subscriptionList: state.subscription.subscriptionList
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationSubscriptionList);
