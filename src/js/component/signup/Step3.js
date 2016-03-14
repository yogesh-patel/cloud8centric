'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Panel,Input} from 'react-bootstrap';
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
          city:'',
          province:'',
          zipCode:'',
          country:'',
          phoneNumber:''}
    }

    onNext(e){ 
        var {step_2_data,userinfo} = this.props;
        e.preventDefault();
        this.props.signupActions.saveStatus({
            step1: "Step1",
            step2: "Step2",
            step3: "Step3"}
        );
        this.props.signupActions.saveCircleStatus({
            step1: "Step_1_Completed",
            step2: "Step_2_Completed",
            step3: "Step_3_Completed"}
        );
        var step3Data = {
            organizationName:step_2_data.organizationName,
            organizationURL:step_2_data.organizationURL,
            addressLine1:step_2_data.addressLine1,
            addressLine2:step_2_data.addressLine2,
            addressLine3:step_2_data.addressLine3,
            city:this.state.city,
            province:this.state.province,
            zipCode:this.state.zipCode,
            country:this.state.country,
            phoneNumber:this.state.phoneNumber,
        }

        var signupInfo = {
            organizationInfo: {
                organizationName:step_2_data.organizationName,
                organizationURL:step_2_data.organizationURL,
                addressLine1:step_2_data.addressLine1,
                addressLine2:step_2_data.addressLine2,
                addressLine3:step_2_data.addressLine3,
                city:this.state.city,
                province:this.state.province,
                zipCode:this.state.zipCode,
                country:this.state.country,
                phoneNumber:this.state.phoneNumber,
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
        this.props.appActions.showLogin();
    }

    onBack(e){ 
        e.preventDefault();
        this.props.signupActions.saveStatus({
              step1: "",
              step2: "OnBackStep2",
              step3: ""}
          );
        }

      onCountryChange(e) {
        this.setState({country: e.target.value});
      }

      onPhoneNumberChange(e) {
        this.setState({phoneNumber: e.target.value});
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

    render() {
        return (
            <form name="signup" onSubmit={this.onNext.bind(this)}>
                <Row className="text-center">
                    <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="signUp-box">
                        <div className="login-label text-center">Company Details</div>
                        <Row>
                            <Col xs={12}>
                            <Input type="text"
                                addonBefore={<Glyphicon glyph="asterisk" />}
                            placeholder="City" required onChange={this.onCityChange.bind(this)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                            <Input type="text"
                                addonBefore={<Glyphicon glyph="asterisk" />}
                            placeholder="Province" required onChange={this.onProvinceChange.bind(this)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Input type="text"
                                    addonBefore={<Glyphicon glyph="asterisk" />}
                                placeholder="Zip Code" required onChange={this.onZipCodeChange.bind(this)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Input type="text"
                                    addonBefore={<Glyphicon glyph="asterisk" />}
                                placeholder="Country" required onChange={this.onCountryChange.bind(this)}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Input type="number"
                                    addonBefore={<Glyphicon glyph="asterisk" />}
                                placeholder="Phone Number" required onChange={this.onPhoneNumberChange.bind(this)}/>
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} sm={6}>
                            <div className="Back-button pointer" onClick={this.onBack.bind(this)}>
                            Back
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <button className="Next-button pointer">
                                Submit
                            </button>
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
     userinfo:state.signUpData.signupInfo.userinfo
});

const mapDispatchToProps = (dispatch) => ({
    signupActions: bindActionCreators(SaveStatus, dispatch),
    appActions: bindActionCreators(appActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
