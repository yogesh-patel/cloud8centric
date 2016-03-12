'use strict';

import React, {Component} from 'react';
import LeftNavigation from './common/LeftNavigation';
import CommonHeader from './common/CommonHeader';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Products from './home/Products';
import { connect } from 'react-redux';

class Dashboard extends Component {

    render() {
        var {showProducts} = this.props;
        return (
            <div className="container">
                <CommonHeader />
                <LeftNavigation />

                <div className="container" style={{marginTop:60}}>
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
    showProducts: state.dashboard.showProducts
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
