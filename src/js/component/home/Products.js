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

export default class Products extends Component {
    render() {
        var items = ['item1', 'item2', 'item3', 'item4'].map(function(item, i) {
            return (
                <div key={item} style={{margin: 20}}>
                    {item}
                </div>
            );
        }.bind(this));

        return (
            <Element className="products" name="products">
                <Grid fluid>
                    <Row>
                        <div className="text-center productContainer">
                            <div className="content">
                                <ReactCSSTransitionGroup transitionName="react-animation"
                                                         transitionAppear
                                                         transitionAppearTimeout={500}
                                                         transitionEnter={false}
                                                         transitionLeave={false}
                                >
                                    <h1>PRODUCTS</h1>
                                    <p className="smallText">We offer various products and services to cater your needs.</p>
                                </ReactCSSTransitionGroup>

                                <ReactCSSTransitionGroup transitionName="react-addition-animation"
                                                         transitionEnterTimeout={500}
                                                         transitionLeaveTimeout={300}>
                                    {items}
                                </ReactCSSTransitionGroup>

                            </div>
                        </div>
                    </Row>
                </Grid>
            </Element>
        );
    }
}

const styles = {

};