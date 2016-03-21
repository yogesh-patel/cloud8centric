import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import {Grid, Row, Col, Button, Table, Glyphicon, Jumbotron, Well} from 'react-bootstrap';

class OrganizationDetailItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialStateForOrganization(props);
    }

    getInitialStateForOrganization(props) {
        var {selectedOrganization} = props;
        if (selectedOrganization != null)
        {
        if (selectedOrganization.id) {
            return {
                organization: selectedOrganization
            }
        } }else {
            return {
                organization: null
            }
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.selectedOrganization != this.props.selectedOrganization) {
            this.setState(this.getInitialStateForOrganization(nextProps));
        }
    }

    onOrganizationNameChange(e) {
        this.setState({organizationName: e.target.value});
    }

    onOrganizationUrlChange(e) {
        this.setState({organizationURL: e.target.value});
    }

    render() {
        var {organizationName,organizationURL,organization} = this.state;
        return (
            <div className="content">

 	<div>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Name: {organizationName}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization URL: {organizationURL}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        Organization Address Line1: {organization.addressLine1}
                    </Col>
                </Row>
        <Row>
            <Col xs={12} sm={12} md={12}>
                Organization Address Line2: {organization.addressLine2}
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={12}>
                Organization Address Line3: {organization.addressLine3}
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={12}>
                Organization Phone Number: {organization.phoneNumber}
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={12}>
                Organization City: {organization.city}
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={12}>
                Organization Provinde: {organization.province}
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={12}>
                Organization Zip Code: {organization.zipCode}
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={12}>
                Organization Country: {organization.country}
            </Col>
        </Row>
            </div>
                <div>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            Organization Name: {organization.organizationName}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            Organization URL: {organization.organizationURL}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            Organization Address Line1: {organization.addressLine1}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            Organization Address Line2: {organization.addressLine2}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            Organization Address Line3: {organization.addressLine3}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            Organization Phone Number: {organization.phoneNumber}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            Organization City: {organization.city}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            Organization Provinde: {organization.province}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            Organization Zip Code: {organization.zipCode}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            Organization Country: {organization.country}
                        </Col>
                    </Row>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    organizationList: state.organization.organizationList,
    selectedOrganization: state.organization.selectedOrganization
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetailItem);
