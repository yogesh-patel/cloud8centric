'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../actions/signUp';

import {Element} from 'react-scroll';

class StepStatus extends Component {

    render() {
        return (
            <Grid>
              <Row className="text-center">
                <Col md={4} sm={4} xs={4}>
                  <h4>1</h4>
                  <NextStep1 status={this.props.status}/>
                </Col>
                <Col md={4} sm={4} xs={4}>
                    <h4>2</h4>
                    <NextStep2 status={this.props.status}/>
                </Col>
                <Col md={4} sm={4} xs={4}>
                  <h4>3</h4>
                  <NextStep3 status={this.props.status}/>
                </Col>
              </Row>

            </Grid>
        )
    }

};

class NextStep1 extends Component{
  constructor(props){
        super(props);
        this.state= {step2:''}
    }

  render(){
      this.state.step2 = <div className="circleBase type1"></div>;
      if(this.props.status==="Step1Completed"){
       this.state.step2 = <div className="circleBase type2"></div>;
      }
      return(
        <div>
          {this.state.step2}
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
      if(this.props.status==="Step_2_Completed"){
       this.state.step2 = <div className="circleBase type2"></div>;
      }
      return(
        <div>
          {this.state.step2}
        </div>
      );
    }
}


class NextStep3 extends Component{
  constructor(props){
        super(props);
        this.state= {step2:''}
    }

  render(){
      this.state.step2 = <div className="circleBase type1"></div>;
      if(this.props.status==="Step_3_Completed"){
       this.state.step2 = <div className="circleBase type2"></div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(StepStatus);
