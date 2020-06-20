import React from "react";
import Logo from "../../Logo/Logo";
import GoTop from "../../GoTop/GoTop";

import GRAWE from "../../../assets/Partners/GRAWE.png";
import BIHAMK from "../../../assets/Partners/BIHAMK.png";
import IPI from "../../../assets/Partners/IPI.png";
import SO from "../../../assets/Partners/SO.png";
import Vins from "../../../assets/Partners/Vins.png";
import FMPK from "../../../assets/Partners/FMPK.png";
import BIHMPK from "../../../assets/Partners/BIHMPK.png";

import classes from "./Footer.module.css";
import { withTranslation } from "react-i18next";

const Footer = (props) => {
  return (
    <footer className={classes.Main}>
      <GoTop scrollStepInPx="50" delayInMs="16.66" />
      <div>
        <h2>{props.t("Footer.Licence")}</h2>
        <div className={classes.Partners}>
          <a
            href="http://www.mkt.gov.ba/Default.aspx?langTag=bs-BA&template_id=99&pageIndex=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BIHMPK} alt="BIHPIK" />
          </a>
          <a
            href="http://fmpik.gov.ba/bh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FMPK} alt="FMPIK" />
          </a>
        </div>
        <div>
          <h2 className={classes.h2Partners}>{props.t("Footer.Partners")}</h2>
          <div className={classes.Partners}>
            <a
              href="https://www.grawe.ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GRAWE} alt="Grawe" />
            </a>
            <a
              href="https://www.sarajevoosiguranje.ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={SO} alt="SarOsig" />
            </a>
            <a
              href="https://www.ipi.ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IPI} alt="IPI" />
            </a>
            <a
              href="https://bihamk.ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={BIHAMK} alt="BIHAMK" />
            </a>
            <a href="http://vlns.ba/" target="_blank" rel="noopener noreferrer">
              <img className={classes.vins} src={Vins} alt="Vins" />
            </a>
          </div>
        </div>
      </div>
      <Logo />
      <p className={classes.Text}>{props.t("Footer.Desc")}</p>
      <div className={classes.Contact}>
        <p className={classes.Text}>
          <i className="fas fa-tty"></i>032/730-300
        </p>
        <p className={classes.Text}>
          <i className="far fa-envelope"></i>
          info@remis.ba
        </p>
      </div>
      <div className={classes.Socials}>
        <a
          href="https://www.facebook.com/Remis-doo-visoko-1422432701230436/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram-square"></i>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className={classes.Bottom}>
        <p className={classes.Text}>
          <i className="far fa-copyright"></i> Copyrigth 2020
        </p>

        <p className={classes.Text1}>
          {props.t("Footer.Rights")}
          <a href="/">"Remis" d.o.o Visoko</a>
        </p>
        <p className={classes.Text1}>
          Developed by
          <a
            href="https://www.linkedin.com/in/muhamed-musa-2b1521197/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Muhamed Musa
          </a>
        </p>
      </div>
    </footer>
  );
};

export default withTranslation()(Footer);
