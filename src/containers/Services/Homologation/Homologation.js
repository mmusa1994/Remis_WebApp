import React, { Fragment } from "react";
import BackgroundTitle from "../../../components/BackgroundTitle/BackgroundTitle";
import picHom from "../../../assets/BackgroundTitle/Homologation.jpg";
import classes from "./Homologation.module.css";
import BIHMPK from "../../../assets/Partners/BIHMPK.png";
import { withTranslation } from "react-i18next";

const Homologation = (props) => {
  return (
    <Fragment>
      <BackgroundTitle
        pic={picHom}
        title={props.t("Navigation.Dropdown.hom")}
        link="http://www.mkt.gov.ba/dokumenti/ostalo/default.aspx?id=2560&langTag=bs-BA"
        partnerPic={BIHMPK}
      />
      <article className={classes.Homologation}>
        <p>
          {props.t("Services.homol.part1")}
          <br />
          <br />
          {props.t("Services.homol.part2")}
          <br />
          <br />
          {props.t("Services.homol.part3")}
          <br />
          <br />
          {props.t("Services.homol.part4")}
          <br />
          <br />
          {props.t("Services.homol.part5")}
          <br />
          <br />
          {props.t("Services.homol.part6")}
          <br />
          <br />
          {props.t("Services.homol.part7")}
          <br />
          <br />
          {props.t("Services.homol.part8")}
          <br />
          <br />
          {props.t("Services.homol.part9")}
          <br />
          <br />
          {props.t("Services.homol.part10")}
          <br />
          <br />
          {props.t("Services.homol.part11")}
          <br />
          <br />
          {props.t("Services.homol.part12")}
        </p>
      </article>
    </Fragment>
  );
};

export default withTranslation()(Homologation);
