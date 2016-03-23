'use strict';

import React, {Component,View} from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Glyphicon, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActionCreators from '../../actions/header';
import * as authActionCreator from '../../actions/auth';
import * as appActionCreator from '../../actions/app';
import {Link, Events,scroller} from 'react-scroll';

class CommonHeader extends Component {


    toggleLeftNavigation() {

        if (this.props.showNavigation) {
            this.props.headerActions.showNavigationMenu(false);
        }
        else {
            this.props.headerActions.showNavigationMenu(true);
        }

    }

    onLogout() {


        this.props.authActions.logout()


    }

    onProductSelected(e) {

        e.preventDefault();
        var {showProducts} = this.props;
        if (this.props.showProducts) {
            this.props.headerActions.showProducts(false);
        }
        else {
            this.props.headerActions.showProducts(true);
            var interval = setInterval(()=> {
                clearInterval(interval);
                scroller.scrollTo("products", true, 500, -50);
            }, 0);
        }

    }


    render() {
        var {showProducts} = this.props;
        var productLinkText = null;

        if (showProducts)
            productLinkText = "Hide Products";
        else
            productLinkText = "Products";

        var productLink = <span onClick={this.onProductSelected.bind(this)}>{productLinkText}</span>;
        var {userObject} = this.props;

        return (

            <div className="common-header">
                <Navbar inverse fixedTop fluid className={'home-menu inverse-menu'}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Glyphicon glyph="align-justify pointer" onClick={this.toggleLeftNavigation.bind(this)}/>
                            <img className='logo common-header-logo' src='img/logo.png' alt=""/>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1}>
                                {productLink}
                            </NavItem>
                            <NavDropdown eventKey={2} title={"Welcome "+localStorage.getItem("firstName")}
                                         id="basic-nav-dropdown">
                                <MenuItem eventKey={2.1}>Profile</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={2.2} onClick={this.onLogout.bind(this)}>Logout</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    showNavigation: state.header.showNavigation,
    userObject: state.auth.userObject,
    showProducts: state.header.showProducts
});

const mapDispatchToProps = (dispatch) => ({
    headerActions: bindActionCreators(headerActionCreators, dispatch),
    authActions: bindActionCreators(authActionCreator, dispatch),
    appActions: bindActionCreators(appActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CommonHeader);
