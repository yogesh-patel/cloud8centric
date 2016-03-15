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
            subscriptionName: null,
            selectedProducts:{
                1:<AddProductRow key={1} onDeleteProduct={this.onDeleteProduct.bind(this,1)}/>
            }
        }
    }

    onAddProduct(){
        this.count++;
        this.state.selectedProducts[this.count] = <AddProductRow key={this.count}
                                                                 onDeleteProduct={this.onDeleteProduct.bind(this,this.count)}/>
        this.setState({selectedProducts:this.state.selectedProducts});
    }

    onDeleteProduct(count){
        delete this.state.selectedProducts[count];
        this.setState({selectedProducts:this.state.selectedProducts});
    }

    onSubscriptionNameChange(e) {
        this.setState({
            subscriptionName: e.target.value
        });
    }

    render() {
        var selectedProductComps = _.map(_.keys(this.state.selectedProducts),(productComp)=>{
            return this.state.selectedProducts[productComp];
        });

        var {disabled} = this.props;
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
                                            disabled={this.props.disabled}>
                                            <Glyphicon glyph="plus"/> Add More
                                    </Button>
                                </Row>
                                {selectedProductComps}
                                <Row>
                                    <Button bsStyle="primary" className="pull-right right-buffer" disabled={this.props.disabled}>Register</Button>
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
    disabled: state.subscription.disabled
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSubscriptions);
