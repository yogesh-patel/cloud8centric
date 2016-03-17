'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as appActionCreators from '../actions/app';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Element} from 'react-scroll';

class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: ''
        };
    }

    gotoForgotMessagePage(e) {
        e.preventDefault();
        this.props.appActions.showForgotMessage();
        this.setState({selectedOption: 'forgotMessage'});
    }

    gotoLoginPage(e) {
        e.preventDefault();
        this.props.appActions.showLogin();
        this.setState({selectedOption: 'login'});
    }

    authenticateEmail(e) {
        if (this.state.email == "") {
            this.setState({emailError: "Email is mandatory"});
            return;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))) {
            this.setState({emailError: "You have entered an invalid email address!"});
            return;
        }
        else {
            this.props.appActions.showForgotMessage();
        }
    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
        this.setState({emailError: (e.target.value !== "") ? "" : "Please enter email"});
    }

    render() {
        return (
            <Element className="splashScreen" name="splashScreen">
                <Grid fluid>
                    <Row>
                        <Jumbotron className="text-center">
                            <div className="content">
                                <ReactCSSTransitionGroup transitionName="react-animation"
                                                         transitionAppear
                                                         transitionAppearTimeout={500}
                                                         transitionEnter={false}
                                                         transitionLeave={false}>
                                    <Grid>
                                        <form name="signup">

                                            <Row>
                                                <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="login-box">

                                                    <div className="login-label text-center">Forgot Password</div>
                                                    <Grid>
                                                        <Row>
                                                            <Col xs={12}>
                                                                <Input type="text"
                                                                       addonBefore={<Glyphicon glyph="user" />}
                                                                       placeholder="Email"
                                                                       onChange={this.onEmailChange.bind(this)}/>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={12}>
                                                                <div className='txt-danger'>
                                                                    {this.state.emailError}</div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col smOffset={3} xs={12} sm={6}>
                                                               <div> <div className="signup-button pointer"
                                                                     onClick={this.authenticateEmail.bind(this)}>
                                                                    Submit
                                                                </div><div className="forgot-password  text-center" onClick={this.gotoLoginPage.bind(this)}>Back to login</div></div>
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

}
;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    appActions: bindActionCreators(appActionCreators, dispatch),
    routeDispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
