import React, { Fragment } from "react";
import BackgroundTitle from "../../../components/BackgroundTitle/BackgroundTitle";
import picCertif from "../../../assets/BackgroundTitle/Certification.jpg";
import classes from "./Certification.module.css";
import FMPK from "../../../assets/Partners/FMPK.png";
import { withTranslation } from "react-i18next";

const Certification = (props) => {
  return (
    <Fragment>
      <BackgroundTitle
        pic={picCertif}
        title={props.t("Navigation.Dropdown.crt")}
        link="https://fmpik.gov.ba/bh/aktuelnosti/obavje%C5%A1tenja/261-procedura-postupak-identifikacije-novoproizvedenog-vozila.html#"
        partnerPic={FMPK}
      />
      <article className={classes.Certification}>
        {props.t("Services.cert.part1")}
        <br />
        {props.t("Services.cert.part2")}
        <br />
        {props.t("Services.cert.part3")}
        <br />
        {props.t("Services.cert.part4")}
        <br />
        {props.t("Services.cert.part5")}
        <br />
        {props.t("Services.cert.part6")}
        <br />
        {props.t("Services.cert.part7")}
        <br />
        {props.t("Services.cert.part8")}
        <br />
        {props.t("Services.cert.part9")}
        <br />
        {props.t("Services.cert.part10")}
        <br />
        <br />
        {props.t("Services.cert.part11")}
        <br />
        {props.t("Services.cert.part12")}
        <br />
        {props.t("Services.cert.part13")}
        <br />
        {props.t("Services.cert.part14")}
        <br />
        {props.t("Services.cert.part15")}
        <br />
        <br />
        {props.t("Services.cert.part16")}
      </article>
    </Fragment>
  );
};

export default withTranslation()(Certification);
