'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as appActionCreators from '../actions/app';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Element} from 'react-scroll';

class ForgotMessage extends Component {

    gotoLoginPage(e) {
        //this.props.routeDispatch(push("login"));
        e.preventDefault();
        this.props.appActions.showLogin();
        this.setState({selectedOption: 'login'});
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
                                                                <div className="forgot-password-message">
                                                                    We have sent you a reset email to the email address you have on file for your account.</div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col smOffset={3} xs={12} sm={6}>
                                                                <div className="forgot-password  text-center"
                                                                     onClick={this.gotoLoginPage.bind(this)}>Go to login page</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotMessage);

/**
 * Created by sonalb on 3/14/2016.
 */
