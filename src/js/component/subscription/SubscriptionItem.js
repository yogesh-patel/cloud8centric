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
import SubscriptionDetails from './SubscriptionDetails';

class SubscriptionItem extends React.Component {
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
            <div style={{clear:'both',borderBottom:'1px solid #CCC'}}>
                <div style={{padding:20,width:'10%',float:'left',borderRight:'1px solid #CCC'}}>
                    {subscription.id}</div>
                <div style={{padding:20,width:'60%',float:'left',borderRight:'1px solid #CCC'}}>
                    {subscription.name}</div>
                <div style={{padding:12,width:'30%',float:'left'}}>
                    <Button className="status-btn-width"
                            bsStyle={ subscription.status=='Ready' ? 'success' :(subscription.status=='In Progress' ? 'warning' : (subscription.status=='Error' ? 'danger': '')) }
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

export default SubscriptionItem;