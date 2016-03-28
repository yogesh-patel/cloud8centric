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
        if(!subscription.details){
            subscriptionAction.getSubscriptionStatus(subscription.id);
        }

    }

    render() {
        let {subscription} = this.props;
        var rows = [];

        if(subscription.details){
            rows = _.map(subscription.details,(data)=>{
                return (
                    <tr key={data.productId}>
                        <td>{data.productURL}</td>
                        <td>{data.username}</td>
                    </tr>
                );
            })
        }

        return (
            <Row>
                <Col sm={12}>
                    <Table responsive striped bordered condensed hover className="subscription-products-table">
                        <thead className="subscription-products-table-thead">
                        <tr>
                            <th><b>Product URL</b></th>
                            <th><b>User Name</b></th>
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
