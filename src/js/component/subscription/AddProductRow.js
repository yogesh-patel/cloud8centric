/**
 * Created by synerzip on 12/03/16.
 */
'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Panel, Input, OverlayTrigger, Popover} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';

class AddProductRow extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            product: null,
            plan: null
        }
    }

    onProductSelected(e){
        this.state.product = e.target.value;
        this.setState({product: e.target.value});
        this.props.subscriptionAction.productSelected(this.props.rowNumber, e.target.value);

    }

    onPlanSelected(e){
        this.setState({plan: e.target.value});
        this.props.subscriptionAction.planSelected(this.props.rowNumber, e.target.value);

    }

    onProductDeleted(){
        this.props.subscriptionAction.productDeleted(this.props.rowNumber);
    }


    render(){

        var {productList, paymentPlans, selectedProducts,rowNumber} = this.props;
        let rowCount = _.keys(selectedProducts).length;
        let errorMessage = "";

        let productsDropDownValues = _.map(productList, (product) => {
            return (
                <option key={product.productID} value={product.name}>{product.name}</option>
            );
        });

        let plandDropDownValues = _.map(paymentPlans, (plan) => {
            return (
                <option key={plan.planID} value={plan.name}>{plan.name}</option>
            );
        });

        if(selectedProducts[rowNumber].error){
            errorMessage = "This product is already selected";
        }


        return (
            <Row>
                <Col xs={12} sm={5} md={4} className="subscription-product-inputs">
                    <Input  type="select" label="Select Product"
                            placeholder="Select Product"
                            value={this.state.product}
                            className="subscription-product-inputs"
                            disabled={selectedProducts[rowNumber].disabled}
                            onChange={this.onProductSelected.bind(this)}>
                        <option value="select">Select Product</option>

                        {productsDropDownValues}

                    </Input>
                    <div className="duplicate-product">{errorMessage}</div>
                </Col>
                <Col xs={12} sm={5} md={4}>
                    <Input  type="select" label="Select Product Tire"
                            placeholder="Select Product Tire"
                            value={this.state.plan}
                            className="subscription-product-inputs"
                            disabled={selectedProducts[rowNumber].disabled}
                            onChange={this.onPlanSelected.bind(this)}>
                        <option value="select">Select Product Tire</option>

                        {plandDropDownValues}

                    </Input>
                </Col>
                <Col xs={12} sm={5} md={4}>
                    {rowCount == 1 ? <span> </span> :   <Button   bsStyle="danger"
                                                                bsSize="xsmall"
                                                                className="subscription-minus-icon"
                                                                disabled={selectedProducts[rowNumber].disabled}
                                                                onClick={this.onProductDeleted.bind(this)}
                                                                title="Delete a product">
                                                            <Glyphicon glyph="minus" />
                                                        </Button>}


                    <span> </span>
                    <OverlayTrigger trigger={['hover', 'focus']}
                                    placement="right"
                                    overlay={<Popover title="title" id="1">desc</Popover>}>
                        <Glyphicon glyph="question-sign subscription-question-icon pointer"/>
                    </OverlayTrigger>

                </Col>
            </Row>
        )

    }

}

const mapStateToProps = (state) => ({
    productList: state.subscription.productList,
    paymentPlans: state.subscription.paymentPlans,
    selectedProducts: state.subscription.selectedProducts
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionAction:bindActionCreators(subscriptionActionCreators,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductRow);
