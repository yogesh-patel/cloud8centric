/**
 * Created by nikhila on 02/24/2016.
 */
let React = require('react');
let { Router, Route, IndexRoute } = require('react-router');
import {App} from './js/containers';
import Home from './js/component/Home';
import SignUp from './js/component/SignUp';
import Dashboard from './js/component/Dashboard';

var Routes = (
  <Router>

    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="dashboard" component={Dashboard}>
      </Route>
    </Route>



  </Router> );

export default Routes;
