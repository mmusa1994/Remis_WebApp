import React from "react";
import remisLogo from "../../assets/MainPic/remis_logo.jpg";

import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className={classes.Logo} src={remisLogo} alt="Remis" />
      </Link>
    </div>
  );
};

export default Logo;
