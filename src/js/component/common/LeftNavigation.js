'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col, Button, Navbar, NavItem, Nav, NavDropdown, MenuItems} from 'react-bootstrap';
import { connect } from 'react-redux';

class LeftNavigation extends Component{

    render(){
        let toggleClass = this.props.toggleClass;
        return(
            <div className="left-navigation">
                <Navbar inverse className={'navbar-twitch '+toggleClass} role="navigation">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span className="small-nav">
                              <span className="logo">

                              </span>
                            </span>
                            <span className="full-nav">  </span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <li className="active">
                            <a href="#">
                                <span className="small-nav" data-toggle="tooltip" data-placement="right" title="Home">
                                    <span className="glyphicon glyphicon-home"></span>
                                </span>
                                <span className="full-nav"> Home </span>
                            </a>
                        </li>
                        <li>
                        <a href="#about-us">
                            <span className="small-nav" data-toggle="tooltip" data-placement="right" title="About Us">
                                <span className="fa fa-users"></span>
                            </span>
                            <span className="full-nav"> About Us </span>
                        </a>
                        </li>
                        <li>
                        <a href="#contact-us">
                            <span className="small-nav" data-toggle="tooltip" data-placement="right" title="Contact Us">
                                <span className="glyphicon glyphicon-comment"></span>
                            </span>
                            <span className="full-nav"> Contact Us </span>
                        </a>
                        </li>
                    </Nav>
                </Navbar>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    toggleClass:state.header.toggleClass
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavigation);

