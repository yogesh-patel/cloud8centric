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



    render() {

        let {subscriptionList} = this.props;
        let subscriptionDetails = _.map(_.keys(subscriptionList), (subscriptionId) => {
            var subscription = subscriptionList[subscriptionId];
            return (
                <SubscriptionItem subscription={subscription} key={subscription.id} />
            );
        });

        return (
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
    subscriptionList: state.subscription.subscriptionList
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionDetails);

