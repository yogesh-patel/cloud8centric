'use strict';

import React, {Component,View} from 'react';
import {Grid, Row, Col,Button,Input,ButtonInput,Panel} from 'react-bootstrap';

class Footer extends Component{
  render(){
    return(
      <div className="footer navbar-fixed-bottom inverse-menu">

          <div className="pull-left left-buffer">
            Copyright © Centric Software 2016
          </div>

        </div>
    );
  }
}
export default Footer;
