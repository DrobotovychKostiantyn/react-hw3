import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Nav from './Navigation/index';
import MainPage from './Pages/MainPage';
import MenuPage from './Pages/MenuPage';
import NotFoundPage from './Pages/NotFoundPage';
import MenuItemPage from './Pages/MenuItemPage';
import AddItemMenuPage from './Pages/AddItemMenuPage';

// import FeaturesSection from './FeaturesSection/FeaturesSection';

// import DeviceSection from './DeviceSection/DeviceSection';

const App = () => (
  <>
    <Nav />
    <hr />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/menu/add" component={AddItemMenuPage} />
      <Route path="/menu/:id" component={MenuItemPage} />
      <Route path="/menu" component={MenuPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
