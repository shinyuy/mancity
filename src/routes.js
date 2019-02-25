import React from 'react';
import Layout from './HOC/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Signin from './components/signin/index';

import Privateroutes from './components/authroutes/Privateroutes';
import Publicroutes from './components/authroutes/Publicroutes';

import Dashboard from './components/admin/Dashboard';

const Routes = (props) => {

  return (
    <div>
      <Layout>
        <Switch>

          <Privateroutes {...props} exact path='/dashboard' component={Dashboard} />
          <Publicroutes {...props} restricted={true} path='/sign_in' exact component={Signin} />
          <Publicroutes {...props} restricted={false} path='/' exact component={Home} />
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes;