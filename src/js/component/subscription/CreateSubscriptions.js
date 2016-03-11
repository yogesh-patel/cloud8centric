'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Panel, Input} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';

class CreateSubscriptions extends Component{

  render(){

    let productList = this.props.products;
    let paymentPlans = this.props.plans;

    let productsDropDownValues = _.map(productList, (product) =>{
        return (
            <option value={product.productID}>{product.name}</option>
        );
    });

    let plandDropDownValues = _.map(paymentPlans, (plan) =>{
        return (
            <option value={plan.planID}>{plan.name}</option>
        );
    });

    return(
        <Row>
            <Col xs={12}>
                <form>
                    <Panel header="Add New Subscription" bsStyle="info">
                        <Row>
                            <Col xs={12} sm={12} md={6}>
                                <Input type="text" label="Subscription Name:" placeholder="Subscription Name*"/>
                            </Col>
                        </Row>
                    </Panel>
                    <Panel header="Add Products" bsStyle="info">
                        <Row>
                            <Button bsStyle="success" className="pull-right right-buffer"><Glyphicon glyph="plus"/>  Add More</Button>
                        </Row>
                        <Row>
                            <Col xs={12} sm={5} md={4}>
                                <Input type="select" label="Select Product" placeholder="Select Product">
                                    <option value="select">Select Product</option>

                                    {productsDropDownValues}

                                </Input>
                            </Col>
                            <Col xs={12} sm={5} md={4}>
                                <Input type="select" label="Select Payment Plan" placeholder="Select Payment Plan">
                                    <option value="select">Select Payment Plan</option>

                                    {plandDropDownValues}

                                </Input>
                            </Col>
                            <Col xs={12} sm={5} md={4}>
                                <Glyphicon glyph="minus subscription-minus-icon pointer"/>
                                <Glyphicon glyph="question-sign subscription-question-icon pointer"/>
                            </Col>
                        </Row>
                        <Row>
                            <Button bsStyle="primary" className="pull-right right-buffer">Register</Button>
                        </Row>
                    </Panel>
                </form>
            </Col>
        </Row>
    );

  }

}


const mapStateToProps = (state) => ({
    products:state.subscription.productList,
    plans:state.subscription.paymentPlans
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSubscriptions);
