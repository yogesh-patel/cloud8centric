'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col, Button, Table, Glyphicon, Panel, Input, OverlayTrigger, Popover, Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as subscriptionActionCreators from '../../actions/subscription';
import _ from 'lodash';
import AddProductRow from './AddProductRow';

class CreateSubscriptions extends Component {

    constructor(props){

        super(props);
        this.state = {
            subscriptionName: '',
            bsStyle : null,
            showModal: false
        }

    }

    onAddProduct(){

        this.props.subscriptionAction.addNewSubscription();

    }

    onSubscriptionNameChange(e) {

       this.setState({subscriptionName:e.target.value,bsStyle:'success'});

    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        this.setState({ showModal: true });
    }

    createSubscriptions(){

        let organizationId = localStorage.getItem("active_organization");
        let arrSubscriptionProducts = [];

        _.each(this.props.selectedProducts, (subscriptionProduct)=>{
            arrSubscriptionProducts.push(subscriptionProduct)
        });

        let subscriptions = {
            name: this.state.subscriptionName,
            subscriptionProducts:arrSubscriptionProducts
        }

        this.props.subscriptionAction.createNewSubscription(organizationId, subscriptions);

    }


    render() {

        var {selectedProducts, productList} = this.props;
        var selectedProductComps = _.map(_.keys(selectedProducts),(rowNumber)=>{
            return <AddProductRow   key={rowNumber}
                                    rowNumber={rowNumber}/>
        });

        _.each(selectedProducts, (data)=>{
           if(data.productName && data.planName && data.planName != 'select' && data.productName != 'select' && !this.state.subscriptionName){
               this.state.bsStyle = 'error';
           }

        });

        var addBtnDisabled = false, registerBtnDisabled=false;
        _.each(selectedProducts, (data)=>{
            if(!data.productName || !data.planName || data.planName == 'select' || data.productName == 'select' || !this.state.subscriptionName || data.disabled){
                addBtnDisabled = true;
                registerBtnDisabled = true;
            }

        });

        if(Object.keys(selectedProducts).length == productList.length){
            addBtnDisabled = true;
        }

        let userRoles = localStorage.getItem("roles");
        let createSubscriptionContentClass = null;

        let roleName = _.map(JSON.parse(userRoles), (role) => {
           return role.name;
        });

        if (roleName[0] === "Admin") {
            createSubscriptionContentClass = "admin-add-subscription-content";
        }
        else{
            createSubscriptionContentClass = "main-container"
        }

        return (
            <div className={createSubscriptionContentClass}>
                <Row>
                    <Col sm={12} md={12} lg={12} xsHidden>
                        <h3 className="section-title">
                            Subscriptions / Create
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <form>
                            <Panel header={"Add Subscription"}>
                                <Row>
                                    <Col xs={12} sm={12} md={6}>
                                        <Input
                                                type="text"
                                                value={this.state.subscriptionName}
                                                label="Subscription Name"
                                                placeholder="Subscription Name*"
                                                bsStyle={this.state.bsStyle}
                                                hasFeedback
                                                ref="input"
                                                groupClassName="group-class"
                                                labelClassName="label-class"
                                                onChange={this.onSubscriptionNameChange.bind(this)} />
                                    </Col>
                                    {selectedProductComps}
                                </Row>
                                <Row>
                                    <Button bsStyle="primary" className="pull-right right-buffer"
                                            onClick={this.openModal.bind(this)}
                                            disabled={registerBtnDisabled}>
                                            Provision
                                    </Button>
                                </Row>
                            </Panel>
                        </form>
                    </Col>
                </Row>

                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Provisioning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>The product provisioning will take between 15-30 minutes. Can you please confirm if you want to provision the selected products?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal.bind(this)}>Close</Button>
                        <Button bsStyle="primary" onClick={this.createSubscriptions.bind(this)}>Yes</Button>
                    </Modal.Footer>
                </Modal>


            {/*
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
                                        <Input
                                                type="text"
                                                value={this.state.subscriptionName}
                                                label="Subscription Name"
                                                placeholder="Subscription Name*"
                                                bsStyle={this.state.bsStyle}
                                                hasFeedback
                                                ref="input"
                                                groupClassName="group-class"
                                                labelClassName="label-class"
                                                onChange={this.onSubscriptionNameChange.bind(this)} />
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel header="Add Products">
                                <Row>
                                    <Button bsStyle="success" className="pull-right right-buffer"
                                            onClick={this.onAddProduct.bind(this)}
                                            disabled={addBtnDisabled}>
                                            <Glyphicon glyph="plus"/> Add More
                                    </Button>
                                </Row>
                                {selectedProductComps}
                                <Row>
                                    <Button bsStyle="primary" className="pull-right right-buffer"
                                            onClick={this.createSubscriptions.bind(this)}
                                            disabled={registerBtnDisabled}>
                                            Register
                                    </Button>
                                </Row>
                            </Panel>
                        </form>
                    </Col>
                </Row>
                */}
            </div>
        );

    }

}


const mapStateToProps = (state) => ({
    selectedProducts: state.subscription.selectedProducts,
    productList: state.subscription.productList,
    orgObject: state.auth.orgObject
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionAction:bindActionCreators(subscriptionActionCreators,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSubscriptions);
