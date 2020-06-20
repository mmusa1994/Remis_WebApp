import React from "react";
import classes from "./CitiesCard.module.css";

const CitiesCard = (props) => {
  return (
    <div
      className={classes.CitiesCard}
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <a href="/branches">
        <p>{props.city}</p>
      </a>
    </div>
  );
};

export default CitiesCard;
