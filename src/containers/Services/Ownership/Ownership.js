import React, { Fragment } from "react";
import BackgroundTitle from "../../../components/BackgroundTitle/BackgroundTitle";
import picOwn from "../../../assets/BackgroundTitle/ChangeOwnership.jpg";
import IPI from "../../../assets/Partners/IPI.png";
import classes from "./Ownership.module.css";
import { withTranslation } from "react-i18next";

const Ownership = (props) => {
  return (
    <Fragment>
      <BackgroundTitle
        pic={picOwn}
        title={props.t("Navigation.Dropdown.coo")}
        link="http://www.mkt.gov.ba/bos/dokumenti/zakoni/default.aspx?id=274&langTag=bs-BA"
        partnerPic={IPI}
      />
      <article className={classes.Ownership}>
        <p>
          {props.t("Services.coo.part1")}
          <br />
          <br />
          {props.t("Services.coo.part2")}
          <br />
          {props.t("Services.coo.part3")}
          <br />
          {props.t("Services.coo.part4")}
          <br />
          {props.t("Services.coo.part5")}
          <br />
          {props.t("Services.coo.part6")}
          <br />
          {props.t("Services.coo.part7")}
          <br />
          {props.t("Services.coo.part8")}
          <br />
          {props.t("Services.coo.part9")}
          <br />
          {props.t("Services.coo.part10")}
          <br />
          {props.t("Services.coo.part11")}
          <br />
          <br />
          {props.t("Services.coo.part12")}
          <br />
          {props.t("Services.coo.part13")}
          <br />
          {props.t("Services.coo.part14")}
          <br />
          {props.t("Services.coo.part15")}
          <br />
          {props.t("Services.coo.part16")}
          <br />
          {props.t("Services.coo.part17")}
          <br />
          {props.t("Services.coo.part18")}
          <br />
          {props.t("Services.coo.part19")}
          <br />
          <br />
          {props.t("Services.coo.part20")}
          <br />
          <br />
          {props.t("Services.coo.part21")}
          <br />
          <br />
          {props.t("Services.coo.part22")}
          <br />
          <br />
          {props.t("Services.coo.part23")}
        </p>
      </article>
    </Fragment>
  );
};

export default withTranslation()(Ownership);
