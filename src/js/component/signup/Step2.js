'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Panel,Input} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Element} from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SaveStatus from '../../actions/signUp';

class Step2 extends Component {

    constructor(props){
        super(props);
        this.state= {
          organizationName:'',
          organizationURL:'',
          addressLine1:'',
          addressLine2:'',
          addressLine3:'',
          }
    }

    onNext(e){ 
       e.preventDefault();
       this.props.empActions.saveStatus({
                step1: "Step1",
                step2: "Step2",
                step3: ''}
            );
        this.props.empActions.saveCircleStatus({
                 step1: "Step_1_Completed",
                 step2: "Step_2_Completed",
                 step3: ""}
             );
         this.props.empActions.step_2_Data(
             {
                 organizationName:this.state.organizationName,
                 organizationURL:this.state.organizationURL,
                 addressLine1:this.state.addressLine1,
                 addressLine2:this.state.addressLine2,
                 addressLine3:this.state.addressLine3,
             }
         );
      }

      onBack(e){ 
         e.preventDefault();
         this.props.empActions.saveStatus({
                  step1: "OnBackStep1",
                  step2: "",
                  step3: ""}
              );
        }

    onOrganizationNameChange(e) {
       this.setState({organizationName: e.target.value});
     }

     onOrganizationURLChange(e) {
       this.setState({organizationURL: e.target.value});
     }

     onAddressLine1Change(e) {
       this.setState({addressLine1: e.target.value});
     }

     onAddressLine2Change(e) {
       this.setState({addressLine2: e.target.value});
     }

     onAddressLine3Change(e) {
       this.setState({addressLine3: e.target.value});
     }


    render() {
        var {step_2_data} = this.props;
        return (
            <form name="signup" onSubmit={this.onNext.bind(this)}>
                <Row className="text-center">
                    <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="signUp-box">

                        <div className="login-label text-center">Organization Details</div>
                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                        defaultValue={this.state.organizationName}
                                        addonBefore={<Glyphicon glyph="asterisk" />}
                                           placeholder="Name" required onChange={this.onOrganizationNameChange.bind(this)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input type="url"
                                        defaultValue={this.state.organizationURL}
                                        addonBefore={<Glyphicon glyph="asterisk" />}
                                           placeholder="url" required onChange={this.onOrganizationURLChange.bind(this)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                        defaultValue={this.state.addressLine1}
                                        addonBefore={<Glyphicon glyph="asterisk" />}
                                           placeholder="Address Line1" required onChange={this.onAddressLine1Change.bind(this)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                        defaultValue={this.state.addressLine2}
                                        addonBefore={<Glyphicon glyph="asterisk" />}
                                           placeholder="Address Line2" required onChange={this.onAddressLine2Change.bind(this)}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <Input type="text"
                                        defaultValue={this.state.addressLine3}
                                           addonBefore={<Glyphicon glyph="asterisk" />}
                                           placeholder="Address Line3" onChange={this.onAddressLine3Change.bind(this)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} sm={6} md={6} >
                                    <button className="Back-button pointer" onClick={this.onBack.bind(this)}>
                                        Back
                                    </button>
                                </Col>
                                <Col xs={6} sm={6} md={6} >
                                    <button className="Next-button pointer">
                                        Next
                                    </button>
                                </Col>
                            </Row>
                    </Col>
                </Row>
            </form>
        )
    }

}

const mapStateToProps = (state) => ({
    // status:state.signUpData.status
    step_2_data:state.signUpData.signupInfo.organizationInfo,
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(SaveStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
