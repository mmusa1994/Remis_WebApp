import React, { Fragment } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import UK from "../../../assets/Flags/UK.png";
import BiH from "../../../assets/Flags/BiH.png";

import { useTranslation, withTranslation } from "react-i18next";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const { i18n } = useTranslation();

  const handleChangelang = (lang) => {
    i18n.changeLanguage(lang);
  };

  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div className={classes.LanguageFlags}>
          {props.i18n.language === "en" ? (
            <button
              className={classes.activate}
              onClick={() => handleChangelang("en")}
            >
              <img src={UK} alt="UK" />
            </button>
          ) : (
            <button
              className={classes.deactivate}
              onClick={() => handleChangelang("en")}
            >
              <img src={UK} alt="UK" />
            </button>
          )}

          {props.i18n.language === "bos" ? (
            <button
              className={classes.activate}
              onClick={() => handleChangelang("bos")}
            >
              <img src={BiH} alt="BiH" />
            </button>
          ) : (
            <button
              className={classes.deactivate}
              onClick={() => handleChangelang("bos")}
            >
              <img src={BiH} alt="BiH" />
            </button>
          )}
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Fragment>
  );
};

export default withTranslation()(SideDrawer);
