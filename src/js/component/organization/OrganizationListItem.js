import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import { push } from 'redux-router';
import OrganizationDetail from './OrganizationDetails';
import OrganizationDetailItem from './OrganizationDetailItem';
import SubscriptionList from '../subscription/SubscriptionList';

class OrganizationListItem extends React.Component {

    showOrganizationDetailsTab(e) {

        e.preventDefault();
        var {organizationActions, organization} = this.props;

        organizationActions.selectOrganization(organization);
        organizationActions.showOrganizationDetails();

    }

    render() {

        var {selectedOrganization, organization} = this.props;
        var styleClass = '';

        if (selectedOrganization && (organization.id == selectedOrganization.id)) {
            styleClass = "active ";
        }

        return (
            <div className="list-group">
                <a className={styleClass+"list-group-item"} onClick={this.showOrganizationDetailsTab.bind(this)}>
                    <h4 className="list-group-item-heading pointer">{organization.organizationName}</h4>
                </a>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    selectedOrganization: state.organization.selectedOrganization
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch),
    routeDispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationListItem);
