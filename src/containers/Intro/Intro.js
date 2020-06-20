import React from "react";
import IntroCard from "../../components/UI/IntroCard/IntroCard";
import classes from "./Intro.module.css";
import logoBig from "../../assets/MainPic/remis_logo_big.png";
import logoSmall from "../../assets/MainPic/remis_logo.jpg";

import home from "../../assets/IntroCard/home.png";
import mechanic from "../../assets/IntroCard/mechanic.png";
import homologation from "../../assets/IntroCard/homologation.png";
import eco from "../../assets/IntroCard/ecotest.png";
import wheels from "../../assets/IntroCard/wheels.png";
import enginenumber from "../../assets/IntroCard/engine-num.png";
import certification from "../../assets/IntroCard/certification.png";
import changeow from "../../assets/IntroCard/changeow.png";
import tacho from "../../assets/IntroCard/tacho.png";
import registration from "../../assets/IntroCard/registration.jpg";

const Intro = (props) => {
  return (
    <div className={classes.Wrapper}>
      <a href="/Home" className={classes.LogoBackground}>
        <img className={classes.IntroLogoBig} src={logoBig} alt="Remis" />
        <img className={classes.IntroLogoSmall} src={logoSmall} alt="Remis" />
      </a>

      <div className={classes.CardsContainer}>
        <div className={classes.Cards}>
          <div className={classes.IC1}>
            <IntroCard route="/Home" title="POČETNA" image={home} />
          </div>
          <div className={classes.IC2}>
            <IntroCard
              route="/vehtechinsp"
              title="TEHNIČKI PREGLED"
              image={mechanic}
            />
          </div>
          <div className={classes.IC3}>
            <IntroCard
              route="/Home"
              title="PROMJENA VLASNIŠTVA"
              image={changeow}
            />
          </div>
          <div className={classes.IC4}>
            <IntroCard route="/Home" title="EKO-TEST" image={eco} />
          </div>
          <div className={classes.IC5}>
            <IntroCard route="/Home" title="KONTROLA GUMA" image={wheels} />
          </div>
          <div className={classes.IC6}>
            <IntroCard route="/Home" title="BROJ MOTORA" image={enginenumber} />
          </div>
          <div className={classes.IC7}>
            <IntroCard
              route="/Home"
              title="HOMOLOGACIJA"
              image={homologation}
            />
          </div>

          <div className={classes.IC8}>
            <IntroCard
              route="/Home"
              title="CERTIFIKACIJA"
              image={certification}
            />
          </div>
          <div className={classes.IC9}>
            <IntroCard
              route="/Home"
              title="REGISTRACIJA"
              image={registration}
            />
          </div>
          <div className={classes.IC10}>
            <IntroCard route="/Home" title="TAHOGRAFI" image={tacho} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
