/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./app";
import "./style.scss";
import { Provider } from "react-redux";
// import FontFaceObserver from "fontfaceobserver";

import store from "./store";

// import { HashRouter as Router } from 'react-router-dom';
import { history } from "./utils/history";
import { HelmetProvider } from "react-helmet-async";

// ==============================================
//
// Using Apollo client for the store and caching
//
// ==============================================
// 1
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// 2
const httpLink = createHttpLink({
  uri: "https://kiu-delivery-backend.herokuapp.com"
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// =============================================
//          Extras
// =============================================

window.onScrollActions = {};

window.onscroll = () => {
  for (let action in window.onScrollActions) {
    window.onScrollActions[action]();
  }
};

// // Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// // the index.html file and this observer)
// const openSansObserver = new FontFaceObserver("Inter", {});

// // When Inter is loaded, add a font-family using Inter to the body
// openSansObserver.load().then(() => {
//   document.body.classList.add("fontLoaded");
// });

const ConnectedApp = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        {/* <ThemeProvider> */}
        <HelmetProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </HelmetProvider>
        {/* </ThemeProvider> */}
      </Router>
    </Provider>
  </ApolloProvider>
);

const render = () => {
  ReactDOM.render(<ConnectedApp />, document.getElementById("root"));
};

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(["./app"], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    const App = require("./app").App;
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
