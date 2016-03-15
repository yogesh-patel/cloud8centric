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
          serverErrorMessage:'',
          phoneNumberError:'',
          phoneNumber:''}
    }

    onNext(e){ 
        var {step_2_data,userinfo} = this.props;
        e.preventDefault();
        if(this.state.phoneNumber.length !== 10){
            this.setState({phoneNumberError:"PhoneNumber must be 10 digits only"});
        }
        else{
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
            console.log(signupInfo);
            this.props.signupActions.submitSignupForm(signupInfo);
        }

    }

    onBack(e){ 
       e.preventDefault();
       this.props.signupActions.onBackClick("step2");
      }

      onCountryChange(e) {
        this.setState({country: e.target.value});
      }

      onPhoneNumberChange(e) {
        this.setState({phoneNumber: e.target.value,phoneNumberError:''});
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
                        <div className="login-label text-center">Company Details</div>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <div className='text-danger'>
                                        {this.props.statusText}
                                    </div>
                                    <Input type="text"
                                        defaultValue={this.state.city}
                                        addonBefore={<span className="fa fa-road"></span>}
                                    placeholder="City*" onChange={this.onCityChange.bind(this)}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <Input type="text"
                                        defaultValue={this.state.province}
                                        addonBefore={<span className="fa fa-university"></span>}
                                    placeholder="Province"  onChange={this.onProvinceChange.bind(this)}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <Input type="text"
                                        defaultValue={this.state.zipCode}
                                        addonBefore={<span className="fa fa-barcode"></span>}
                                    placeholder="Zip Code*" onChange={this.onZipCodeChange.bind(this)}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <Input type="text"
                                        defaultValue={this.state.country}
                                        addonBefore={<span className="fa fa-globe"></span>}
                                    placeholder="Country*" required onChange={this.onCountryChange.bind(this)}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="login-tbox">
                                    <Input type="number"
                                        defaultValue={this.state.phoneNumber}
                                        addonBefore={<Glyphicon glyph="phone-alt" />}
                                    placeholder="Phone Number*" required onChange={this.onPhoneNumberChange.bind(this)}/>
                                <div className='danger-text'>
                                        {this.state.phoneNumberError}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} sm={6}>

                            <button type= "submit" className="back-button pointer" onClick={this.onBack.bind(this)}>
                                Back
                            </button>
                        </Col>
                        <Col xs={12} sm={6}>
                            <button type= "submit" className="next-button pointer">
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
     userinfo:state.signUpData.signupInfo.userinfo,
     statusText:state.signUpData.statusText
});

const mapDispatchToProps = (dispatch) => ({
    signupActions: bindActionCreators(SaveStatus, dispatch),
    appActions: bindActionCreators(appActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
