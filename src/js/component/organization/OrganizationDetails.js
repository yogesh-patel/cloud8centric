'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Jumbotron, Well} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import { push } from 'redux-router';


class OrganizationDetails extends React.Component{

    gotoAddSubscriptions() {
        this.props.routeDispatch(push("/dashboard/addOrganization"));
    }

    render(){
        return(

            <div>
                <Button bsStyle="primary"
                        className="pull-right"
                        onClick={this.gotoAddSubscriptions.bind(this)}>
                        <Glyphicon glyph="plus"/> Add Subscription
                </Button>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Name: {this.props.organization.organizationName}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization URL: {this.props.organization.organizationURL}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Address Line1: {this.props.organization.addressLine1}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Address Line2: {this.props.organization.addressLine2}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Address Line3: {this.props.organization.addressLine3}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Phone Number: {this.props.organization.phoneNumber}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization City: {this.props.organization.city}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Provinde: {this.props.organization.province}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Zip Code: {this.props.organization.zipCode}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Country: {this.props.organization.country}
                    </Col>
                </Row>
            </div>

        );

    }

}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    routeDispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetails);
