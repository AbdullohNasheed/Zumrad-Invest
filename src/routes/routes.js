import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChoosePage from "../pages/ChoosePage/ChoosePage";
import DeliveryPage from "../pages/DeliveryPage";
import HomePage from '../pages/HomePage/index'
export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/homepage" component={HomePage}/>
            <Route path="/choosepage" component={ChoosePage}/>
            <Route path="/delivery" component={DeliveryPage}/>
        </Switch>
  </BrowserRouter>
  );
}