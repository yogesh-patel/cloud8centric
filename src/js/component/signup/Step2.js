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
         this.props.empActions.onBackClick("step1");
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
                                    <div className="login-tbox">
                                        <Input type="text"
                                            defaultValue={step_2_data.organizationName}
                                            addonBefore={<span className="fa fa-users"></span>}
                                               placeholder="Organization Name*" required onChange={this.onOrganizationNameChange.bind(this)}/>
                                   </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className="login-tbox">
                                        <Input type="url"
                                            defaultValue={step_2_data.organizationURL}
                                            addonBefore={<span className="fa fa-link --- URL"></span>}
                                               placeholder="url" onChange={this.onOrganizationURLChange.bind(this)}/>
                                   </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className="login-tbox">
                                        <Input type="text"
                                            defaultValue={step_2_data.addressLine1}
                                            addonBefore={<span className="fa fa-home"></span>}
                                               placeholder="Address Line1*" required onChange={this.onAddressLine1Change.bind(this)}/>
                                   </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className="login-tbox">
                                        <Input type="text"
                                            defaultValue={step_2_data.addressLine2}
                                            addonBefore={<span className="fa fa-home"></span>}
                                               placeholder="Address Line2"  onChange={this.onAddressLine2Change.bind(this)}/>
                                   </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <div className="login-tbox">
                                        <Input type="text"
                                            defaultValue={step_2_data.addressLine3}
                                               addonBefore={<span className="fa fa-home"></span>}
                                               users
                                               placeholder="Address Line3" onChange={this.onAddressLine3Change.bind(this)}/>
                                   </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} sm={6} md={6} >
                                    <button type= "submit" className="back-button pointer" onClick={this.onBack.bind(this)}>
                                        Back
                                    </button>
                                </Col>
                                <Col xs={6} sm={6} md={6} >
                                    <button type= "submit" className="next-button pointer">
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
    step_2_data:state.signUpData.signupInfo.organizationInfo
});

const mapDispatchToProps = (dispatch) => ({
    empActions: bindActionCreators(SaveStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
