import React, { useState } from "react";
import classes from "./Card.module.css";

import building from "../../../assets/MainPic/building.png";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

import { withTranslation } from "react-i18next";

const Card = (props) => {
  const [modal, setModal] = useState(null);

  const showModal = () => {
    setModal(true);
  };

  const hideModalHandler = () => {
    setModal(false);
  };
  return (
    <div className={classes.Card}>
      <div className={classes.ImgContainer}>
        <img className={classes.template} src={building} alt="Remis" />
        <img className={classes.real} src={props.picture} alt="RealPic" />
      </div>
      <h3>{props.title}</h3>
      <button onClick={showModal}>{props.t("Card.mess")}</button>
      <Modal show={modal} modalClosed={hideModalHandler}>
        <div className={classes.Contacts}>
          <div className={classes.Person}>
            <i className="fas fa-user"></i>
            {props.person}
          </div>
          <div className={classes.Phone}>
            <i className="fas fa-phone-square-alt"></i>
            {props.phone}
          </div>
          <a
            href={props.address}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.Location}
          >
            <i className="fas fa-search-location"></i>
            {props.location}
          </a>
          <Button btnType="Default" clicked={hideModalHandler}>
            {props.t("Card.bb")}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default withTranslation()(Card);
