'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, ListGroup, Glyphicon, Input} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';
import * as organizationActionCreators from '../../actions/organization';
import OrganizationListItem from './OrganizationListItem';
import OrganizationDetails from './OrganizationDetails';

class OrganizationList extends React.Component {

    componentDidMount() {

        this.props.organizationActions.fetchOrganizations();

    }

    goToAddOrganizations() {

        this.props.routeDispatch(push("/dashboard/organization/create"));

    }

    render() {
        var {organizationList, selectedOrganization} = this.props;
        let organizationListing = _.map(organizationList, (organization) => {
            return <OrganizationListItem organization={organization}
                                         key={organization.id}/>;

        });

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
                    <Col xs={9} sm={9} md={9} className="organization-right-panel">
                        {selectedOrganization ? <OrganizationDetails/> :
                            <span></span>}
                    </Col>
                </Row>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    organizationList: state.organization.organizationList,
    selectedOrganization: state.organization.selectedOrganization
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch),
    routeDispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationList);
