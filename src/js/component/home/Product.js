import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button,Thumbnail} from 'react-bootstrap';
import ProductPlans from './ProductPlans';

class Product extends React.Component {

    render() {

        let {product} = this.props;

        return (

            <Grid>
                <Panel>
                    <Row>
                        <Col md={4} sm={12} xs={12} className="text-center">
                            <Thumbnail src={product.imagePath} style={{border:'none !important'}}>
                                <h4>{product.productTitle}</h4>
                                <p>{product.productInfo}</p>
                            </Thumbnail>
                        </Col>

                        <Col md={8} sm={12} xs={12}>
                            <ProductPlans plans={product.plans}/>
                        </Col>

                    </Row>
                </Panel>
            </Grid>

        );

    }

}

export default Product;
