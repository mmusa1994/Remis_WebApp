import React, { Fragment } from "react";
import BackgroundTitle from "../../../components/BackgroundTitle/BackgroundTitle";
import picReg from "../../../assets/BackgroundTitle/VehRegistration.jpg";
import classes from "./Registration.module.css";
import Vins from "../../../assets/Partners/Vins.png";
import { withTranslation } from "react-i18next";

const Registration = (props) => {
  return (
    <Fragment>
      <BackgroundTitle
        pic={picReg}
        title={props.t("Navigation.Dropdown.vr")}
        link="http://vlns.ba/kalkulator"
        partnerPic={Vins}
        partnerDescription={props.t("BcgTitle.messReg")}
      />
      <article className={classes.Registration}>
        <p>
          {props.t("Services.reg.part1")}
          <br />
          <br />
          {props.t("Services.reg.part2")}
          <br />
          <br />
          {props.t("Services.reg.part3")}
          <br />
          <br />
          {props.t("Services.reg.part4")}
          <br />
          <br />
          {props.t("Services.reg.part5")}
          <br />
          {props.t("Services.reg.part6")}
          <br />
          {props.t("Services.reg.part7")}
          <br />
          {props.t("Services.reg.part8")}
          <br />
          {props.t("Services.reg.part9")}
          <br />
          {props.t("Services.reg.part10")}
          <br />
          {props.t("Services.reg.part11")}
          <br />
          {props.t("Services.reg.part12")}
          <br />
          {props.t("Services.reg.part13")}
          <br />
          {props.t("Services.reg.part14")}
          <br />
          {props.t("Services.reg.part15")}
          <br />
          {props.t("Services.reg.part16")}
          <br />
          {props.t("Services.reg.part17")}
          <br />
          {props.t("Services.reg.part18")}
          <br />
          {props.t("Services.reg.part19")}
          <br />
          {props.t("Services.reg.part20")}
          <br />
          <br />
          {props.t("Services.reg.part21")}
        </p>
      </article>
    </Fragment>
  );
};

export default withTranslation()(Registration);
