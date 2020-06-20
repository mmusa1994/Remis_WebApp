import React, { Fragment } from "react";

import classes from "./Car.module.css";

const Car = () => {
  return (
    <Fragment>
      <div className={classes.FrontWheelLeft}></div>
      <div className={classes.FrontWheelRight}></div>
      <div className={classes.FrontBasic}></div>
      <div className={classes.Basic}></div>
      <div className={classes.BackBasic}></div>
      <div className={classes.BackWheelLeft}></div>
      <div className={classes.BackWheelRight}></div>
    </Fragment>
  );
};

export default Car;
