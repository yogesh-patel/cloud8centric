'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Panel,Input} from 'react-bootstrap';
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
                                    <button type= "submit" className="back-button pointer" onClick={this.onBack.bind(this)}>
                                        Back
                                    </button>
                                </Col>
                                <Col xs={6} sm={6} md={6} >
                                    <button type= "submit" className="next-button pointer">
                                        Next
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
    step_2_data:state.signUpData.signupInfo.organizationInfo
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(SaveStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
