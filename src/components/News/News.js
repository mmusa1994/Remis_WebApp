import React from "react";
import classes from "./News.module.css";

const News = (props) => {
  return (
    <div>
      <article className={classes.NewsBox}>
        <a href="/news">
          <h2>{props.title}</h2>
        </a>
        <p className={classes.artText}>{props.content}</p>
        <img src={props.img} alt="img" />
      </article>
    </div>
  );
};

export default News;
