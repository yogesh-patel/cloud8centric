'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Jumbotron, Well} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import OrganizationDetails from './OrganizationDetails'

class OrganizationList extends React.Component{

    componentDidMount(){

        this.props.organizationActions.fetchOrganizations();

    }

    onOrganizationSelected(organization){

        this.props.organizationActions.fetchOrganizationDetails(organization);

    }

    render(){

        let { organizationList, activeOrganization } = this.props;
        let organizationListing = _.map(organizationList, (organization) => {

            return (
                <Well key={organization.id} onClick={this.onOrganizationSelected.bind(this, organization)}>
                    <p>{organization.organizationName}</p>
                    <p className="normal-font">{organization.organizationURL}</p>
                    <p className="normal-font">{organization.addressLine1}</p>
                </Well>
            );

        });

        return(
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
                    <Col xs={9} sm={9} md={9}>
                        {activeOrganization ? <OrganizationDetails organization={activeOrganization}/> : <span></span>}
                    </Col>
                </Row>
            </Grid>
        );

    }

}


const mapStateToProps = (state) => ({
    organizationList: state.organization.organizationList,
    activeOrganization: state.organization.activeOrganization
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationList);
