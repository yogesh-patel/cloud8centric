'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button} from 'react-bootstrap';
import _ from 'lodash';

class ProductPlans extends Component {

    render() {

        let {plans} = this.props;
        let products = _.map(plans, (plan)=>{

        return (

                <div className="col-md-4" key={plan.planId}>

                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-yellow"></i>
                        <i className={plan.planIconClass}></i>
                    </span>
                    <h4 className="service-heading">{plan.planTitle}</h4>
                    <p className="text-muted">{plan.planInfo}</p>

                    <Button bsStyle={plan.planButtonClass}>
                        <i className={plan.planButtonClass == 'primary' ?'fa fa-shopping-cart': ''}></i>
                        {plan.planButtonText}
                    </Button>

              </div>

        )});

        return(
            <Row className="text-center">
                {products}
            </Row>
        );

    }

}

export default ProductPlans;





