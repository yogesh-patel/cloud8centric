/**
 * Created by sonalb on 3/17/2016.
 */
import React, {Component, View} from 'react';
import {Grid, Row, Col, Jumbotron, Glyphicon, Input, Button} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Element} from 'react-scroll';
import { pushState } from 'redux-router';

class InnerLinkPage extends Component{
    render(){
        var {breadValue} = this.props;
        return (
        <div>
            <aside>
                <ul>
                    <li><Link to={breadValue.name}>{breadValue.name}</Link></li>
                </ul>
            </aside></div>
    );
    }}

export default InnerLinkPage