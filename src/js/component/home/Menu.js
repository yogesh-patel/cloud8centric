/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 26/02/16.
 */

'use strict';

import React, {
    Component,
    View} from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Events} from 'react-scroll';

class Menu extends Component {
    render() {
        let brandImg = (<img className='logo' src={this.props.logo} alt="" />);
        let inverseClass = this.props.inverseMenu ? 'inverse-menu' : 'menu';

        return (
            <Navbar inverse fixedTop fluid className={inverseClass}>
                <Navbar.Header>
                    <Navbar.Brand>
                        {brandImg}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <li role="presentation"><Link to="products" href="#" smooth duration={500}>Product</Link></li>
                        <NavItem eventKey={2} href="#" active>Contact</NavItem>
                        <NavItem eventKey={3} href="#">Login</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;