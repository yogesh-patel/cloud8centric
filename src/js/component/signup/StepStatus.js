'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../../actions/signUp';

import {Element} from 'react-scroll';

class StepStatus extends Component {

    onStep1(){ 
        this.props.empActions.saveStatus("step1");
    }

    onStep2(){ 
        this.props.empActions.saveStatus("step2");
    }

    onStep3(){ 
        this.props.empActions.saveStatus("step3");
    }

    render() {
        var step_1_class = "circleBase type1";
        var step_2_class = "circleBase type1";
        var step_3_class = "circleBase type1";

        var {step_1_Status,step_2_Status,step_3_Status,currentStep} = this.props;
        if(currentStep == "step1"){
            // step_1_class+ =
            //
        }
        if(step_1_Status){
            step_1_class += " type2";
        }

        if(step_2_Status){
            step_2_class += " type2";
        }

        if(step_3_Status){
            step_3_class += " type2";
        }

        return (
                <Row>
                    <Col Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="signUp-box">
                        <Row>
                            <Col md={4} sm={4} xs={4}>
                                <h5>Contact Details</h5>
                                    <div onClick={this.onStep1.bind(this)} className="pointer">
                                        <div className={step_1_class}></div>
                                    </div>
                            </Col>
                            <Col md={4} sm={4} xs={4}>
                                <h5>Organization Details</h5>
                                    <div onClick={this.onStep2.bind(this)} className="pointer">
                                        <div className={step_2_class}></div>
                                    </div>
                            </Col>
                            <Col md={4} sm={4} xs={4}>
                                <h5>Organization Details</h5>
                                    <div onClick={this.onStep3.bind(this)} className="pointer">
                                        <div className={step_3_class}></div>
                                    </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

        )
    }

};

const mapStateToProps = (state) => ({
    step_1_Status:state.signUpData.step_1_Status,
    step_2_Status:state.signUpData.step_2_Status,
    step_3_Status:state.signUpData.step_3_Status,
    currentStep:state.signUpData.currentStep
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(SaveStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StepStatus);
