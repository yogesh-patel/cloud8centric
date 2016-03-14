'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Panel,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Element} from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../actions/signUp';

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
        var {step_2_data} = this.props;
        e.preventDefault();
        this.props.empActions.saveStatus({
            step1: "Step1",
            step2: "Step2",
            step3: "Step3"}
        );
        this.props.empActions.saveCircleStatus({
            step1: "Step_1_Completed",
            step2: "Step_2_Completed",
            step3: "Step_3_Completed"}
        );
        this.props.empActions.step_3_Data(
        {
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
        });
    }

    onBack(e){ 
        e.preventDefault();
        this.props.empActions.saveStatus({
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
                            <div className="login-button pointer" onClick={this.onBack.bind(this)}>
                            Back
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className="signup-button pointer" onClick={this.onNext.bind(this)}>
                            Submit
                            </div>
                        </Col>
                        </Row>
                    </Col>
                </Row>
        )
    }

}

const mapStateToProps = (state) => ({
     step_2_data:state.signUpData.signupInfo.organizationInfo
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(SaveStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
