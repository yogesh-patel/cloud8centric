'use strict';

import React, {Component,View} from 'react';
import {Grid, Row, Col,Jumbotron,Button,Input,ButtonInput,Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../actions/signUp';
import Footer from './common/Footer'
import Header from './common/Header'
import StepStatus from './StepStatus'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import {Element} from 'react-scroll';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SignUp extends Component{

  constructor(props){
        super(props);
        this.state= {}
    }

  render(){
    //alert(this.props.status);
    return(
          <Element className="splashScreen " name="splashScreen">
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
                                                              <Row className="text-center">
                                                                <Col md={12}>
                                                                  <StepStatus/>
                                                                </Col>
                                                              </Row>
                                                              <Row>
                                                                <Col md={12}>
                                                                  <NextStep status={this.props.status}/>
                                                                </Col>
                                                              </Row>
                                                          </Grid>
                              </ReactCSSTransitionGroup>
                          </div>
                      </Jumbotron>
                  </Row>
              </Grid>
          </Element>
      );
    }
}

  class NextStep extends Component{
    constructor(props){
      super(props);
      this.state= {currentComponent:<Step1/>}
    }

    render(){
      if(this.props.status.step1 === "Step1"){
        this.state.currentComponent = <Step2/>;
      }

      if(this.props.status.step2 === "Step2"){
        this.state.currentComponent = <Step3/>;
      }

      if(this.props.status.step3 === "Step3"){
        //alert("DATA_LOADED_SUCCESSFULLY")
      }

      if(this.props.status.step1 === "OnBackStep1"){
        this.state.currentComponent = <Step1/>;
      }

      else if(this.props.status.step2 === "OnBackStep2"){
        this.state.currentComponent = <Step2/>;
      }

      else if(this.props.status.step3 === "OnBackStep3"){
        this.state.currentComponent = <Step3/>;
      }

      return(
        <div>
          {this.state.currentComponent}
        </div>
      );
    }
  }

const mapStateToProps = (state) => ({
    status:state.signUpData.status
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
