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

        var {subscription} = this.props;

        return (

            <div className="subscriptions-table">
                <div className="subscriptions-table-serial-no">
                    {subscription.counter}</div>
                <div className="subscriptions-table-name">
                    {subscription.name}</div>
                <div className="subscription-table-status">
                    <Button bsSize="small" className="status-btn-width"
                            bsStyle={ subscription.status=='Ready' ? 'success' :(subscription.status=='In-progress' ? 'warning' : (subscription.status=='Error' ? 'danger': 'default')) }
                            onClick={ this.onStatusClick.bind(this)}>
                        {subscription.status}
                    </Button>
                </div>

                <div style={{clear:'both',marginTop:-30}}>
                    <Panel className="subscription-detail-box" collapsible
                           expanded={this.state.open}>
                        {
                            this.state.open ? <SubscriptionDetails subscription={subscription}/> : <span />
                        }
                    </Panel>
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    subscriptionAction:bindActionCreators(subscriptionActionCreators,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionItem);
