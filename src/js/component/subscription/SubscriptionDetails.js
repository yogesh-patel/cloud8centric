'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';

class SubscriptionDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render(){

        let {subscriptionList} = this.props;
        let subscriptionDetails = _.map(_.keys(subscriptionList), (subscriptionId) =>{
                                    var subscription = subscriptionList[subscriptionId];
                                    return (
                                        <Row key={subscription.id}>
                                            <Col sm={2}>
                                                <span>{subscription.id}</span>
                                            </Col>
                                            <Col sm={4}>
                                                <span>{subscription.name}</span>
                                            </Col>
                                            <Col sm={4}>
                                                <Button className="status-btn-width" bsStyle={ subscription.status=='Ready' ? 'success' :(subscription.status=='In Progress' ? 'warning' : (subscription.status=='Error' ? 'danger': '')) } onClick={ ()=> this.setState({ open: !this.state.open })}>{subscription.status}</Button>
                                            </Col>
                                            <Panel collapsible expanded={this.state.open}>
                                              Subscription Details
                                            </Panel>
                                        </Row>
                                    );
                                });

        return(
            <Row>
                <Col sm={12}>
                    <div>
                        {subscriptionDetails}
                  </div>
                </Col>
            </Row>
        );

    }

}


const mapStateToProps = (state) => ({
    subscriptionList:state.subscription.subscriptionList
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionDetails);

