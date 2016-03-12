'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
import SubscriptionItem from './SubscriptionItem';

class SubscriptionDetails extends Component {

    componentDidMount(){
        var {subscription,subscriptionAction} = this.props;
        if(!subscription.detail){
            subscriptionAction.getDetail(subscription.id);
        }

    }

    onStatusClick(){

    }

    render() {
        let {subscription} = this.props;
        var rows = [];

        if(subscription.detail){
            rows = _.map(subscription.detail,(data)=>{

                return (
                    <tr key={data.productId}>
                        <td>{data.productName}</td>
                        <td>{data.productURL}</td>
                        <td>{data.username}</td>
                        <td><Button className="status-btn-width"
                                    bsStyle={ data.status=='Ready' ? 'success' :(data.status=='In Progress' ? 'warning' : (data.status=='Error' ? 'danger': '')) }
                                    onClick={ this.onStatusClick.bind(this)}>
                            {data.status}
                        </Button></td>
                    </tr>
                );
            })
        }

        return (
            <Row>
                <Col sm={12}>
                    <Table responsive striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product URL</th>
                            <th>User Name</th>
                            <th>Product Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );

    }

}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    subscriptionAction:bindActionCreators(subscriptionActionCreators,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionDetails);

