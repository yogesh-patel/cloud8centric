'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, ListGroup, Glyphicon, Input, Pagination} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as organizationActionCreators from '../../actions/organization';
import * as subscriptionActionCreators from '../../actions/subscription';
import OrganizationListItem from './OrganizationListItem';
import OrganizationDetails from './OrganizationDetails';

class OrganizationList extends React.Component {

    constructor(props){

        super(props);
        this.state= {
            activePage: 1
        }

    }

    componentDidMount() {

        this.props.organizationActions.fetchOrganizations(this.props.currentPage);

        let {organizationActions, subscriptionActions, subscriptionDetailsTab} = this.props;

        if(subscriptionDetailsTab){
            let organizationId = localStorage.getItem("active_organization");
            subscriptionActions.fetchSubscriptions(organizationId);
            organizationActions.showSubscriptionDetail('subscription', 2);
        }
        else{
            organizationActions.showOrganizationDetails('organization', 1);
        }

    }

    goToAddOrganizations() {

        this.props.routeDispatch(push("/dashboard/organization/create"));

    }

    handleSelect(event, selectedEvent) {

        this.props.organizationActions.saveCurrentPageNumber(selectedEvent.eventKey);

        this.setState({

          activePage: selectedEvent.eventKey

        });

    }

    render() {


        var {organizationList, selectedOrganization} = this.props;
        let organizationListing = null;
        let pagination = null;
        if(_.size(organizationList) > 0){

             organizationListing = _.map(organizationList, (organization) => {
                return <OrganizationListItem organization={organization}
                                             key={organization.id}/>;

            });

            pagination = null;

            // pagination = <Pagination
            //                   bsSize="medium"
            //                   items={5}
            //                   activePage={this.state.activePage}
            //                   onSelect={this.handleSelect.bind(this)} />


        }
        else if(organizationListing === null){
            organizationListing = <div className="subscriptions-table no-record-found-block">No Organizations found</div>
            pagination = null;
        }



        return (
            <div className="orgs-content">
                <Row>
                    <Col xs={2} sm={2} md={2}>
                        <Input type="text" placeholder="Search"/>
                    </Col>
                    <Col xs={1} sm={1} md={1}>
                        <Button bsStyle="primary"
                            className="pull-right"
                            title="Add Organization"
                            onClick={this.goToAddOrganizations.bind(this)}>
                            <Glyphicon glyph="plus"/>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} sm={3} md={3} className="organization-list">
                        <ListGroup>
                            {organizationListing}
                        </ListGroup>
                    </Col>
                    <Col xs={9} sm={9} md={9}>
                        {selectedOrganization ? <OrganizationDetails/> :
                            <OrganizationDetails/>}
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col xs={3} sm={3} md={3}>
                        {pagination}
                    </Col>
                </Row>

                <Row>&nbsp;</Row>
                <Row>&nbsp;</Row>

            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    organizationList: state.organization.organizationList,
    selectedOrganization: state.organization.selectedOrganization,
    subscriptionDetailsTab: state.organization.subscriptionDetailsTab,
    selectedOption: state.organization.selectedOption,
    currentPage : state.organization.currentPage,
    activeKey: state.activeKey
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch),
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch),
    routeDispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationList);
