import React from "react";

import classes from "./ButtonDropdown.module.css";
import { withTranslation } from "react-i18next";

const ButtonDropdown = (props) => {
  return (
    <div className={classes.Dropdown}>
      <button className={classes.Dropbtn}> {props.children}</button>
      <div className={classes.DropdownContent}>
        <a href="/vehtechinsp">{props.t("Navigation.Dropdown.vti")}</a>
        <a href="/certification">{props.t("Navigation.Dropdown.crt")}</a>
        <a href="/homologation">{props.t("Navigation.Dropdown.hom")}</a>
        <a href="/registration">{props.t("Navigation.Dropdown.vr")}</a>
        <a href="/ownership">{props.t("Navigation.Dropdown.coo")}</a>
        <a href="/eniginenumber">{props.t("Navigation.Dropdown.enr")}</a>
        <a href="/tachographs">{props.t("Navigation.Dropdown.tacho")}</a>
      </div>
    </div>
  );
};

export default withTranslation()(ButtonDropdown);
