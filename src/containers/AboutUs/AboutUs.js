import React, { Fragment } from "react";

import tech from "../../assets/MainPic/building.png";

import classes from "./AboutUs.module.css";
import Logo from "../../components/Logo/Logo";
import { withTranslation } from "react-i18next";

const AboutUs = (props) => {
  return (
    <Fragment>
      <div className={classes.Wrapper}>
        <article className={classes.Head}>
          <section className={classes.HeadData}>
            <Logo />
            <br />
            <em>
              {props.t("Contacts.address")}: Braće Zečević 3A, 71300 Visoko{" "}
              <br />
              ID: 4218273470000
              <br />
              PDV: 218273470000
              <br />
              <br />
              {props.t("Contacts.tel")}: 032/730-300 <br />
              Fax: 032/730-304 <br />
              E-mail: info@remis.ba
              <br />
            </em>
          </section>
          <img className={classes.tech} id="tech" src={tech} alt="tech" />
        </article>
        <br />
        <article className={classes.Main}>
          <strong>{props.t("AboutUs.Intro")}</strong>
          <br />
          <br />
          {props.t("AboutUs.part1")}
          <br />
          <br />
          {props.t("AboutUs.part2")}
          <br />
          <br />
          {props.t("AboutUs.part3")}
          <br />
          <br />
          {props.t("AboutUs.part4")}
          <br />
          <br />
          {props.t("AboutUs.part5")}
          <strong>Samir Musa, dipl. ing. maš.</strong>
        </article>
      </div>
    </Fragment>
  );
};

export default withTranslation()(AboutUs);
