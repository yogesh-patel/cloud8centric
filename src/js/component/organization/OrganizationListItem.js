/**
 * Created by synerzip on 12/02/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import OrganizationDetailItem from './OrganizationDetailItem'
import SubscriptionList from '../subscription/SubscriptionList'
import { push } from 'redux-router';
import * as appActionCreators from '../../actions/app';
import OrganizationDetail from './OrganizationDetails';

class OrganizationListItem extends React.Component{

    gotoOrganizationPage(e) {
        e.preventDefault();
        var {organizationActions,organization} = this.props;
        //alert(organization.organizationName);

        organizationActions.selectOrganization(organization);
        this.props.appActions.showOrganizationDetail();
        this.props.appActions.showOrganizationDetailItem();
        this.setState({selectedOption:'organizationDetail'});
    }

    render(){

        var {organization,selectedOrganization,highlightedProject,organizationDetailScreen} = this.props;

        var styleClass = "list-group-item";
        if(selectedOrganization && organization.id == selectedOrganization.id){
            styleClass = "list-group-item active";
        }

        var divStyle = {
            cursor: 'pointer'
        };
        var sideScreen = null;

        var selectedOrgan ="";
        var selectedSubscription ="";
        if(selectedOrganization) {
            if(organization.id == selectedOrganization.id) {
                selectedSubscription = <SubscriptionList organObject={selectedOrganization}/>
                selectedOrgan = <OrganizationDetailItem selectedOrganization={selectedOrganization}/>
            }
            else {
                selectedOrgan="";
                selectedSubscription="";
                sideScreen = null;
            }
        }

        return (
                <div style={{clear:'both'}}>
                    <div className="list-group">
                        <a className={styleClass}  onClick={this.gotoOrganizationPage.bind(this)}
                             style={divStyle}>
                            <h4 className="list-group-item-heading">{organization.organizationName}</h4>
                            <p className="list-group-item-text">{organization.organizationURL}</p>

                            <p className="list-group-item-text">{organization.addressLine1}</p>
                        </a>
                    </div>

                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    organizationDetailScreen:state.app.organizationDetailScreen,
    selectedOrganization:state.organization.selectedOrganization
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch),
    appActions: bindActionCreators(appActionCreators, dispatch),
    routeDispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationListItem);
/**
 * Created by sonalb on 3/18/2016.
 */
