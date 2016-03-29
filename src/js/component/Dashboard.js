'use strict';

import React, {Component} from 'react';
import LeftNavigation from './common/LeftNavigation';
import CommonHeader from './common/CommonHeader';
import RouteBreadcrumb from './common/RouteBreadcrumb';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Products from './home/Products';
import { connect } from 'react-redux';

class Dashboard extends Component {

    render() {

        var {showProducts,showNavigation} = this.props;
        var leftMargin = 50;

        if (showNavigation) {
            leftMargin = 200;
        }

        return (

            <div>
                <CommonHeader />

                {/*<RouteBreadcrumb />*/}

                <LeftNavigation />

                <div>
                    {this.props.children}
                </div>
                <div className="container" style={{display:showProducts ? 'block' : 'none'}}>
                    <Products />
                </div>
            </div>

        );

    }

}
const mapStateToProps = (state) => ({
    showProducts: state.header.showProducts,
    showNavigation: state.header.showNavigation
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
