'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Element} from 'react-scroll';

class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: ''
        };
    }

    authenticateEmail(e) {
        if (this.state.email == "") {
            this.setState({emailError: "Please enter email"});
        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            return (true)
        }
        else {
            this.setState({emailError: "You have entered an invalid email address!"});
            return;
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
                                                                <div className='text-danger'>
                                                                    {this.state.emailError}</div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col smOffset={3} xs={12} sm={6}>
                                                                <div className="signup-button pointer"
                                                                     onClick={this.authenticateEmail.bind(this)}>
                                                                    Submit
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

//const mapStateToProps = (state) => ({
//    statusText: state.auth.statusText
//});
//
//const mapDispatchToProps = (dispatch) => ({
//    authActions: bindActionCreators(authActionCreators, dispatch)
//});

export default ForgotPassword;

