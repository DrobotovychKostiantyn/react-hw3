import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Nav from './Navigation/index';
import MainPage from './Pages/MainPage';
import MenuPage from './Pages/MenuPage';
import NotFoundPage from './Pages/NotFoundPage';
import MenuItemPage from './Pages/MenuItemPage';
import AddItemMenuPage from './Pages/AddItemMenuPage';

const Admin = props =>
  console.log(props) || (
    <>
      <Nav />
      <hr />
      <Switch>
        <Route
          exact
          path={`${props.match.path}/main-page`}
          component={MainPage}
        />
        <Route
          exact
          path={`${props.match.path}/menu/add`}
          component={AddItemMenuPage}
        />
        <Route
          exact
          path={`${props.match.path}/menu/:id`}
          component={MenuItemPage}
        />
        <Route exact path={`${props.match.path}/menu`} component={MenuPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );

export default Admin;
