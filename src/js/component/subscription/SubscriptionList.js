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
        this.getInitialStateForOrganization(this.props);
       // var organizationID = (organObject !== undefined) ? organObject.id : orgObject.content[0].id;
        //this.props.subscriptionActions.fetchSubscriptions(organizationID);
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
        // alert("test");
        if (nextProps.selectedOrganization != this.props.selectedOrganization) {
            /*this.setState({
             employeeId: nextProps.selectedEmployee.employeeId,
             employeeName: nextProps.selectedEmployee.name,
             project: nextProps.selectedEmployee.project
             });*/
            this.setState(this.getInitialStateForOrganization(nextProps));
        }
    }

    render() {
        let {subscriptionList} = this.props;
        let subscriptionDetails = _.map(_.keys(subscriptionList), (subscriptionId) => {
            var subscription = subscriptionList[subscriptionId];
            return (
                <SubscriptionItem subscription={subscription} key={subscription.id} />
            );
        });
        var header = "";
        if(subscriptionDetails.length > 0) {
             header = <div className="subscription-table-header">
                <div className="subscriptions-table-serial-no">Serial No.</div>
                <div className="subscriptions-table-name">Subscription Name</div>
                <div className="subscription-table-status">Subscription Status</div>
                <div className="clear-both"/></div>
        }
        return (

                        <div><Button bsStyle="primary"
                                className="pull-right"
                                onClick={this.gotoAddSubscriptions.bind(this)}>
                                <Glyphicon glyph="plus"/> Add Subscription
                        </Button>

                        <div className="subscription-table">
                         {header}{subscriptionDetails}
                        </div></div>

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

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList);
