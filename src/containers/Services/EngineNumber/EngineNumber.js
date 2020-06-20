import React, { Fragment } from "react";
import BackgroundTitle from "../../../components/BackgroundTitle/BackgroundTitle";
import picEngRead from "../../../assets/BackgroundTitle/VehNumber.jpg";
import classes from "./EngineNumber.module.css";
import IPI from "../../../assets/Partners/IPI.png";
import { withTranslation } from "react-i18next";

const EngineNumberReading = (props) => {
  return (
    <Fragment>
      <BackgroundTitle
        pic={picEngRead}
        title={props.t("Navigation.Dropdown.enr")}
        link="https://www.ipi.ba/strucni-bilten-ipi/"
        partnerPic={IPI}
      />
      <article className={classes.EngineNumberReading}>
        {props.t("Services.enr.part1")}
        <br />
        <br />
        {props.t("Services.enr.part2")}
        <br />
        <br />
        {props.t("Services.enr.part3")}
      </article>
    </Fragment>
  );
};

export default withTranslation()(EngineNumberReading);
