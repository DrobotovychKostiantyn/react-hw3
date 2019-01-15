import React from 'react';
import { Switch, Route } from 'react-router-dom';

import User from './User/index';
import Admin from './Admin/index';

const App = () => (
  <>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route component={User} />
    </Switch>
  </>
);

export default App;
