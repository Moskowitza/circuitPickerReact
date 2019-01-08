import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RunCircuit from "./RunCircuit/RunCircuit";
import GymPicker from "./GymPicker/GymPicker";
import SignUpForm from "./SignUpForm/SignUpForm";
import NotFound from "./NotFound/NotFound";
import App from "./App";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GymPicker} />
      <Route exact path="/gym/:gymId" component={App} />
      <Route path="/gym/:gymId/:circuitId" component={RunCircuit} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Router;
