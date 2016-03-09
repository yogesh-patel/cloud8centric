'use strict';

import React, {Component,View} from 'react';
import {Grid, Row, Col,Button,Input,ButtonInput,Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as empActionCreators from '../actions/signUp';
import Footer from './common/Footer'
import Header from './common/Header'

class SignUp extends Component{

  constructor(props){
        super(props);
        this.state= {
          value:'',
          username:'',
          showResults: false,
          password:'',
          confirmPassword:'',
          firstName:'',
          lastName:'',
          email:'',
          organizationName:'',
          organizationURL:'',
          addressLine1:'',
          addressLine2:'',
          addressLine3:'',
          city:'',
          province:'',
          zipCode:'',
          country:'',
          phoneNumber:''}
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
  onOrganizationNameChange(e) {
    this.setState({organizationName: e.target.value});
  }

  onOrganizationURLChange(e) {
    this.setState({organizationURL: e.target.value});
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

  onEmailChange(e) {
    this.setState({email: e.target.value});
  }

  onLastNameChange(e) {
    this.setState({lastName: e.target.value});
  }

  onSubmit(e){ 
    e.preventDefault();
    if(this.state.password != this.state.confirmPassword){
      this.setState({ showResults: true });
    }else{
      console.log(this.state);
    }
  }

  onUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  onFirstNameChange(e) {
    this.setState({firstName: e.target.value});
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value});
  }

  onConfirmPasswordChange(e) {
    this.setState({confirmPassword: e.target.value});
  }

  render(){
    return(
      <div>
        <Header/>
          <div className="container-fluid top-header-margin" >
            <div className="row top-buffer">
              <form name="signup" onSubmit={this.onSubmit.bind(this)}>
                <Col xs={12} md={12} sm={12}>
                  <Row>
                    <div className="col col-xs-12 col-sm-12 col-md-6">
                      <div className="panel panel-info">
                        <div className="panel-heading">
                          <Row>
                            <div className="col col-xs-12 col-sm-12 col-md-6">
                              <label>Contact Details</label>
                            </div>
                          </Row>
                        </div>

                        <div className="panel-body">
                           <Row>
                            <div className="col col-xs-12 col-sm-12 col-md-12">
                              <div className="form-horizontal">
                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">First Name</label>
                                  <div className="col-sm-9">
                                    <input name="firstName"
                                        className="form-control"
                                        placeholder="John"
                                        required/>
                                  </div>
                                </div>

                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">Last Name</label>
                                  <div className="col-sm-9">
                                    <input type="text"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Smith"
                                        required/>
                                  </div>
                                </div>

                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">Email</label>
                                  <div className="col-sm-9">
                                    <input name="emailAddress"
                                        type="email" className="form-control"
                                        placeholder="john@example.com"
                                        required validationError="This is not a valid email"/>
                                  </div>
                                </div>

                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">Username</label>
                                  <div className="col-sm-9">
                                    <input name="username"
                                        className="form-control"
                                        placeholder="john"
                                        required onChange={this.onUsernameChange.bind(this)}/>
                                  </div>
                                </div>

                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">Password</label>
                                  <div className="col-sm-9">
                                    <input name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        required onChange={this.onPasswordChange.bind(this)}/>
                                      {this.state.showResults ? <ValidationText /> : null}
                                  </div>
                                </div>

                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">Confirm Password</label>
                                  <div className="col-sm-9">
                                    <input name="confirmPassword"
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        required onChange={this.onConfirmPasswordChange.bind(this)}/>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </Row>
                        </div>

                      </div>
                    </div>

                    <div className="col col-xs-12 col-sm-12 col-md-6">
                      <div className="panel panel-info">

                        <div className="panel-heading">
                          <Row>
                            <div className="col col-xs-12 col-sm-12 col-md-6">
                              <label>Organization Details</label>
                            </div>
                          </Row>
                        </div>

                        <div className="panel-body">
                          <Row>
                            <div className="col col-xs-12 col-sm-12 col-md-12">
                              <div className="form-horizontal">
                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">Organization Name</label>
                                  <div className="col-sm-9">
                                    <input name="organizationName"
                                        className="form-control"
                                        placeholder="Organization Name"
                                        required/>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <label className="col-sm-3 control-label bold-text">Organization URL</label>
                                  <div className="col-sm-9">
                                    <input name="organizationURL"
                                        type="url"
                                        className="form-control"
                                        placeholder="http://centric.com"/>
                                   </div>
                                </div>

                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">Address Line1</label>
                                  <div className="col-sm-9">
                                    <input name="addressLine1"
                                        className="form-control"
                                        placeholder="Address Line1"
                                        required/>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <label className="col-sm-3 control-label bold-text">Address Line2</label>
                                  <div className="col-sm-9">
                                    <input name="addressLine2"
                                        className="form-control"
                                        placeholder="Address Line2"/>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <label className="col-sm-3 control-label bold-text">Address Line2</label>
                                  <div className="col-sm-9">
                                    <input name="addressLine3"
                                        className="form-control"
                                        placeholder="Address Line3"/>
                                  </div>
                                </div>

                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">City</label>
                                  <div className="col-sm-9">
                                    <input name="city"
                                        className="form-control"
                                        placeholder="City"
                                        required/>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <label className="col-sm-3 control-label bold-text">Province</label>
                                  <div className="col-sm-9">
                                    <input name="province"
                                        className="form-control"
                                        placeholder="Province"/>
                                  </div>
                                </div>

                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">Zip Code</label>
                                  <div className="col-sm-9">
                                    <input name="zipCode"
                                        className="form-control"
                                        placeholder="Zip Code"
                                        required/>
                                  </div>
                                </div>

                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">Country</label>
                                  <div className="col-sm-9">
                                    <input name="country"
                                        className="form-control"
                                        placeholder="Country"
                                        required/>
                                  </div>
                                </div>

                                <div className="form-group required">
                                  <label className="col-sm-3 control-label bold-text">Phone Number</label>
                                  <div className="col-sm-9">
                                    <input name="phoneNumber"
                                        type="number"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        required/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Row>
                        </div>

                      </div>
                    </div>

                  </Row>

                  <div className="col col-xs-12 col-sm-12 col-md-12">
                    <button type="submit" className="btn btn-primary pull-right left-buffer">Sign Up</button>
                    <button type="button" className="btn btn-default pull-right left-buffer" >Back</button>
                  </div>

                  <div className="row">
                    <div className="col-xs-12">&nbsp;</div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12">&nbsp;</div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">&nbsp;</div>
                  </div>

                </Col>

              </form>
            </div>
          </div>
      <Footer/>
    </div>
    );
  }
}

class ValidationText extends Component{
  render(){
    return(
      <p className="text-danger">Password not match</p>
    );
  }
}


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    addData: bindActionCreators(empActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
