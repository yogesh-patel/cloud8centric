'use strict';

import React, {Component,View} from 'react';
import {Grid, Row, Col,Button,Input,ButtonInput,Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../actions/signUp';
import Footer from './common/Footer'
import Header from './common/Header'
import StepStatus from './StepStatus'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

class SignUp extends Component{

  constructor(props){
        super(props);
        this.state= {}
    }

  render(){
    //alert(this.props.status);
    return(
          <Grid fluid>
            <Panel>
              <Row>
                <Col md={12}>
                  <StepStatus/>
                  <NextStep status={this.props.status}/>
                </Col>
              </Row>
            </Panel>
          </Grid>
    );
  }
}

class NextStep extends Component{
  constructor(props){
        super(props);
        this.state= {step2:<Step1/>}
    }

  render(){
    if(this.props.status==="Step1Completed"){
     this.state.step2 = <Step2/>;
    }
   if(this.props.status==="Step_2_Completed"){
      this.state.step2 = <Step3/>;
    }
    if(this.props.status==="Step_3_Completed"){
      alert("DATA_LOADED_SUCCESSFULLY")
    }
    return(
      <div>
        {this.state.step2}
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
