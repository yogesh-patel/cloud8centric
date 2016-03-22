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
            blank:'',
            organizationName:'',
            organizationURL:'',
            phoneNumber:'',
            zipCodeError:'',
            onCountryError:'',
            addressLine1Error:'',
            addressLine1:'',
            phoneNumberError:'',
            addressLine2:'',
            organizationNameError:'',
            onCityError:'',
            addressLine3:'',
        }

    }

    submitData(e) {
        e.preventDefault();

        if(this.state.addressLine1 == ''){
            this.setState({addressLine1Error:"Please enter Address"});
        }
        if(this.state.organizationName == ''){
            this.setState({organizationNameError:"Please enter Organization Name"});
        }
        if(this.state.phoneNumber.length !== 10){
            this.setState({phoneNumberError:"Phone number must be 10 digits"});
        }
        if(this.state.country == ''){
            this.setState({onCountryError:"Please enter Country"});
        }
        if(this.state.zipCode == ''){
            this.setState({zipCodeError:"Please enter Zip-Code"});
        }
        if(this.state.city == ''){
            this.setState({onCityError:"Please enter City"});
        }
        if(this.state.addressLine1!='' && this.state.organizationName!='' && this.state.phoneNumber.length ==   10 &&
                this.state.country != '' && this.state.zipCode != '' && this.state.city != ''){
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
    }

    onCountryChange(e) {

        this.setState({country: e.target.value});
        this.setState({onCountryError:""});

    }

    onCityChange(e) {

        this.setState({city: e.target.value});
        this.setState({onCityError:""});

    }

    onProvinceChange(e) {

        this.setState({province: e.target.value});

    }

    onZipCodeChange(e) {

        this.setState({zipCode: e.target.value});
        this.setState({zipCodeError:""});

    }

    onAddressLine1Change(e) {

        this.setState({addressLine1: e.target.value});
        this.setState({addressLine1Error:""});

    }

    onAddressLine2Change(e) {

        this.setState({addressLine2: e.target.value});

    }

    onAddressLine3Change(e) {

        this.setState({addressLine3: e.target.value});

    }

    onOrganizationNameChange(e) {

       this.setState({organizationName: e.target.value});
       this.setState({organizationNameError:""});

    }

    onOrganizationURLChange(e) {

       this.setState({organizationURL: e.target.value});

    }

    onPhoneNumberChange(e) {

       this.setState({phoneNumber: e.target.value,phoneNumberError:''});
       this.setState({phoneNumberError:""});

    }

    render(){
        return(
            <Grid>
                <Row>
                    <Col sm={12} md={12} lg={12} xsHidden>
                        <h3 className="section-title">
                            Organization / Create
                        </h3>
                    </Col>
                </Row>
                <form >
                    <Panel header={"Add New Organization"}>
                        <Row>
                            <Col xs={6}>
                                <Input label="Organization Name*" className="red-text" help={this.state.organizationNameError} wrapperClassName="wrapper">
                                    <Row>
                                        <Col xs={12}>
                                            <input
                                                type="text"
                                                placeholder="Organization Name*"
                                                required
                                                className="form-control"
                                                onChange={this.onOrganizationNameChange.bind(this)}/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                            <Col xs={6}>
                                <Input label="Phone Number*"  help={this.state.phoneNumberError} wrapperClassName="wrapper">
                                    <Row>
                                        <Col xs={12}>
                                            <input
                                                type="number"
                                                placeholder="PhoneNumber*"
                                                required
                                                className="form-control"
                                                onChange={this.onPhoneNumberChange.bind(this)}/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <Input label="Organization URL" wrapperClassName="wrapper">
                                    <Row>
                                        <Col xs={12}>
                                            <input
                                                type="text"
                                                placeholder="Organization URL"
                                                className="form-control"
                                                onChange={this.onOrganizationURLChange.bind(this)}/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                            <Col xs={6}>
                                <Input label="City*" help={this.state.onCityError} wrapperClassName="wrapper">
                                    <Row>
                                        <Col xs={12}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                onChange={this.onCityChange.bind(this)}
                                                placeholder="City*"/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <Input label="AddressLine1*" help={this.state.addressLine1Error} wrapperClassName="wrapper">
                                    <Row>
                                        <Col xs={12}>
                                            <input
                                                type="text"
                                                placeholder="AddressLine1*"
                                                required
                                                className="form-control"
                                                onChange={this.onAddressLine1Change.bind(this)}/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                            <Col xs={6}>
                                <Input label="Province" wrapperClassName="wrapper">
                                    <Row>
                                        <Col xs={12}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={this.onProvinceChange.bind(this)}
                                                placeholder="Province"/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <Input label="AddressLine2" wrapperClassName="wrapper">
                                    <Row>
                                        <Col xs={12}>
                                            <input
                                                type="text"
                                                placeholder="AddressLine2"
                                                className="form-control"
                                                onChange={this.onAddressLine2Change.bind(this)}/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                            <Col xs={6}>
                                <Input label="Zip Code*" help={this.state.zipCodeError}  wrapperClassName="wrapper">
                                    <Row>
                                        <Col xs={12}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                onChange={this.onZipCodeChange.bind(this)}
                                                placeholder="Zip Code*"/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <Input label="AddressLine3" wrapperClassName="wrapper">
                                    <Row>
                                        <Col xs={12}>
                                            <input
                                                type="text"
                                                placeholder="AddressLine3"
                                                className="form-control"
                                                onChange={this.onAddressLine3Change.bind(this)}/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                            <Col xs={6}>
                                <Input label="Country*" help={this.state.onCountryError} wrapperClassName="wrapper">
                                    <Row>
                                        <Col xs={12}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                onChange={this.onCountryChange.bind(this)}
                                                placeholder="Country*"/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                        </Row>

                        <Button onClick={this.submitData.bind(this)}
                                bsStyle="primary"
                                className="pull-right">
                                Submit
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
