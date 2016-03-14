'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../actions/signUp';

import {Element} from 'react-scroll';

class StepStatus extends Component {

    onStep1(){ 
        //alert("onclick");
        if(this.props.circleStatus.step1 === "Step_1_Completed"){
            this.props.empActions.saveStatus({
                    step1: "OnBackStep1",
                    step2: "",
                    step3: ""}
                );
        }
    }

    onStep2(){ 
        if(this.props.circleStatus.step2 === "Step_2_Completed"){
            this.props.empActions.saveStatus({
                    step1: "",
                    step2: "OnBackStep2",
                    step3: ""}
                );
        }
    }

    onStep3(){ 
        if(this.props.circleStatus.step3 === "Step_3_Completed"){
            this.props.empActions.saveStatus({
                    step1: "",
                    step2: "",
                    step3: "OnBackStep3"}
                );
        }
    }

    render() {
        return (

                <Row>
                    <Col Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="signUp-box">
                        <Row>
                            <Col md={4} sm={4} xs={4}>
                                <h5>Contact Details</h5>
                                <NextStep1 circleStatus={this.props.circleStatus}
                                    onStep1={this.onStep1.bind(this)}/>
                            </Col>
                            <Col md={4} sm={4} xs={4}>
                                <h5>Organization Details</h5>
                                <NextStep2 circleStatus={this.props.circleStatus}
                                    onStep2={this.onStep2.bind(this)}/>
                            </Col>
                            <Col md={4} sm={4} xs={4}>
                                <h5>Organization Details</h5>
                                <NextStep3 circleStatus={this.props.circleStatus}
                                    onStep3={this.onStep3.bind(this)}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

        )
    }

};

    class NextStep1 extends Component{
        constructor(props){
            super(props);
            this.state= {step1:''}
        }

        render(){
            //alert(this.props.circleStatus.step1);
            this.state.step1 = <div className="circleBase type1"></div>;
            if(this.props.circleStatus.step1 === "Step_1_Completed"){
                this.state.step1 = <div className="circleBase type2"></div>;
            }
            return(
                <div onClick={this.props.onStep1} className="pointer">
                    {this.state.step1}
                </div>
            );
        }
    }

    class NextStep2 extends Component{
        constructor(props){
            super(props);
            this.state= {step2:''}
        }

        render(){
            this.state.step2 = <div className="circleBase type1"></div>;
            if(this.props.circleStatus.step2 === "Step_2_Completed"){
                this.state.step2 = <div className="circleBase type2"></div>;
            }
            return(
                <div onClick={this.props.onStep2} className="pointer">
                    {this.state.step2}
                </div>
            );
        }
    }


    class NextStep3 extends Component{
        constructor(props){
            super(props);
            this.state= {step3:''}
        }

        render(){
            this.state.step3 = <div className="circleBase type1"></div>;
            if(this.props.circleStatus.step3 == "Step_3_Completed"){
                this.state.step3 = <div className="circleBase type2"></div>;
            }
            return(
                <div onClick={this.props.onStep3} className="pointer">
                    {this.state.step3}
                </div>
            );
        }
    }

const mapStateToProps = (state) => ({
    //status:state.signUpData.status,
    circleStatus:state.signUpData.circleStatus
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(SaveStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StepStatus);
