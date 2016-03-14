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
        this.props.empActions.saveStatus({
                step1: "Step1",
                step2: "Step2",
                step3: "Step3"}
            );
        this.props.empActions.saveCircleStatus({
                 step1: "Step_1_Completed",
                 step2: "Step_2_Completed",
                 step3: "Step_3_Completed"}
             );
        }

    onBack(e){ 
        e.preventDefault();
        this.props.empActions.saveStatus({
              step1: "",
              step2: "OnBackStep2",
              step3: ""}
          );
        }

    render() {
        return (
                <Row className="text-center">
                    <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="signUp-box">
                        <div className="login-label text-center">Company Details</div>
                        <Row>
                            <Col xs={12}>
                            <Input type="text"
                                addonBefore={<Glyphicon glyph="asterisk" />}
                            placeholder="Company Name"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Input type="text"
                                    addonBefore={<Glyphicon glyph="asterisk" />}
                                placeholder="Company url"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Input type="text"
                                    addonBefore={<Glyphicon glyph="asterisk" />}
                                placeholder="Company Address"/>
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={12} sm={6}>
                            <div className="login-button pointer" onClick={this.onBack.bind(this)}>
                            Back
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className="signup-button pointer" onClick={this.onNext.bind(this)}>
                            Submit
                            </div>
                        </Col>
                        </Row>
                    </Col>
                </Row>
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
