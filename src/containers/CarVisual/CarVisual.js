import React, { Fragment } from "react";
import classes from "./CarVisual.module.css";
import { connect } from "react-redux";

const CarInspection = (props) => {
  return (
    <Fragment>
      {props.isAuthenticated ? (
        <div className={classes.Visual}>
          <a
            href="http://www.automobile-data.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GO INSIDE
          </a>
        </div>
      ) : (
        <h1 className={classes.RedirectMessage}>
          You are not authorizate for that operation, authorize below on
          <br />
          <a href="/auth">CLICK HERE!</a>
        </h1>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(CarInspection);
