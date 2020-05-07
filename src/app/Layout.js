import "@fake-db";
import React from "react";
import { FuseAuthorization, FuseLayout, FuseTheme } from "@fuse";
import Provider from "react-redux/es/components/Provider";
import { Router } from "react-router-dom";
import history from "@history";
import { Auth } from "./auth";
import store from "../store";
import AppContext from "./AppContext";
import routes from "./app-configs/routesConfig";

const Layout = () => {
  return (
    <AppContext.Provider
      value={{
        routes
      }}
    >
      <Provider store={store}>
        <Auth>
          <Router history={history}>
            <FuseAuthorization>
              <FuseTheme>
                <FuseLayout />
              </FuseTheme>
            </FuseAuthorization>
          </Router>
        </Auth>
      </Provider>
    </AppContext.Provider>
  );
};

export default Layout;
