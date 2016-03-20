'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Jumbotron, Well} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';

class OrganizationList extends React.Component{

    componentDidMount(){

        this.props.organizationActions.fetchOrganizations();

    }

    render(){

        let { organizationList } = this.props;
        let organizationListing = _.map(organizationList, (organization) => {

            return (
                <Well key={organization.id}>
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
                    <Col xs={6} sm={6} md={6} lg={6}>
                        {organizationListing}
                    </Col>
                </Row>
            </Grid>
        );

    }

}


const mapStateToProps = (state) => ({
    organizationList: state.organization.organizationList
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationList);
