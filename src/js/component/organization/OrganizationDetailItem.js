import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Grid, Row, Col, Button, Table} from 'react-bootstrap';

class OrganizationDetailItem extends React.Component {

    render() {

        var {selectedOrganization, organizationDetails} = this.props;

        return (
            <div>

                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Name: {selectedOrganization.organizationName}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization URL: {selectedOrganization.organizationURL}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Address Line1: {organizationDetails.addressLine1}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Address Line2: {organizationDetails.addressLine2}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Address Line3: {organizationDetails.addressLine3}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Phone Number: {organizationDetails.phoneNumber}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization City: {organizationDetails.city}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Provinde: {organizationDetails.province}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Zip Code: {organizationDetails.zipCode}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Country: {organizationDetails.country}
                    </Col>
                </Row>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    selectedOrganization: state.organization.selectedOrganization,
    organizationDetails: state.organization.organizationDetails
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetailItem);
