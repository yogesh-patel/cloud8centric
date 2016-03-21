'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import {Element} from 'react-scroll';
import { connect } from 'react-redux';
import ProductPlans from './ProductPlans';
import _ from 'lodash';
import Product from './Product';
import { bindActionCreators } from 'redux';
import * as authActionCreators from '../../actions/auth';


class Products extends Component {

    render() {

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
    productList: state.product.products,
});


const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
