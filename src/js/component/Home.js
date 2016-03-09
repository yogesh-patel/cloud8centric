'use strict';

import React, {Component} from 'react';
import {RouteHandler} from 'react-router';
import {Grid, Row, Col,Button} from 'react-bootstrap';
import Menu from './home/Menu';
import SplashScreen from './home/SplashScreen';
import Products from './home/Products';
import HomeFooter from './home/HomeFooter';
import ContactUs from './home/ContactUs';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            inverseMenu: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if(!this.state.inverseMenu &&
            document.body.scrollTop > 50) {
            this.setState({inverseMenu: true});
        } else if(this.state.inverseMenu &&
            document.body.scrollTop <= 50) {
            this.setState({inverseMenu: false});
        }
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Menu logo='img/logo.png' inverseMenu={this.state.inverseMenu}/>
                    {this.props.children}

                    <SplashScreen />

                    <Row>
                        <Col xs={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col xs={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col xs={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col xs={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col xs={12}>&nbsp;</Col>
                    </Row>
                    <Products />
                    <Row>
                        <Col xs={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col xs={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col xs={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col xs={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col xs={12}>&nbsp;</Col>
                    </Row>

                    <ContactUs />

                    <HomeFooter />
                </Row>
            </Grid>
        );
    }
}
