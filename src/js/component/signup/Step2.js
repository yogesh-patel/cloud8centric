'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Button,Glyphicon,Panel,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Element} from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../../actions/signUp';

class Step2 extends Component {

    constructor(props){
        super(props);
        this.state= {
          organizationName:props.step_2_data.organizationName,
          organizationURL:props.step_2_data.organizationURL,
          phoneNumberError:'',
          phoneNumber:props.step_2_data.phoneNumber
      }
    }

    onNext(e){ 
        e.preventDefault();
        if(this.state.phoneNumber.length !== 10){
            this.setState({phoneNumberError:"Phone number must be 10 digits"});
        }
        else{
            this.props.empActions.step_2_Data({
                organizationName:this.state.organizationName,
                organizationURL:this.state.organizationURL,
                phoneNumber:this.state.phoneNumber
            });
        }
    }

    componentWillUnmount(){
        var{step_2_data} = this.props;
        this.props.empActions.onComponentRemoved({
            organizationName:this.state.organizationName,
            organizationURL:this.state.organizationURL,
            phoneNumber:this.state.phoneNumber,
            city:step_2_data.city,
            province:step_2_data.province,
            zipCode:step_2_data.zipCode,
            country:step_2_data.country,
            addressLine1:step_2_data.addressLine1,
            addressLine2:step_2_data.addressLine2,
            addressLine3:step_2_data.addressLine3,
        });
    }

    onBack(e){ 
        e.preventDefault();
        this.props.empActions.onBackClick("step1");
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

    render() {
        var {step_2_data} = this.props;
        return (
            <form name="signup" onSubmit={this.onNext.bind(this)}>
                <Row className="text-center">
                    <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="signUp-box">

                        <div className="login-label text-center">Organization Details</div>
                            <Row>
                                <Col xs={12}>
                                    <div className="login-tbox">
                                        <Input type="text"
                                            defaultValue={step_2_data.organizationName}
                                            addonBefore={<span className="fa fa-users"></span>}
                                               placeholder="Organization Name*" required onChange={this.onOrganizationNameChange.bind(this)}/>
                                   </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className="login-tbox">
                                        <Input type="url"
                                            defaultValue={step_2_data.organizationURL}
                                            addonBefore={<span className="fa fa-link --- URL"></span>}
                                               placeholder="URL" onChange={this.onOrganizationURLChange.bind(this)}/>
                                   </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className="login-tbox">
                                        <Input type="number"
                                            defaultValue={step_2_data.phoneNumber}
                                            addonBefore={<Glyphicon glyph="phone-alt" />}
                                        placeholder="Phone Number*" required onChange={this.onPhoneNumberChange.bind(this)}/>
                                    <div className='danger-text'>
                                            {this.state.phoneNumberError}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} sm={6} md={6} >
                                    <Button bsStyle="warning" bsSize="large" className="full-width"
                                        onClick={this.onBack.bind(this)}>
                                        BACK
                                    </Button>
                                </Col>
                                <Col xs={6} sm={6} md={6} >
                                    <Button type="submit" bsStyle="primary" bsSize="large" className="full-width">
                                        NEXT
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
    step_2_data:state.signUpData.signupInfo.organizationInfo
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(SaveStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
