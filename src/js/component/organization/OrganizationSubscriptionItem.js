/**
 * Created by synerzip on 11/03/16.
 */
import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
//import SubscriptionDetails from './SubscriptionDetails';

class OrganizationSubscriptionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    onStatusClick() {
        this.setState({open: !this.state.open})
    }

    render() {
        var {subscription} = this.props;
        return (
            <div className="subscriptions-table">
                <div className="subscriptions-table-serial-no">
                    {subscription.id}</div>
                <div className="subscriptions-table-name">
                    {subscription.name}</div>

            </div>

        )
    }
}

export default OrganizationSubscriptionItem;
