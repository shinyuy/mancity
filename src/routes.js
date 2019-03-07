import React from 'react';
import Layout from './HOC/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Signin from './components/signin/index';

import Privateroutes from './components/authroutes/Privateroutes';
import Publicroutes from './components/authroutes/Publicroutes';
import Theteam from './components/the team/index';
import Thematches from './components/the matches/index';

import Dashboard from './components/admin/Dashboard';
import Adminmatches from './components/admin/matches/index';
import Addeditmatch from './components/admin/matches/Addeditmatch';
import Adminplayers from './components/admin/players/index';
import Addeditplayers from './components/admin/players/Addeditplayers';


const Routes = (props) => {

  return (
    <div>
      <Layout>
        <Switch>
          <Privateroutes {...props} exact path='/admin_players/add_players' component={Addeditplayers} />
          <Privateroutes {...props} exact path='/admin_players/add_players/:id' component={Addeditplayers} />
          <Privateroutes {...props} exact path='/admin_players' component={Adminplayers} />
          <Privateroutes {...props} exact path='/admin_matches/edit_match' component={Addeditmatch} />
          <Privateroutes {...props} exact path='/admin_matches/edit_match/:id' component={Addeditmatch} />
          <Privateroutes {...props} exact path='/admin_matches' component={Adminmatches} />
          <Privateroutes {...props} restricted={true} exact path='/dashboard' component={Dashboard} />
          <Publicroutes {...props} restricted={true} path='/sign_in' exact component={Signin} />
          <Publicroutes {...props} restricted={false} path='/the_matches' exact component={Thematches} />
          <Publicroutes {...props} restricted={false} path='/the_team' exact component={Theteam} />
          <Publicroutes {...props} restricted={false} path='/' exact component={Home} />
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes;