import React from "react";
import { Slide } from "react-slideshow-image";

import { withTranslation } from "react-i18next";
import "./SlideShow.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
};

const Slideshow = (props) => {
  const slideImages = [props.pic1, props.pic2, props.pic3, props.pic4];

  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <h1>{props.title1}</h1>
            <div className="buttonContainer">
              <a href="/vehtechinsp">{props.t("Slideshow.MORE")}</a>
              <a className="a1" href="/data">
                {props.t("Slideshow.APPLY FOR INSPECTION")}
              </a>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <h1>{props.title2}</h1>
            <div className="buttonContainer">
              <a href="/vehtechinsp">{props.t("Slideshow.MORE")}</a>
              <a className="a1" href="/data">
                {props.t("Slideshow.APPLY FOR INSPECTION")}
              </a>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <h1>{props.title3}</h1>
            <div className="buttonContainer">
              <a href="/vehtechinsp">{props.t("Slideshow.MORE")}</a>
              <a className="a1" href="/data">
                {props.t("Slideshow.APPLY FOR INSPECTION")}
              </a>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
            <h1>{props.title4}</h1>
            <div className="buttonContainer">
              <a href="/vehtechinsp">{props.t("Slideshow.MORE")}</a>
              <a className="a1" href="/data">
                {props.t("Slideshow.APPLY FOR INSPECTION")}
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default withTranslation()(Slideshow);
