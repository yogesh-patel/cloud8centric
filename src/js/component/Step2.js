'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Panel,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Element} from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../actions/signUp';

class Step2 extends Component {

    onNext(e){ 
       e.preventDefault();
       this.props.empActions.saveStatus("Step_2_Completed");
     }

    render() {
        return (
            <Grid>
                <Row className="text-center">
                    <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="signUp-box">

                        <div className="login-label text-center">Personal Details</div>
                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                           placeholder="First Name"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                           placeholder="Last Name"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                           placeholder="Email"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                           placeholder="City"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <div className="signup-button" onClick={this.onNext.bind(this)}>
                                        Next
                                    </div>
                                </Col>
                            </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

const mapStateToProps = (state) => ({
    // status:state.signUpData.status
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(SaveStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
