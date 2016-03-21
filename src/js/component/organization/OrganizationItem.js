/**
 * Created by synerzip on 12/02/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import OrganizationForm from './OrganizationForm'
import SubscriptionList from '../subscription/SubscriptionList'
import { push } from 'redux-router';
import * as appActionCreators from '../../actions/app';
import Login from '../Login';
import OrganizationDetail from './OrganizationDetails';

class OrganizationItem extends React.Component{


    //onOrganizationSelected(){
    //    var {organizationActions,organization} = this.props;
    //    //alert(organization.organizationName);
    //
    //    organizationActions.selectOrganization(organization);
    //    //this.props.routeDispatch(push("dashboard/organizations/edit"));
    //    //this.props.routeDispatch(push("dashboard/subscriptions/create"));
    //}

    gotoOrganizationPage(e) {
        e.preventDefault();
        var {organizationActions,organization} = this.props;
        //alert(organization.organizationName);

        organizationActions.selectOrganization(organization);
        this.props.appActions.showOrganizationDetail();
        this.props.appActions.showOrganizationForm();
        this.setState({selectedOption:'organizationDetail'});
       // this.props.routeDispatch(push("dashboard/organizations/edit"));
    }

    //getOrganizationsList(){
    //
    //    this.props.dashboardActions.showOrganization();
    //    this.props.headerActions.hideProducts();
    //    this.setState({selectedOption:'organization'});
    //
    //}

    /*gotoSidePage(e) {
        e.preventDefault();
        this.props.appActions.showOrganization();
        this.setState({selectedOption: 'organization'});
    }*/

    render(){

        var {organization,selectedOrganization,highlightedProject,organizationDetailScreen} = this.props;

        var styleClass = "list-group-item";
        if(selectedOrganization && organization.id == selectedOrganization.id){
           // alert(selectedOrganization.organizationName);
            styleClass = "list-group-item active";
        }

        //if(employee.project == highlightedProject){
        //    styleClass += " highlight-item";
        //}

        //<div className={styleClass}
        //     onClick={this.onOrganizationSelected.bind(this)}>
        //    {organization.organizationName}
        //</div>

        var divStyle = {
            cursor: 'pointer'
        };
        var sideScreen = null;

        var selectedOrgan ="";
        var selectedSubscription ="";
        if(selectedOrganization) {
            if(organization.id == selectedOrganization.id) {
                selectedSubscription = <SubscriptionList organObject={selectedOrganization}/>
                selectedOrgan = <OrganizationForm selectedOrganization={selectedOrganization}/>
               /* if(organizationDetailScreen){
                   sideScreen = <OrganizationDetail />;
                }*/
            }
            else {
                selectedOrgan="";
                selectedSubscription="";
                sideScreen = null;
            }
        }

        return (
                <div style={{clear:'both'}}>
                    <div className="list-group" style={{width:'300px',float:'left'}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationItem);
/**
 * Created by sonalb on 3/18/2016.
 */
