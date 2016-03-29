import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Grid, Row, Col, Button, Table, FormControls} from 'react-bootstrap';

class OrganizationDetailItem extends React.Component {

    render() {

        var {selectedOrganization, organizationDetails} = this.props;

        return (

            <form className="form-horizontal admin-right-panel">
                <FormControls.Static label="Name: " labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={selectedOrganization.organizationName} />
                <FormControls.Static label="URL: " labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={selectedOrganization.organizationURL} />
                <FormControls.Static label="Address Line1: " labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={organizationDetails.addressLine1} />
                <FormControls.Static label="Address Line2: " labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={organizationDetails.addressLine2} />
                <FormControls.Static label="Address Line3: " labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={organizationDetails.addressLine3} />
                <FormControls.Static label="Phone Number: " labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={organizationDetails.phoneNumber} />
                <FormControls.Static label="City: " labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={organizationDetails.city} />
                <FormControls.Static label="Province: " labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={organizationDetails.province} />
                <FormControls.Static label="Zip Code: " labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={organizationDetails.zipCode} />
                <FormControls.Static label="Country: " labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={organizationDetails.country} />
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
