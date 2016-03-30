'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
import SubscriptionItem from './SubscriptionItem';
import CopyToClipboard from 'react-copy-to-clipboard';

class SubscriptionDetails extends Component {

    componentDidMount(){

        var {subscription, subscriptionAction, rowId} = this.props;
        //subscriptionAction.getSubscriptionStatus(subscription.id, rowId);

    }

    render() {
        let {subscription} = this.props;
        var rows = [];
        let count = 0;

        if(subscription.details){

            rows = (
                    <tr key={count}>
                        <td className="url-width">{subscription.status == 'Ready' ? <a target="_blank" href={subscription.details.deployedUrl}>{subscription.details.deployedUrl}</a> : subscription.details.deployedUrl ? subscription.details.deployedUrl : ''}
                        </td>
                        <td className="subscription-username-width">{subscription.details.adminUserName ? subscription.details.adminUserName : ''}</td>
                        <td className="subscription-username-width">
                            <CopyToClipboard text={"URL = "+subscription.details.deployedUrl+" , Admin UserName = "+subscription.details.adminUserName}>
                              <Glyphicon glyph="copy" className="pointer copy-to-clipboard-size" title="Copy to clipboard"/>
                            </CopyToClipboard>
                        </td>
                    </tr>
                );
                count +=1;

        }

        return (
            <Row>
                <Col sm={12}>
                    <Table responsive striped bordered condensed hover className="subscription-products-table">
                        <thead className="subscription-products-table-thead">
                        <tr>
                            <th><b>URL</b></th>
                            <th><b>UserName</b></th>
                            <th><b>Copy to clipboard</b></th>
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
