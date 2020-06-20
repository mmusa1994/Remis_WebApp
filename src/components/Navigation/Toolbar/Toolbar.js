import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import NavigationItem from "../NavigationItem/NavigationItem";

import UK from "../../../assets/Flags/UK.png";
import BiH from "../../../assets/Flags/BiH.png";

import { useTranslation, withTranslation } from "react-i18next";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  const { i18n } = useTranslation();

  const handleChangelang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav>
        <section className={classes.Logo}>
          <Logo />
        </section>
        <section className={classes.DesktopOnly}>
          <NavigationItems isAuthenticated={props.isAuth} />
        </section>
      </nav>
      <article className={classes.rSide}>
        {!props.isAuth ? (
          <NavigationItem link="/auth">
            <i className="fas fa-user"> </i>
            <span className={classes.AuthDeskOnly}>
              {props.t("Navigation.Authentication")}
            </span>
          </NavigationItem>
        ) : (
          <NavigationItem link="/logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className={classes.AuthDeskOnly}>
              {" "}
              {props.t("Navigation.Logout")}
            </span>
          </NavigationItem>
        )}
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
      </article>
    </header>
  );
};
export default withTranslation()(Toolbar);
