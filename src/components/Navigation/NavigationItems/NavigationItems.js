import React, { Fragment } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import ButtonDropdown from "../../UI/ButtonDropdown/ButtonDropdown";

import { withTranslation } from "react-i18next";

const NavigationItems = (props) => {
  return (
    <Fragment>
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/Home">
          {props.t("Navigation.Home")}
        </NavigationItem>
        <NavigationItem link="/aboutus">
          {props.t("Navigation.About Us")}
        </NavigationItem>
        <NavigationItem link="/news">
          {props.t("Navigation.News")}
        </NavigationItem>
        <ButtonDropdown>{props.t("Navigation.Services")} ⦿</ButtonDropdown>
        <NavigationItem link="/branches">
          {props.t("Navigation.Branches")}
        </NavigationItem>
        <NavigationItem link="/contacts">
          {props.t("Navigation.Contacts")}
        </NavigationItem>
        {props.isAuthenticated ? (
          <NavigationItem link="/cardata">
            {props.t("Navigation.Visual Car Data")}
          </NavigationItem>
        ) : null}
        {props.isAuthenticated ? (
          <NavigationItem link="/data">
            {props.t("Navigation.Apply for Technical Inspection")}
          </NavigationItem>
        ) : null}
      </ul>
    </Fragment>
  );
};

export default withTranslation()(NavigationItems);
