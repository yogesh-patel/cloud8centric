'use strict';

import React, {Component,View} from 'react';
import {Grid, Row, Col,Jumbotron,Button,Input,ButtonInput,Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../../actions/signUp';
import StepStatus from './StepStatus'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import {Element} from 'react-scroll';
import NextStep from './NextStep';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SignUp extends Component{

  constructor(props){
        super(props);
        this.state= {}
    }

  render(){
    var comp = null;
    if(this.props.currentStep == 'step1'){
      comp = <Step1 />;
    }
    else if(this.props.currentStep == 'step2'){
      comp = <Step2 />;
    }
    else if(this.props.currentStep == 'step3'){
      comp = <Step3 />;
    }
    return(
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
                                                              <Row className="text-center">
                                                                <Col md={12}>
                                                                  <StepStatus/>
                                                                </Col>
                                                              </Row>
                                                              <Row>
                                                                <Col md={12}>
                                                                  {comp}
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

const mapStateToProps = (state) => ({
    currentStep:state.signUpData.currentStep
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
