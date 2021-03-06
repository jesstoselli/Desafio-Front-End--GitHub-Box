import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Dev from "../pages/Dev";
import Favorites from "../pages/Favorites";
import History from "../pages/History";

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/devs/:login' component={Dev} />
    <Route path='/search-history' component={History} />
    <Route path='/favorites' component={Favorites} />
  </Switch>
);

export default Routes;
