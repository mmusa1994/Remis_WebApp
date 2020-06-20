import React from "react";
import classes from "./BackgroundTitle.module.css";

import { withTranslation } from "react-i18next";

const BackgroundTitle = (props) => {
  let descriptinPartners = null;
  if (props.partnerDescription) {
    descriptinPartners = (
      <p>
        {props.partnerDescription}
        <i className="far fa-arrow-alt-circle-down"></i>
      </p>
    );
  } else {
    descriptinPartners = (
      <p>
        {props.t("BcgTitle.descpart1")} {props.title},
        {props.t("BcgTitle.descpart2")}
        <i className="far fa-arrow-alt-circle-down"></i>
      </p>
    );
  }
  return (
    <div className={classes.BackgroundWrapper}>
      <article
        className={classes.BackgroundImage}
        style={{ backgroundImage: `url(${props.pic})` }}
      >
        <span>{props.title}</span>
        <section>
          <a href="/"> {props.t("BcgTitle.btn1")}</a>
          <a className={classes.a1} href="/data">
            {props.t("BcgTitle.btn2")}
          </a>
        </section>
      </article>
      <article className={classes.MoreInformation}>
        {descriptinPartners}
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.partnerPic} alt="PartnerLogo" />
        </a>
      </article>
    </div>
  );
};

export default withTranslation()(BackgroundTitle);
