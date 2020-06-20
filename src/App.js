import React, { useEffect, Suspense, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Spinner from "./components/UI/Spinner/Spinner";
import Layout from "./hoc/Layout/Layout";
import Routes from "./Routes/Routes";
import Intro from "./containers/Intro/Intro";

import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, [props]);

  return (
    <Fragment>
      <div className="App">
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Layout>
              <Route component={Routes} />
            </Layout>
          </Switch>
        </Suspense>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
