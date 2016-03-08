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

class Products extends Component {
  render() {

    var products = this.props.productList.map(function(product, i) {
      return (
        <div key={product.id}>
          <section  className="bg-light-gray">
            <div className="container">

              <div className="row">
                <div className="col-md-4 col-sm-6 portfolio-item">
                  <a className="portfolio-link">
                    <img src={product.imagePath} className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                    <h4>{product.productTitle}</h4>
                    <p className="text-muted">{product.productInfo}</p>
                  </div>
                </div>

                <div  className="modal-content collapse in col-md-8 col-sm-6 col-xs-12">
                  <div className="container-fluid">
                    <div className="row" >
                      <div className="col-lg-8 col-lg-offset-2">
                        <div className="modal-body">
                          <div className="row text-center">

                            <ProductPlans plans={product.plans}/>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>
        </div>
      );
    }.bind(this));


    return (
      <Element className="products" name="products">
        <Grid fluid>
          <Row>
            <div className="text-center productContainer">
              <div className="content">

                <ReactCSSTransitionGroup transitionName="react-addition-animation"
                                         transitionEnterTimeout={500}
                                         transitionLeaveTimeout={300}>

                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <h2 className="section-heading">PRODUCTS</h2>
                      <h3 className="section-subheading text-muted">We offer various products and services to cater your needs.</h3>
                    </div>
                  </div>

                  {products}

                </ReactCSSTransitionGroup>

              </div>
            </div>
          </Row>
        </Grid>
      </Element>
    );
  }
}


const mapStateToProps = (state) => ({
  productList: state.product.products
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
