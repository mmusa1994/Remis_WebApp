import React from "react";
import moment from "moment";
import classes from "./NewsArticle.module.css";

const NewsArticle = (props) => {
  let date = new Date();
  return (
    <div className={classes.NewsArticle}>
      <h1>{props.title}</h1>
      <img src={props.pic} alt="img" align="left" />
      <p>{props.text}</p>
      <p>
        <em>{moment(date).format("LLL")}</em>{" "}
      </p>
    </div>
  );
};

export default NewsArticle;
