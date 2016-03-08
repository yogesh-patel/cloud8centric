/**
 * Created by nikhila on 02/24/2016.
 */
let React = require('react');
let { Router, Route, IndexRoute } = require('react-router');
import {App} from './js/containers';
import Home from './js/component/Home';
import SignUp from './js/component/SignUp';
import Login from './js/component/Login';

var Routes = (
  <Router>

    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="signup" component={SignUp}/>
      <Route path="login" component={Login}/>
    </Route>

  </Router> );

export default Routes;
