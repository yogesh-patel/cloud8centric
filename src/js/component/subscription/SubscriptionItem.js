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

    onStatusClick(){
        this.setState({ open: !this.state.open })
    }

    render() {
        var {subscription} = this.props;
        return (
            <Row style={{paddingTop:15,borderBottom:'1px solid #dddddd'}}>
                <Col xs={12}>
                    <Grid>
                        <Row>
                            <Col xs={2}>
                                <span>{subscription.id}</span>
                            </Col>
                            <Col xs={6}>
                                <span>{subscription.name}</span>
                            </Col>
                            <Col xs={4}>
                                <Button className="status-btn-width"
                                        bsStyle={ subscription.status=='Ready' ? 'success' :(subscription.status=='In Progress' ? 'warning' : (subscription.status=='Error' ? 'danger': '')) }
                                        onClick={ this.onStatusClick.bind(this)}>
                                    {subscription.status}
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Panel style={{marginTop:10,border:'none !important',boxShadow:'none'}} collapsible expanded={this.state.open}>
                                    {
                                        this.state.open ? <SubscriptionDetails subscription={subscription}/> : <span />
                                    }

                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>
        )
    }
}

export default SubscriptionItem;