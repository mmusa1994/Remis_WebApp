import React, { Fragment } from "react";
import classes from "./VehicleTechnicalInspection.module.css";
import BackgroundTitle from "../../../components/BackgroundTitle/BackgroundTitle";
import picVechInsp from "../../../assets/BackgroundTitle/VechInsp.jpg";
import IPI from "../../../assets/Partners/IPI.png";
import { withTranslation } from "react-i18next";

const VehicleTechnicalInspection = (props) => {
  return (
    <Fragment>
      <BackgroundTitle
        pic={picVechInsp}
        title={props.t("Navigation.Dropdown.vti")}
        link="https://www.ipi.ba/tehnicki-pregled/"
        partnerPic={IPI}
      />
      <article className={classes.VehicleTechnicalInspection}>
        <p>
          {props.t("Services.vti.part1")}
          <br />
          <br />
          {props.t("Services.vti.part2")}
          <br />
          <br />
          {props.t("Services.vti.part3")}
          <br />
          <br />
          {props.t("Services.vti.part4")}
          <br />
          {props.t("Services.vti.part5")}
          <br />
          <br />
          {props.t("Services.vti.part6")}
          <br />
          <br />
          {props.t("Services.vti.part7")}
          <br />
          {props.t("Services.vti.part8")}
          <br />
          {props.t("Services.vti.part9")}
          <br />
          {props.t("Services.vti.part10")}
          <br />
          {props.t("Services.vti.part11")}
          <br />
          {props.t("Services.vti.part12")}
          <br />
          {props.t("Services.vti.part13")}
          <br />
          <br />
          {props.t("Services.vti.part14")}
          <br />
          <br />
          {props.t("Services.vti.part15")}
          <br />
          {props.t("Services.vti.part16")}
          <br />
          {props.t("Services.vti.part17")}
          <br />
          {props.t("Services.vti.part18")}
          <br />
          {props.t("Services.vti.part19")}
          <br />
          {props.t("Services.vti.part20")}
          <br />
          <br />
          {props.t("Services.vti.part21")}
        </p>
      </article>
    </Fragment>
  );
};

export default withTranslation()(VehicleTechnicalInspection);
