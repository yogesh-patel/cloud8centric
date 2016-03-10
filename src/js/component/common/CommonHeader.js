'use strict';

import React, {Component,View} from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Glyphicon, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActionCreators from '../../actions/header';

class CommonHeader extends Component{

    toggleLeftNavigation(){
        if(this.props.toggleClass == ''){
            this.props.headerActions.showNavigationMenu();
        }
        else if(this.props.toggleClass == 'open'){
            this.props.headerActions.hideNavigationMenu();
        }
    }

    render(){
        return(
            <div className="common-header">
                <Navbar inverse fixedTop fluid className={'home-menu inverse-menu'}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Button onClick={this.toggleLeftNavigation.bind(this)}><Glyphicon glyph="align-justify" /></Button>
                            <img className='logo common-header-logo' src='img/logo.png' alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    toggleClass:state.header.toggleClass
});

const mapDispatchToProps = (dispatch) => ({
    headerActions: bindActionCreators(headerActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CommonHeader);
