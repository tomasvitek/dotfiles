import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from "react-router-dom";

import { initStore } from "./store/reducers";

import Dashboard from "./pages/dashboard";
import PageDetail from "./pages/page-detail";

const Clockwork = () => (
  <Provider store={initStore}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/edit/:page" component={PageDetail} />
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Clockwork />, document.getElementById("app"));
