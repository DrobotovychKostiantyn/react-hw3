import React from 'react';
import { Switch, Route } from 'react-router-dom';

import User from './Client/User';
import Admin from './Admin/admin';

const App = () => (
  <>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route exact path="/" component={User} />
    </Switch>
  </>
);

export default App;
