import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ChoosePage from "../pages/ChoosePage/ChoosePage";
import Dashboard from "../pages/dashboard";
import DeliveryPage from "../pages/DeliveryPage";
import HomePage from "../pages/HomePage/index";
// import LoginPage from "../pages/LoginPage";
// import Register from "../pages/RegisterPage";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/homepage" />
        </Route>
        <Route path="/homepage" component={HomePage} />
        <Route path="/choosepage" component={ChoosePage} />
        <Route path="/delivery" component={DeliveryPage} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/login" component={LoginPage} /> */}
        {/* <Route path="/registration" component={Register} /> */}
      </Switch>
    </BrowserRouter>
  );
}
