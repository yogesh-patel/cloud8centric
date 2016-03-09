/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 27/02/16.
 */

'use strict';

import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link, Events} from 'react-scroll';

class SplashScreen extends Component {
    render() {
        return (
            <Element className="splashScreen" name="splashScreen">
                <Grid fluid>
                    <Row>
                        <Jumbotron className="text-center">
                            <div className="content">
                                <ReactCSSTransitionGroup transitionName="react-animation"
                                                         transitionAppear
                                                         transitionAppearTimeout={500}
                                                         transitionEnter={false}
                                                         transitionLeave={false}>
                                    <h1>Welcome To Centric SAAS!</h1>

                                    <p className="smallText">Its simply the best plm software for retail, fashion,
                                        footwear and consumer goods makers, too.</p>

                                    <p>
                                        <Link to="products" className="btn-xl pointer" smooth duration={500}>Show Me
                                            Products</Link>
                                    </p>
                                </ReactCSSTransitionGroup>
                            </div>
                        </Jumbotron>
                    </Row>
                </Grid>
            </Element>
        );
    }
}

export default SplashScreen;
