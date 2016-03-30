import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
import SubscriptionDetails from './SubscriptionDetails';

class SubscriptionItem extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            open: false
        };

    }

    onStatusClick() {

        this.setState({open: !this.state.open});

    }

    render() {

        var {subscription, rowId} = this.props;

        return (

            <div className="subscriptions-table">
                <div className="subscriptions-table-serial-no">
                    {subscription.counter}
                </div>
                <div className="subscriptions-table-name">
                    {subscription.name}
                </div>
                <div className="subscriptions-table-product">
                    {subscription.productName}
                </div>
                <div className="subscriptions-table-version">
                    {subscription.version}
                </div>
                <div className="subscription-table-status">
                    <Button bsSize="small" className="status-btn-width"
                            bsStyle={ subscription.status=='Ready' ? 'success' :(subscription.status=='In-progress' ? 'warning' : (subscription.status=='Error' ? 'danger': 'default')) }
                            onClick={ this.onStatusClick.bind(this)}>
                        {subscription.status}
                    </Button>
                </div>

                <div className="subscription-details">
                    <Panel className="subscription-detail-box" collapsible
                           expanded={this.state.open}>
                        {
                            this.state.open ? <SubscriptionDetails subscription={subscription} rowId={rowId}/> : <span />
                        }
                    </Panel>
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    subscriptionList: state.subscription.subscriptionList
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionAction:bindActionCreators(subscriptionActionCreators,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionItem);
