import React from "react";
import { Redirect } from "react-router-dom";
import { Utils } from "../../utils";
import { pagesConfigs } from "app/pages/pagesConfigs";

const routeConfigs = [...pagesConfigs];

const routes = [
  ...Utils.generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    component: () => <Redirect to="/error-404" />
  }
];

export default routes;
