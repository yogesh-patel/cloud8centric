'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Button,Glyphicon,Panel,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Element} from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../../actions/signUp';
import * as appActionCreators from '../../actions/app';

class Step3 extends Component {

    constructor(props){
        super(props);
        this.state= {
            city:props.step_2_data.city,
            province:props.step_2_data.province,
            zipCode:props.step_2_data.zipCode,
            country:props.step_2_data.country,
            serverErrorMessage:'',
            addressLine1:props.step_2_data.addressLine1,
            addressLine2:props.step_2_data.addressLine2,
            addressLine3:props.step_2_data.addressLine3,
        }
    }

    onNext(e){ 
        var {step_2_data,userinfo} = this.props;
        e.preventDefault();
        var step3Data = {
            organizationName:step_2_data.organizationName,
            organizationURL:step_2_data.organizationURL,
            phoneNumber:step_2_data.phoneNumber,
            city:this.state.city,
            province:this.state.province,
            zipCode:this.state.zipCode,
            country:this.state.country,
            addressLine1:this.state.addressLine1,
            addressLine2:this.state.addressLine2,
            addressLine3:this.state.addressLine3,
        }

        var signupInfo = {
            organizationInfo: {
                organizationName:step_2_data.organizationName,
                organizationURL:step_2_data.organizationURL,
                phoneNumber:step_2_data.phoneNumber,
                city:this.state.city,
                province:this.state.province,
                zipCode:this.state.zipCode,
                country:this.state.country,
                addressLine1:this.state.addressLine1,
                addressLine2:this.state.addressLine2,
                addressLine3:this.state.addressLine3,
            },
            userinfo : {
                firstName:userinfo.firstName,
                lastName:userinfo.lastName,
                emailAddress:userinfo.emailAddress,
                username:userinfo.username,
                password:userinfo.password,
                confirmPassword:userinfo.confirmPassword,
                roles: ["AccountOwner"]
            }
        }
        this.props.signupActions.step_3_Data(step3Data);
        this.props.signupActions.submitSignupForm(signupInfo);
    }

    onBack(e){ 
        e.preventDefault();
        this.props.signupActions.onBackClick("step2");
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

    componentWillUnmount(){
        var {step_2_data} = this.props;
        var step3Data = {
            organizationName:step_2_data.organizationName,
            organizationURL:step_2_data.organizationURL,
            phoneNumber:step_2_data.phoneNumber,
            city:this.state.city,
            province:this.state.province,
            zipCode:this.state.zipCode,
            country:this.state.country,
            addressLine1:this.state.addressLine1,
            addressLine2:this.state.addressLine2,
            addressLine3:this.state.addressLine3,
        }
        this.props.signupActions.onComponentRemoved(step3Data);
    }

    render() {
        var {statusText} = this.props;
        if(statusText !== ''){
            this.state.serverErrorMessage = true;
        }
        else{
            this.state.serverErrorMessage = false;
        }
        return (
            <form name="signup" onSubmit={this.onNext.bind(this)}>
                <Row className="text-center">
                    <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="signUp-box">
                        <div className="login-label text-center">Organization Address</div>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <div className='text-danger'>
                                        {this.props.statusText}
                                    </div>
                                    <Input  type="text"
                                            defaultValue={this.state.addressLine1}
                                            addonBefore={<span className="fa fa-home"></span>}
                                            placeholder="Address Line1*"
                                            required
                                            onChange={this.onAddressLine1Change.bind(this)}/>
                               </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <Input  type="text"
                                            defaultValue={this.state.addressLine2}
                                            addonBefore={<span className="fa fa-home"></span>}
                                            placeholder="Address Line2"
                                            onChange={this.onAddressLine2Change.bind(this)}/>
                               </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <Input  type="text"
                                            defaultValue={this.state.addressLine3}
                                            addonBefore={<span className="fa fa-home"></span>}
                                            placeholder="Address Line3"
                                            onChange={this.onAddressLine3Change.bind(this)}/>
                               </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <Input  type="text"
                                            defaultValue={this.state.city}
                                            addonBefore={<span className="fa fa-road"></span>}
                                            placeholder="City*"
                                            required
                                            onChange={this.onCityChange.bind(this)}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <Input  type="text"
                                            defaultValue={this.state.province}
                                            addonBefore={<span className="fa fa-university"></span>}
                                            placeholder="Province"
                                            onChange={this.onProvinceChange.bind(this)}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <Input  type="text"
                                            defaultValue={this.state.zipCode}
                                            addonBefore={<span className="fa fa-barcode"></span>}
                                            placeholder="Zip Code*"
                                            required
                                            onChange={this.onZipCodeChange.bind(this)}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <Input  type="text"
                                            defaultValue={this.state.country}
                                            addonBefore={<span className="fa fa-globe"></span>}
                                            placeholder="Country*"
                                            required
                                            onChange={this.onCountryChange.bind(this)}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} sm={6}>

                            <Button bsStyle="warning" bsSize="large"
                                    className="full-width"
                                    onClick={this.onBack.bind(this)}>
                                BACK
                            </Button>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Button bsStyle="primary" type="submit" bsSize="large"
                                    className="full-width">
                                SUBMIT
                            </Button>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </form>
        )
    }

}

const mapStateToProps = (state) => ({
    step_2_data:state.signUpData.signupInfo.organizationInfo,
    userinfo:state.signUpData.signupInfo.userinfo,
    statusText:state.signUpData.statusText
});

const mapDispatchToProps = (dispatch) => ({
    signupActions: bindActionCreators(SaveStatus, dispatch),
    appActions: bindActionCreators(appActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
