/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 27/02/16.
 */

'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Element} from 'react-scroll';
import { connect } from 'react-redux';
import ProductPlans from './ProductPlans';
import _ from 'lodash';
import Product from './Product';
import Login from '../Login';
import { bindActionCreators } from 'redux';
import * as authActionCreators from '../../actions/auth';


class Products extends Component {

    authenticateUser(username, password) {
        this.props.authActions.authenticateUser(username, password);
    }

    render() {

        let {statusText, isAuthenticated} = this.props.auth;
        //let {authe} = this.props.auth;

        if(!isAuthenticated) {
            return (
                <Login authenticateUser={this.authenticateUser.bind(this)}/>
            );
        }

        var {productList} = this.props;
        var products = _.map(productList,(product)=>{
            return <Product key={product.id} product={product} />
        });


        return (
            <Element className="products" name="products">
                <Grid>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h2 className="section-heading">PRODUCTS</h2>

                                <h3 className="section-subheading text-muted">
                                    We offer various products and services to cater your needs.
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                {products}
            </Element>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    productList: state.product.products,
});

//const mapDispatchToProps = (dispatch) => ({});

const mapDispatchToProps = (dispatch) => ({
    authActions: bindActionCreators(authActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
