'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
import SubscriptionItem from './SubscriptionItem';

class SubscriptionList extends Component {

    componentDidMount(){
        var {orgObject} = this.props;
        this.props.subscriptionActions.fetchSubscriptions(orgObject.content[0].id);
    }

    gotoAddSubscriptions() {

        this.props.subscriptionActions.fetchProductsAndPlans();

    }

    render() {
        let {subscriptionList} = this.props;
        let subscriptionDetails = _.map(_.keys(subscriptionList), (subscriptionId) => {
            var subscription = subscriptionList[subscriptionId];
            return (
                <SubscriptionItem subscription={subscription} key={subscription.id} />
            );
        });
        return (
            <Grid>
                <Row>
                    <Col sm={12} md={12} lg={12} xsHidden>
                        <h3 className="section-title">
                            Subscriptions
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Button bsStyle="primary"
                                className="pull-right"
                                onClick={this.gotoAddSubscriptions.bind(this)}><Glyphicon glyph="plus"/> Add
                            Subscription</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div style={{marginTop:15,border:'1px solid #CCC'}}>
                            <div style={{borderBottom:'1px solid #CCC'}} className="main-table-header">
                                <div style={{padding:20,width:'10%',float:'left',borderRight:'1px solid #CCC'}}>Serial No.</div>
                                <div style={{padding:20,width:'60%',float:'left',borderRight:'1px solid #CCC'}}>Subscription Name</div>
                                <div style={{padding:20,width:'30%',float:'left'}}>Subscription Status</div>
                                <div style={{clear:'both'}} />
                            </div>
                            {subscriptionDetails}
                        </div>
                    </Col>

                </Row>

                {/*<Row>
                    <Col sm={12}>
                        <div>
                            {subscriptionDetails}
                        </div>
                    </Col>
                </Row>*/}

            </Grid>
        );

    }

}


const mapStateToProps = (state) => ({
    subscriptionList: state.subscription.subscriptionList,
    orgObject: state.auth.orgObject
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList);

