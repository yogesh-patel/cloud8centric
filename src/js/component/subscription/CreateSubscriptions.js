'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon,
    Panel, Input,OverlayTrigger,Popover} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
import AddProductRow from './AddProductRow';

class CreateSubscriptions extends Component {

    constructor(props){
        super(props);
        this.count = 1;
        this.state = {
            subscriptionName: '',
            isDuplicate: false,
            selectedProducts:{
                1:{}
            }
        }
    }

    onAddProduct(){
        this.count++;
        this.state.selectedProducts[this.count] = {};
        this.setState({selectedProducts:this.state.selectedProducts});
    }

    productDeleted(count){
        delete this.state.selectedProducts[count];
        this.setState({selectedProducts:this.state.selectedProducts});
    }

    onSubscriptionNameChange(e) {
        this.setState({subscriptionName: e.target.value,status:'success'});
    }

    productSelected(rowNumber, product){
        if(this.state.subscriptionName === ''){
            this.setState({status:'error'});
        }
        else {
            this.setState({status:'success'});
        }
        var productDescription = null;
        _.each(this.props.products, prod=>{
            if(prod.name == product){
                productDescription = prod.description;
            }
        });

        this.state.selectedProducts[rowNumber].product = product;
        this.state.selectedProducts[rowNumber].description = productDescription;
        this.setState({selectedProducts: this.state.selectedProducts});
    }

    planSelected(rowNumber, plan){
        this.state.selectedProducts[rowNumber].plan = plan;
        this.setState({selectedProducts: this.state.selectedProducts});
    }

    isDuplicateProduct(value){
        this.setState({isDuplicate: value});
    }

    createSubscriptions(){

    }

    render() {
        var rowCount = _.keys(this.state.selectedProducts).length;

        var selectedProductComps = _.map(_.keys(this.state.selectedProducts),(rowNumber)=>{
            return <AddProductRow key={rowNumber}
                           rowCount={rowCount}
                           rowNumber={rowNumber}
                           productSelected={this.productSelected.bind(this)}
                           planSelected={this.planSelected.bind(this)}
                           selectedProducts={this.state.selectedProducts}
                           isDuplicateProduct={this.isDuplicateProduct.bind(this)}
                           productDeleted={this.productDeleted.bind(this,rowNumber)}/>
        });

        var disabled = false;
        var registerDisabled = false;

        _.each(this.state.selectedProducts, (data)=>{
            if(!data.product || !data.plan || !this.state.subscriptionName || this.state.isDuplicate){
                disabled = true;
                registerDisabled = true;
            }

        });

        if(this.state.isDuplicate == false && (Object.keys(this.state.selectedProducts).length == this.props.products.length)){
            disabled = true;
        }

        return (
            <Grid>
                <Row>
                    <Col sm={12} md={12} lg={12} xsHidden>
                        <h3 className="section-title">
                            Subscriptions / Create New
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <form>
                            <Panel header={"Add New Subscription"}>
                                <Row>
                                    <Col xs={12} sm={12} md={6}>
                                        <Input  type="text" label="Subscription Name"
                                                placeholder="Subscription Name*"
                                                bsStyle={this.state.status}
                                                hasFeedback
                                                ref="input"
                                                groupClassName="group-class"
                                                labelClassName="label-class"
                                                onChange={this.onSubscriptionNameChange.bind(this)}/>
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel header="Add Products">
                                <Row>
                                    <Button bsStyle="success" className="pull-right right-buffer"
                                            onClick={this.onAddProduct.bind(this)}
                                            disabled={disabled}>
                                            <Glyphicon glyph="plus"/> Add More
                                    </Button>
                                </Row>
                                {selectedProductComps}
                                <Row>
                                    <Button bsStyle="primary" className="pull-right right-buffer"
                                            disabled={registerDisabled}
                                            onClick={this.createSubscriptions.bind(this)}>
                                            Register
                                    </Button>
                                </Row>
                            </Panel>
                        </form>
                    </Col>
                </Row>

            </Grid>
        );

    }

}


const mapStateToProps = (state) => ({
    products: state.subscription.productList,
    plans: state.subscription.paymentPlans,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSubscriptions);
