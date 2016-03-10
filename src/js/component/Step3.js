'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Panel,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Element} from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../actions/signUp';

class Step3 extends Component {

    onNext(e){ 
       e.preventDefault();
       this.props.empActions.saveStatus("Step_3_Completed");
     }

    render() {
        return (
            <Grid>
                <Row className="text-center">
                    <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="signUp-box">

                        <div className="login-label text-center">Company Details</div>
                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                           placeholder="Company Name"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                           placeholder="Company url"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                           placeholder="Company Address"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className="signup-button" onClick={this.onNext.bind(this)}>
                                        Submit
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

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
