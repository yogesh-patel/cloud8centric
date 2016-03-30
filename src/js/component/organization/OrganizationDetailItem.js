import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Grid, Row, Col, Button, Table, FormControls} from 'react-bootstrap';

class OrganizationDetailItem extends React.Component {

    render() {

        var {selectedOrganization, organizationDetails} = this.props;
        let selectedOrganization1 = null;
        if(_.size(selectedOrganization) > 0){

             selectedOrganization1 = <Row>
                                         <Col md = {6}>
                                             <FormControls.Static label="Name : " labelClassName="col-xs-4" wrapperClassName="col-xs-8" value={selectedOrganization.organizationName} />
                                             <FormControls.Static label="URL : " labelClassName="col-xs-4" wrapperClassName="col-xs-8" value={selectedOrganization.organizationURL} />
                                             <FormControls.Static label="Address Line1 : " labelClassName="col-xs-4" wrapperClassName="col-xs-8" value={organizationDetails.addressLine1} />
                                             <FormControls.Static label="Address Line2 : " labelClassName="col-xs-4" wrapperClassName="col-xs-8" value={organizationDetails.addressLine2} />
                                             <FormControls.Static label="Address Line3 : " labelClassName="col-xs-4" wrapperClassName="col-xs-8" value={organizationDetails.addressLine3} />
                                             <FormControls.Static label="Phone Number : " labelClassName="col-xs-4" wrapperClassName="col-xs-8" value={organizationDetails.phoneNumber} />
                                         </Col>

                                         <Col md = {6}>
                                             <FormControls.Static label="City : " labelClassName="col-xs-4" wrapperClassName="col-xs-8" value={organizationDetails.city} />
                                             <FormControls.Static label="Province : " labelClassName="col-xs-4" wrapperClassName="col-xs-8" value={organizationDetails.province} />
                                             <FormControls.Static label="Zip Code : " labelClassName="col-xs-4" wrapperClassName="col-xs-8" value={organizationDetails.zipCode} />
                                             <FormControls.Static label="Country : " labelClassName="col-xs-4" wrapperClassName="col-xs-8" value={organizationDetails.country} />
                                         </Col>
                                     </Row>


        }
        else if(selectedOrganization === null){
            selectedOrganization1  = <div className="subscriptions-table no-record-found-block">No Organization found</div>
        }
        return (

            <form className="form-horizontal admin-right-panel">

                {selectedOrganization1}

            </form>

        )
    }
}

const mapStateToProps = (state) => ({
    selectedOrganization: state.organization.selectedOrganization,
    organizationDetails: state.organization.organizationDetails
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetailItem);
