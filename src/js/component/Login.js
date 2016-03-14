'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreators from '../actions/auth';

import {Element} from 'react-scroll';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    authenticate(e) {
        if (this.state.username == "" || this.state.password == "") return;
        e.preventDefault();
        this.props.authActions.authenticateUser(this.state.username, this.state.password);
    }

    onUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
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

                                                    <div className="login-label text-center">LOGIN</div>
                                                    <Grid>
                                                        <Row>
                                                            <Col xs={12}>
                                                                <Input type="text"
                                                                       addonBefore={<Glyphicon glyph="user" />}
                                                                       placeholder="User Name"
                                                                       onChange={this.onUsernameChange.bind(this)}/>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={12}>
                                                                <Input type="password"
                                                                       addonBefore={<Glyphicon glyph="asterisk" />}
                                                                       placeholder="Password"
                                                                       onChange={this.onPasswordChange.bind(this)}/>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={12} sm={6}>
                                                                <div className="signup-button pointer">
                                                                    Signup
                                                                </div>
                                                            </Col>
                                                            <Col xs={12} sm={6}>
                                                                <div className="login-button pointer" onClick={this.authenticate.bind(this)}>
                                                                    Login
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={12} sm={12}>
                                                                <div className="forgot-password  text-center">
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

}
;

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
   authActions: bindActionCreators(authActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
