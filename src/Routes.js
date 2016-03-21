let React = require('react');
let { Router, Route, IndexRoute } = require('react-router');
import {App} from './js/containers';
import Home from './js/component/Home';
import Dashboard from './js/component/Dashboard';
import DashboardHome from './js/component/DashboardHome';
import SubscriptionList from './js/component/subscription/SubscriptionList';
import CreateSubscriptions from './js/component/subscription/CreateSubscriptions';
import OrganizationList from './js/component/organization/OrganizationList';

    var Routes = (
        <Router>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>

            <Route path="dashboard" component={Dashboard}>
                <IndexRoute component={DashboardHome}/>
                <Route path="home" component={DashboardHome}/>
                <Route path="subscriptions" component={SubscriptionList}/>
                <Route path="subscriptions/create" component={CreateSubscriptions}/>
                <Route path="organizations" component={OrganizationList}/>
            </Route>
            </Route>
        </Router>
    );

export default Routes;
