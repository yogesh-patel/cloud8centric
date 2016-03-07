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

export default class SplashScreen extends Component {
    render() {
        return (
            <div className="splashScreen">
                <Grid fluid>
                    <Row>
                        <Jumbotron className="text-center">
                            <div className="content">
                                <ReactCSSTransitionGroup transitionName="react-animation"
                                                         transitionAppear
                                                         transitionAppearTimeout={500}
                                                         transitionEnter={false}
                                                         transitionLeave={false}
                                >
                                    <h1>Welcome To Centric SAAS!</h1>
                                    <p className="smallText">It's simply the best plm software for retail, fashion, footwear and consumer goods makers, too.</p>
                                    <p><Button bsStyle="primary">Learn more</Button></p>
                                </ReactCSSTransitionGroup>
                            </div>
                        </Jumbotron>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const styles = {

};