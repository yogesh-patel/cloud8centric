'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table,Input,Glyphicon,Panel, Jumbotron, Well} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import { push } from 'redux-router';



class AddOrganization extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            city:'',
            province:'',
            zipCode:'',
            country:'',
            organizationName:'',
            organizationURL:'',
            phoneNumber:'',
            addressLine1:'',
            addressLine2:'',
            addressLine3:'',
        }

    }

    submitData(e) {
        e.preventDefault();
        var organization = {
                        organizationName:this.state.organizationName,
                        organizationURL:this.state.organizationURL,
                        phoneNumber:this.state.phoneNumber,
                        city:this.state.city,
                        province:this.state.province,
                        zipCode:this.state.zipCode,
                        country:this.state.country,
                        addressLine1:this.state.addressLine1,
                        addressLine2:this.state.addressLine2,
                        addressLine3:this.state.addressLine3,
                    }
        this.props.organizationActions.addOrganizationData(organization);
    }

    onCountryChange(e) {

        this.setState({country: e.target.value});

    }

    onCityChange(e) {

        this.setState({city: e.target.value});

    }

    onProvinceChange(e) {

        this.setState({province: e.target.value});

    }

    onZipCodeChange(e) {

        this.setState({zipCode: e.target.value});

    }

    onAddressLine1Change(e) {

        this.setState({addressLine1: e.target.value});

    }

    onAddressLine2Change(e) {

        this.setState({addressLine2: e.target.value});

    }

    onAddressLine3Change(e) {

        this.setState({addressLine3: e.target.value});

    }

    onOrganizationNameChange(e) {

       this.setState({organizationName: e.target.value});

    }

    onOrganizationURLChange(e) {

       this.setState({organizationURL: e.target.value});

    }

    onPhoneNumberChange(e) {

       this.setState({phoneNumber: e.target.value,phoneNumberError:''});

    }


    render(){
        return(
            <Grid>
                <Row>
                    <Col sm={12} md={12} lg={12} xsHidden>
                        <h3 className="section-title">
                            Organizations / AddOrganization
                        </h3>
                    </Col>
                </Row>
                <form className="form-horizontal" onSubmit={this.submitData.bind(this)}>
                    <Panel header={"Add New Organization"}>
                        <Input
                            type="text"
                            placeholder="Organization Name*"
                            label="Organization Name*"
                            labelClassName="col-xs-2"
                            required
                            onChange={this.onOrganizationNameChange.bind(this)}
                            wrapperClassName="col-xs-10" />

                        <Input
                            type="text"
                            placeholder="Organization URL"
                            label="Organization URL"
                            onChange={this.onOrganizationURLChange.bind(this)}
                            labelClassName="col-xs-2"
                            wrapperClassName="col-xs-10" />

                        <Input
                            type="text"
                            label="phone Number*"
                            required
                            onChange={this.onPhoneNumberChange.bind(this)}
                            placeholder="phone Number*"
                            labelClassName="col-xs-2"
                            wrapperClassName="col-xs-10" />

                        <Input
                            type="text"
                            required
                            label="Address Line1*"
                            onChange={this.onAddressLine1Change.bind(this)}
                            labelClassName="col-xs-2"
                            placeholder="Address Line1*"
                            wrapperClassName="col-xs-10" />

                        <Input
                            type="text"
                            label="Address Line2"
                            labelClassName="col-xs-2"
                            onChange={this.onAddressLine2Change.bind(this)}
                            placeholder="Address Line2"
                            wrapperClassName="col-xs-10" />

                        <Input
                            type="text"
                            label="Address Line3"
                            onChange={this.onAddressLine3Change.bind(this)}
                            labelClassName="col-xs-2"
                            placeholder="Address Line3"
                            wrapperClassName="col-xs-10" />

                        <Input
                            type="text"
                            label="City*"
                            labelClassName="col-xs-2"
                            required
                            onChange={this.onCityChange.bind(this)}
                            placeholder="City*"
                            wrapperClassName="col-xs-10" />

                        <Input
                            type="text"
                            label="Province"
                            labelClassName="col-xs-2"
                            placeholder="Province"
                            onChange={this.onProvinceChange.bind(this)}
                            wrapperClassName="col-xs-10" />

                        <Input
                            type="text"
                            label="Zip Code*"
                            labelClassName="col-xs-2"
                            required
                            placeholder="Zip Code*"
                            onChange={this.onZipCodeChange.bind(this)}
                            wrapperClassName="col-xs-10" />

                        <Input
                            type="text"
                            label="Country*"
                            labelClassName="col-xs-2"
                            required
                            onChange={this.onCountryChange.bind(this)}
                            placeholder="Country*"
                            wrapperClassName="col-xs-10" />

                        <Button type="submit"
                                bsStyle="primary"
                                className="pull-right">
                                SUBMIT
                        </Button>
                    </Panel>
                </form>
            </Grid>
        );

    }

}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOrganization);
