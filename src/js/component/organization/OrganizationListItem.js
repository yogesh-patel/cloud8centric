import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import * as subscriptionActionCreators from '../../actions/subscription';
import {Grid, Row, Col, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import { push } from 'redux-router';
import OrganizationDetail from './OrganizationDetails';
import OrganizationDetailItem from './OrganizationDetailItem';
import SubscriptionList from '../subscription/SubscriptionList';

class OrganizationListItem extends React.Component {

    showOrganizationInfo(e) {

        e.preventDefault();
        let {organizationActions, subscriptionActions, organization, subscriptionDetailsTab} = this.props;

        organizationActions.selectOrganization(organization);

        if(subscriptionDetailsTab){
            subscriptionActions.fetchSubscriptions(organization.id);
            organizationActions.showSubscriptionDetail();
        }
        else{
            organizationActions.showOrganizationDetails();
        }

    }

    render() {

        let {selectedOrganization, organization} = this.props;
        let styleClass = '';

        if (selectedOrganization && (organization.id == selectedOrganization.id)) {
            styleClass = "active ";
        }

        return (

            <ListGroupItem className={styleClass} onClick={this.showOrganizationInfo.bind(this)}>
                {organization.organizationName}
            </ListGroupItem>

        );

    }

}

const mapStateToProps = (state) => ({
    selectedOrganization: state.organization.selectedOrganization,
    subscriptionDetailsTab: state.organization.subscriptionDetailsTab
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch),
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch),
    routeDispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationListItem);
