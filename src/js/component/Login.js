'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Jumbotron, Glyphicon, Input, Button} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreators from '../actions/auth';
import {Element} from 'react-scroll';
import * as appActionCreators from '../actions/app';
import { pushState } from 'redux-router';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'kevinp',
            password: 'kevindemo88',
            usernameError: '',
            passwordError: '',
            invalidError: '',
            displayBox:'block',
            serverErrorMessage: false
        };
    }

    gotoForgotPasswordPage(e) {
        e.preventDefault();
        this.props.appActions.showForgotPassword();
    }

    authenticate(e) {
        e.preventDefault();
        e.stopPropagation();

        let usernameError = "";
        let passwordError = "";
        let invalidError = "";

        if (this.state.username == "") {
            usernameError = "Username is mandatory";
        }
        if (this.state.password == "") {
            passwordError = "Password is mandatory";
        }

        this.setState({
            usernameError: usernameError,
            passwordError: passwordError,
            invalidError: invalidError

        });
        if (usernameError == "" && passwordError == "" && invalidError == "")
        this.props.authActions.authenticateUser(this.state.username, this.state.password);

    }

    onUsernameChange(e) {
        this.setState({
            username: e.target.value,
            usernameError: (e.target.value !== "") ? "" : "Username is mandatory",
            invalidError: (e.target.value !== "") ? "" : "",
            serverErrorMessage: false
        });
        if(e.target.value == '' && this.state.serverErrorMessage){
            this.props.authActions.emptyStatuxText();
        }
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value,
            passwordError: (e.target.value !== "") ? "" : "Password is mandatory",
            invalidError: (e.target.value !== "") ? "" : "",
            serverErrorMessage: false
        });
        if(e.target.value == '' & this.state.serverErrorMessage){
            this.props.authActions.emptyStatuxText();
        }
    }

    gotoSignUpPage(e) {
        e.preventDefault();
        this.props.appActions.showSignUp();
    }


    render() {

        var {statusText} = this.props;

        if(statusText !== null){
            this.state.serverErrorMessage = true;
        }
        else{
            this.state.serverErrorMessage = false;
        }

        return (
            <Element className="splashScreen" name="splashScreen">
                <Grid fluid>
                    <Row>
                        <Jumbotron className="text-center">
                            <div  className="content" >
                                <ReactCSSTransitionGroup transitionName="react-animation"
                                                         transitionAppear
                                                         transitionAppearTimeout={500}
                                                         transitionEnter={false}
                                                         transitionLeave={false}>
                                    <Grid>
                                        <form name="signup" onSubmit={this.authenticate.bind(this)}>
                                            <Row>
                                                <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="login-box" id="testScreen">
                                                    <div className="login-label text-center">LOGIN</div>
                                                    <Grid>
                                                        <Row>
                                                            <Col xs={12}>
                                                                <div className="login-tbox">
                                                                    <div className='text-danger text-center'>
                                                                        {this.props.statusText}
                                                                    </div>
                                                                    <Input type="text"
                                                                           addonBefore={<Glyphicon glyph="user" />}
                                                                           placeholder="Username"
                                                                           value={this.state.username}
                                                                           onChange={this.onUsernameChange.bind(this)}/>
                                                                    <div className='text-danger'>
                                                                        {this.state.usernameError}
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col xs={12}>
                                                                <div className="login-tbox">
                                                                    <Input type="password"
                                                                       addonBefore={<Glyphicon glyph="lock" />}
                                                                        value={this.state.password}
                                                                       placeholder="Password"
                                                                       onChange={this.onPasswordChange.bind(this)}/>
                                                                    <div className='text-danger'>
                                                                            {this.state.passwordError}
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={12} sm={6}>
                                                                <Button bsStyle="warning" bsSize="large" className="full-width"
                                                                     onClick={this.gotoSignUpPage.bind(this)}>
                                                                    SIGNUP
                                                                </Button>
                                                            </Col>
                                                            <Col xs={12} sm={6}>
                                                                <Button type="submit" bsStyle="primary" bsSize="large" className="full-width">
                                                                    LOGIN
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={12} sm={12}>
                                                                <div className="forgot-password  text-center"
                                                                     onClick={this.gotoForgotPasswordPage.bind(this)}>
                                                                    Forgot Password?
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Grid>

                                                </Col>
                                            </Row>
                                        </form>
                                    </Grid>
                                </ReactCSSTransitionGroup>
                            </div>
                        </Jumbotron>
                    </Row>
                </Grid>
            </Element>

        )
    }

};



const mapStateToProps = (state) => ({
    statusText: state.auth.statusText
});

const mapDispatchToProps = (dispatch) => ({
    appActions: bindActionCreators(appActionCreators, dispatch),
    authActions: bindActionCreators(authActionCreators, dispatch),
    routeDispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
