import React, { Fragment } from "react";
import BackgroundTitle from "../../../components/BackgroundTitle/BackgroundTitle";
import picTacho from "../../../assets/BackgroundTitle/Tachographs.jpg";
import classes from "./Tachographs.module.css";
import IPI from "../../../assets/Partners/IPI.png";
import { withTranslation } from "react-i18next";

const Tachographs = (props) => {
  return (
    <Fragment>
      <BackgroundTitle
        pic={picTacho}
        title={props.t("Navigation.Dropdown.tacho")}
        link="https://www.ipi.ba/obavijest-svim-stp_smart-tahografi/"
        partnerPic={IPI}
      />
      <article className={classes.Tachographs}>
        <p>
          {props.t("Services.tacho.part1")}
          <br />
          <br />
          {props.t("Services.tacho.part2")}
          <br />
          <br />
          {props.t("Services.tacho.part3")}
          <br />
          <br />
          {props.t("Services.tacho.part4")}
          <br />
          <br />
          {props.t("Services.tacho.part5")}
          <br />
          <br />
          {props.t("Services.tacho.part6")}
          <br />
          <br />
          {props.t("Services.tacho.part7")}
          <br />
          <br />
          {props.t("Services.tacho.part8")}
        </p>
      </article>
    </Fragment>
  );
};

export default withTranslation()(Tachographs);
