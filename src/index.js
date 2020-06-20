import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "./shared/utility";

import Spinner from "./components/UI/Spinner/Spinner";
import store from "./store/store";

import "./index.css";
import App from "./App";

import i18n from "./i18next";
import { I18nextProvider } from "react-i18next";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <Suspense fallback={<Spinner />}>{app}</Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
