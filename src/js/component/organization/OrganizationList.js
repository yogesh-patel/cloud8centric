'use strict';
import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Jumbotron, Well, ListGroup, ListGroupItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import OrganizationListItem from './OrganizationListItem'
import OrganizationDetails from './OrganizationDetails'

class OrganizationList extends React.Component {

    componentDidMount() {

        this.props.organizationActions.fetchOrganizations();

    }

    render() {
        var {organizationList,organizationDetailScreen,selectedOrganization} = this.props;
        let organizationListing = _.map(organizationList, (organization) => {
            return <OrganizationListItem organization={organization}
                                         key={organization.id}/>;

        });

        return (
            <Grid>
                <Row>
                    <Col sm={12} md={12} lg={12} xsHidden>
                        <h3 className="section-title">
                            Organizations
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} sm={3} md={3}>
                        {organizationListing}
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} lgOffset={1}>
                        {selectedOrganization ? <OrganizationDetails organizationDetailItemScreen="true"
                                                                     selectedOrganization={selectedOrganization}/> :
                            <span></span>}
                    </Col>
                </Row>
            </Grid>

        );

    }

}

const mapStateToProps = (state) => ({
    organizationDetailScreen: state.app.organizationDetailScreen,
    organizationList: state.organization.organizationList,
    selectedOrganization: state.organization.selectedOrganization
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationList);
