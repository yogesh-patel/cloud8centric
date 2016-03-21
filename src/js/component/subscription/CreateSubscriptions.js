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
        this.state = {
            subscriptionName: null

        }
    }

    onAddProduct(){
        this.props.subscriptionAction.addNewSubscription();
    }

    onSubscriptionNameChange(e) {
       this.setState({subscriptionName:e.target.value});
    }

    createSubscriptions(){
        this.props.subscriptionAction.createNewSubscription();
    }


    render() {

        var {selectedProducts, productList} = this.props;



        var selectedProductComps = _.map(_.keys(selectedProducts),(rowNumber)=>{
            return <AddProductRow   key={rowNumber}
                                    rowNumber={rowNumber}/>
        });

        var addBtnDisabled = false, registerBtnDisabled=false;
         _.each(selectedProducts, (data)=>{
            if(!data.product || !data.plan || data.plan == 'select' || data.product == 'select' || !this.state.subscriptionName || data.disabled){
                addBtnDisabled = true;
                registerBtnDisabled = true;
            }

        });

        if(Object.keys(selectedProducts).length == productList.length){
            addBtnDisabled = true;
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
                                                onChange={this.onSubscriptionNameChange.bind(this)}/>
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
            </Grid>
        );

    }

}


const mapStateToProps = (state) => ({
    selectedProducts: state.subscription.selectedProducts,
    productList: state.subscription.productList
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionAction:bindActionCreators(subscriptionActionCreators,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSubscriptions);
