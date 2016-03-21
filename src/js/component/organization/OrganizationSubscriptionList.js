'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
import OrganizationSubscriptionItem from './OrganizationSubscriptionItem';

class OrganizationSubscriptionList extends Component {

    componentDidMount(){
        this.getInitialStateForOrganization(this.props);

    }

    getInitialStateForOrganization(props) {
        var {orgObject,selectedOrganization} = props;
        var organizationID = (selectedOrganization !== undefined) ? selectedOrganization.id : orgObject.content[0].id;
        this.props.subscriptionActions.fetchSubscriptions(organizationID);
    }

    gotoAddSubscriptions() {

        this.props.subscriptionActions.fetchProductsAndPlans();

    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.selectedOrganization != this.props.selectedOrganization) {
            this.setState(this.getInitialStateForOrganization(nextProps));
        }
    }

    render() {
        let {subscriptionList} = this.props;

        let subscriptionDetails = null;

        if(_.size(subscriptionList) > 0){
            subscriptionDetails = _.map(_.keys(subscriptionList), (subscriptionId) => {
                var subscription = subscriptionList[subscriptionId];
                return (
                    <SubscriptionItem subscription={subscription} key={subscription.id} />
                );
            });
        }

        if(subscriptionDetails === null){
            subscriptionDetails = <div className="subscriptions-table no-record-found-block">No Subscriptions found</div>
        }

        return (
                        <div className="subscription-table">
                            <div className="subscription-table-header text-bold">
                                <div className="subscriptions-table-serial-no">Serial No.</div>
                                <div className="subscriptions-table-name">Subscription Name</div>
                                <div className="clear-both"/>
                            </div>

                            {subscriptionDetails}

                        </div>
        );

    }

}


const mapStateToProps = (state) => ({
    subscriptionList: state.subscription.subscriptionList,
    selectedOrganization:state.organization.selectedOrganization,
    orgObject: state.auth.orgObject
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationSubscriptionList);
/**
 * Created by sonalb on 3/21/2016.
 */
