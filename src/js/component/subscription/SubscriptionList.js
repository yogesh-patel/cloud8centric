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

    constructor(props){
        super(props);
        this.state={},
        this.timerExpired = (40 * 60 * 1000); // set Max timeout to 40mins
        this.scheduler = null;
    }

    componentDidMount(){

        this.fetchSubscriptions();
    }

    fetchSubscriptions(){
         let organizationId = localStorage.getItem("active_organization");
        this.props.subscriptionActions.fetchSubscriptions(organizationId);
    }

    gotoAddSubscriptions() {

        this.props.subscriptionActions.fetchProductsAndPlans();

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.recursiveUpdate == true){
            if(this.scheduler == null){
                this.scheduler = setInterval(()=>{
                    this.fetchSubscriptions();
                    this.timerExpired =  this.timerExpired - (1*60*1000);

                    if( this.timerExpired <= 0){
                        clearInterval(this.scheduler);
                        this.scheduler  = null;
                    }

                },(1 * 60 * 1000));
            }
        }else{
            if(this.scheduler != null){
                clearInterval(this.scheduler);
                this.scheduler  = null;
            }
        }
    }

    render() {

        let {subscriptionList} = this.props;

        let subscriptionDetails = null;

        if(_.size(subscriptionList) > 0){
            subscriptionDetails = _.map(_.keys(subscriptionList), (key) => {
                var subscription = subscriptionList[key];
                return (
                    <SubscriptionItem subscription={subscription} key={subscription.id} rowId={key}/>
                );
            });
        }

        if(subscriptionDetails === null){
            subscriptionDetails = <div className="subscriptions-table no-record-found-block">No Subscriptions found</div>
        }


        let userRoles = localStorage.getItem("roles");

        let roleName = _.map(JSON.parse(userRoles), (role) => {
           return role.name;
        });

        let contentClass, breadcrumb, addBtnClass = null;

        if (roleName[0] === "Admin") {
            contentClass = "";
            addBtnClass = "admin-right-panel";
            breadcrumb = <span></span>;
        }
        else{
            contentClass = "main-container";
            addBtnClass = "";
            breadcrumb = <Row>
                <Col sm={12} md={12} lg={12} xsHidden>
                    <h3 className="section-title">
                        Subscriptions
                    </h3>
                </Col>
            </Row>
        }

        return (
            <div className={contentClass}>

                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Button bsStyle="primary"
                                className={"pull-right "+addBtnClass}
                                onClick={this.gotoAddSubscriptions.bind(this)}>
                                <Glyphicon glyph="plus"/> Add Subscription
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="subscription-table">
                            <div className="subscription-table-header text-bold">
                                <div className="subscriptions-table-serial-no">Creation Date</div>
                                <div className="subscriptions-table-name">Subscription</div>
                                <div className="subscriptions-table-product">Product</div>
                                <div className="subscriptions-table-version">Version</div>
                                <div className="subscription-table-status subscription-status-header">Status</div>
                                <div className="clear-both"/>
                            </div>

                            {subscriptionDetails}

                        </div>
                    </Col>
                </Row>
            </div>

        );

    }

}


const mapStateToProps = (state) => ({
    subscriptionList: state.subscription.subscriptionList,
    orgObject: state.auth.orgObject,
    recursiveUpdate:state.subscription.recursiveUpdate
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList);
