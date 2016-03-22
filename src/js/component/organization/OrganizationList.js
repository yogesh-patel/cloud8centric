'use strict';
import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Jumbotron, Well, ListGroup, ListGroupItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import OrganizationListItem from './OrganizationListItem';
import OrganizationDetails from './OrganizationDetails';

class OrganizationList extends React.Component {

    componentDidMount() {

        this.props.organizationActions.fetchOrganizations();

    }

    render() {
        var {organizationList, selectedOrganization} = this.props;
        let organizationListing = _.map(organizationList, (organization) => {
            return <OrganizationListItem organization={organization}
                                         key={organization.id}/>;

        });

        return (
            <Grid>
                <Row>
                    <Col xs={3} sm={3} md={3} className="organization-list">
                        {organizationListing}
                    </Col>
                    <Col xs={9} sm={9} md={9} className="organization-right-panel">
                        {selectedOrganization ? <OrganizationDetails/> :
                            <span></span>}
                    </Col>
                </Row>
            </Grid>

        );

    }

}

const mapStateToProps = (state) => ({
    organizationList: state.organization.organizationList,
    selectedOrganization: state.organization.selectedOrganization
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationList);
