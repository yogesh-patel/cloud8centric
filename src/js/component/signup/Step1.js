'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Panel,Input,Button} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Element} from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../../actions/signUp';

class Step1 extends Component {

    constructor(props){
        super(props);
        this.state= {
              username:'',
              password:'',
              confirmPassword:'',
              firstName:'',
              lastName:'',
              emailAddress:''
          }
    }

    onHandleNextClick(e){
        e.preventDefault();
        this.props.empActions.saveStatus(
            {
                step1: "Step1",
                step2: "",
                step3: ""
            });
        this.props.empActions.saveCircleStatus(
            {
                step1: "Step_1_Completed",
                step2: "",
                step3: ""
            }
        );
        this.props.empActions.step_1_Data(
            {
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                emailAddress:this.state.emailAddress,
                username:this.state.username,
                password:this.state.password,
                confirmPassword:this.state.confirmPassword,
                roles: ["AccountOwner"]
            }
        );
    }

    onFirstNameChange(e) {
        this.setState({firstName: e.target.value});
    }
    onLastNameChange(e) {
        this.setState({lastName: e.target.value});
    }
    onEmailChange(e) {
        this.setState({emailAddress: e.target.value});
    }
    onUsernameChange(e) {
        this.setState({username: e.target.value});
    }
    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }
    onConfirmPasswordChange(e) {
        this.setState({confirmPassword: e.target.value});
    }

    render() {
        var {userinfo} = this.props;
        return (
                <form name="signup" onSubmit={this.onHandleNextClick.bind(this)}>
                    <Row className="text-center">
                        <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="signUp-box">

                            <div className="login-label text-center">Contact Details</div>
                                <Row>
                                    <Col xs={12}>
                                        <Input type="text"
                                               addonBefore={<Glyphicon glyph="user" />}
                                               defaultValue={userinfo.firstName}
                                               placeholder="First Name" required onChange={this.onFirstNameChange.bind(this)}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Input type="text"
                                               defaultValue={userinfo.lastName}
                                               addonBefore={<Glyphicon glyph="user" />}
                                               placeholder="Last Name" required onChange={this.onLastNameChange.bind(this)}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Input type="email"
                                               defaultValue={userinfo.emailAddress}
                                               addonBefore={<Glyphicon glyph="envelope" />}
                                               placeholder="Email" required onChange={this.onEmailChange.bind(this)}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Input type="text"
                                               defaultValue={userinfo.username}
                                               addonBefore={<Glyphicon glyph="asterisk" />}
                                               placeholder="User Name" required onChange={this.onUsernameChange.bind(this)}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Input type="password"
                                               defaultValue={userinfo.Password}
                                               addonBefore={<Glyphicon glyph="asterisk" />}
                                               placeholder="Password" required onChange={this.onPasswordChange.bind(this)}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Input type="password"
                                               defaultValue={userinfo.confirmPassword}
                                               addonBefore={<Glyphicon glyph="asterisk" />}
                                               placeholder="Confirm Password" required onChange={this.onConfirmPasswordChange.bind(this)}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <button className="Next-button pointer">
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
    userinfo:state.signUpData.signupInfo.userinfo
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(SaveStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
