import React from "react";
import classes from "./IntroCard.module.css";

const IntroCard = (props) => {
  return (
    <a href={props.route}>
      <div className={classes.CardContainer}>
        <h4 className={classes.title}>{props.title}</h4>
        <img className={classes.Image} src={props.image} alt="IMG" />
      </div>
    </a>
  );
};

export default IntroCard;
