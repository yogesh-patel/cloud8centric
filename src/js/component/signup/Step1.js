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
              username:props.userinfo.username,
              password:props.userinfo.password,
              confirmPassword:props.userinfo.confirmPassword,
              firstName:props.userinfo.firstName,
              lastName:props.userinfo.lastName,
              passwordError:'',
              emailAddress:props.userinfo.emailAddress
          }
    }

    onHandleNextClick(e){
        e.preventDefault();
        if(this.state.confirmPassword !== this.state.password){
            this.setState({passwordError:"Password and confirm password should be same"});
        }
        else{
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
        this.setState({password: e.target.value,passwordError:''});
    }
    onConfirmPasswordChange(e) {
        this.setState({confirmPassword: e.target.value,passwordError:''});
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
                                        <div className="login-tbox">
                                            <Input type="text"
                                                defaultValue={userinfo.firstName}
                                                   addonBefore={<Glyphicon glyph="user" />}
                                                   placeholder="First Name*" required onChange={this.onFirstNameChange.bind(this)}/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <div className="login-tbox">
                                            <Input type="text"
                                                    defaultValue={userinfo.lastName}
                                                   addonBefore={<Glyphicon glyph="user" />}
                                                   placeholder="Last Name*" required onChange={this.onLastNameChange.bind(this)}/>
                                         </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <div className="login-tbox">
                                            <Input type="email"
                                                defaultValue={userinfo.emailAddress}
                                                   addonBefore={<Glyphicon glyph="envelope" />}
                                                   placeholder="Email*" required onChange={this.onEmailChange.bind(this)}/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <div className="login-tbox">
                                            <Input type="text"
                                                defaultValue={userinfo.username}
                                                   addonBefore={<Glyphicon glyph="user" />}
                                                   placeholder="Username*" required onChange={this.onUsernameChange.bind(this)}/>
                                       </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <div className="login-tbox">
                                            <Input type="password"
                                                defaultValue={userinfo.password}
                                                addonBefore={<Glyphicon glyph="lock" />}
                                                   placeholder="Password*" required onChange={this.onConfirmPasswordChange.bind(this)}/>
                                         </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <div className="login-tbox">
                                            <Input type="password"
                                                defaultValue={userinfo.confirmPassword}
                                                addonBefore={<Glyphicon glyph="lock" />}
                                                   placeholder="Confirm Password*" required onChange={this.onPasswordChange.bind(this)}/>
                                               <div className='text-danger'>
                                                   {this.state.passwordError}
                                               </div>
                                         </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
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
    userinfo:state.signUpData.signupInfo.userinfo
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(SaveStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
