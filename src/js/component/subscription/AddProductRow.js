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
            errorMessage: null
        }
    }

    onProductSelected(e){
        var count = 0;
        var hasDuplicate = false;

        this.setState({product: e.target.value});
        this.props.productSelected(this.props.rowNumber, e.target.value);

        _.map(this.props.selectedProducts,prod=>{
            if(prod.product == e.target.value){
                count++;
                if(count > 1){
                    this.setState({errorMessage: 'This product is already selected, select some other product.'});
                    this.props.isDuplicateProduct(true);
                    hasDuplicate = true;
                }
            }
        });
        if(hasDuplicate == false){
            this.setState({errorMessage: null});
            this.props.isDuplicateProduct(false);
        }

    }

    onPlanSelected(e){
        this.setState({plan: e.target.value})
        this.props.planSelected(this.props.rowNumber, e.target.value);
    }

    onProductDeleted(){

        this.props.productDeleted(this.props.rowNumber);

        if(Object.keys(this.props.selectedProducts).length == 1){
            this.setState({errorMessage: null});
        }

    }

    render(){
        let productList = this.props.products;
        let paymentPlans = this.props.plans;

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

        return (
            <Row>
                <Col xs={12} sm={5} md={4}>
                    <Input  type="select" label="Select Product"
                            placeholder="Select Product"
                            value={this.state.product}
                            onChange={this.onProductSelected.bind(this)}>
                        <option value="select">Select Product</option>

                        {productsDropDownValues}

                    </Input>
                    <div className="duplicate-product">{this.state.errorMessage}</div>
                </Col>
                <Col xs={12} sm={5} md={4}>
                    <Input type="select" label="Select Payment Plan"
                           placeholder="Select Payment Plan"
                           value={this.state.plan}
                           onChange={this.onPlanSelected.bind(this)}
                           >
                        <option value="select">Select Payment Plan</option>

                        {plandDropDownValues}

                    </Input>
                </Col>
                <Col xs={12} sm={5} md={4}>
                    {this.props.rowCount == 1 ? <span> </span> : <Glyphicon glyph="minus subscription-minus-icon pointer" onClick={this.onProductDeleted.bind(this)}/>}

                    <span> </span>
                    <OverlayTrigger trigger={['hover', 'focus']} placement="right"
                                    overlay={<Popover title={this.props.selectedProducts[this.props.rowNumber].product ? this.props.selectedProducts[this.props.rowNumber].product : 'Select a product'} id="1">{this.props.selectedProducts[this.props.rowNumber].description ? this.props.selectedProducts[this.props.rowNumber].description : ''}</Popover>}>
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
