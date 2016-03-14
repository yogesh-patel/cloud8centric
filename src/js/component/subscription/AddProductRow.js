/**
 * Created by synerzip on 12/03/16.
 */
'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon,
    Panel, Input,OverlayTrigger,Popover} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';

class AddProductRow extends React.Component{
    render(){
        let productList = this.props.products;
        let paymentPlans = this.props.plans;

        let productsDropDownValues = _.map(productList, (product) => {
            return (
                <option key={product.productID} value={product.productID}>{product.name}</option>
            );
        });

        let plandDropDownValues = _.map(paymentPlans, (plan) => {
            return (
                <option key={plan.planID} value={plan.planID}>{plan.name}</option>
            );
        });
        return (
            <Row>
                <Col xs={12} sm={5} md={4}>
                    <Input type="select" label="Select Product" placeholder="Select Product">
                        <option value="select">Select Product</option>

                        {productsDropDownValues}

                    </Input>
                </Col>
                <Col xs={12} sm={5} md={4}>
                    <Input type="select" label="Select Payment Plan"
                           placeholder="Select Payment Plan">
                        <option value="select">Select Payment Plan</option>

                        {plandDropDownValues}

                    </Input>
                </Col>
                <Col xs={12} sm={5} md={4}>
                    <Glyphicon glyph="minus subscription-minus-icon pointer" onClick={()=>this.props.onDeleteProduct()}/>
                    <span> </span>
                    <OverlayTrigger trigger="hover" placement="right"
                                    overlay={<Popover title="Popover bottom" id="1"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
                        <Glyphicon glyph="question-sign subscription-question-icon pointer"/>
                    </OverlayTrigger>

                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.subscription.productList,
    plans: state.subscription.paymentPlans
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductRow);