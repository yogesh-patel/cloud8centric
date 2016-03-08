'use strict';

import React, {Component} from 'react';

class ProductPlans extends Component {
  render() {

    var products = this.props.plans.map(function(plan, i) {
      return (
              <div className="col-md-4" key={plan.planId}>

                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className={plan.planIconClass}></i>
                </span>
                <h4 className="service-heading">{plan.planTitle}</h4>
                <p className="text-muted">{plan.planInfo}</p>
                <button type="button" className="btn btn-primary"><i className="fa fa-shopping-cart"></i> Buy</button>
              </div>
        );
      }.bind(this));

    return(
      <div>
        {products}
      </div>
    );

  }
}

export default ProductPlans;





