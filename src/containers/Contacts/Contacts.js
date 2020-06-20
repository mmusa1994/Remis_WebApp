import React, { Fragment } from "react";

import Logo from "../../components/Logo/Logo";
import { withTranslation } from "react-i18next";

import classes from "./Contacts.module.css";
import MailForm from "../MailForm/MailForm";

const Contacts = (props) => {
  return (
    <Fragment>
      <article className={classes.Intro}>
        <Logo />
        <strong>{props.t("Contacts.banner")}</strong>
        <section>
          {props.t("Contacts.tel")}: 032/730-300
          <br />
          Fax: 032/730-304
          <br />
          E-mail: info@remis.ba
          <br />
          <a className={classes.Mail} href="/mail">
            {props.t("Contacts.mess")}
          </a>
        </section>
      </article>
      <article className={classes.Content}>
        <a className={classes.Mail} href="branches">
          {props.t("Contacts.branchMess")}
        </a>
        <a className={classes.Mail} href="/mail">
          {props.t("Contacts.mailMess")}
        </a>
        <MailForm />
      </article>
    </Fragment>
  );
};

export default withTranslation()(Contacts);
