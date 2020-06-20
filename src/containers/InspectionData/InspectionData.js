import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./InspectionData.module.css";
import axios from "../../axios-order";
import Input from "../../components/UI/Input/Input";
import Logo from "../../components/Logo/Logo";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";

import { withTranslation } from "react-i18next";

const InspectionData = (props) => {
  const [Form, setForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your E-Mail",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    city: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "City",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    workplace: {
      label: "FormData.workplace",
      elementType: "select",
      elementConfig: {
        options: [
          { value: "TPBanovići", displayValue: "TP Banovići" },
          { value: "TPBosanskaKrupa", displayValue: "TP Bosanska Krupa" },
          { value: "TPBosKrupaPJ2", displayValue: "TP Bos Krupa PJ2" },
          { value: "TPKakanj", displayValue: "TP Kakanj" },
          { value: "TPKonjicj", displayValue: "TP Konjic" },
          { value: "TPKonjicPJ2", displayValue: "TP Konjic PJ2" },
          { value: "TPMaglaj", displayValue: "TP Maglaj" },
          { value: "TPSarajevo", displayValue: "TP Sarajevo" },
          { value: "TPSrebrenik", displayValue: "TP Srebrenik" },
          { value: "TPTuzla", displayValue: "TP Tuzla" },
          { value: "TPVisoko", displayValue: "TP Visoko" },
          { value: "TPVitez", displayValue: "TP Vitez" },
          { value: "TPZenica", displayValue: "TPZenica" },
          { value: "TPŽivinice", displayValue: "TP Živinice" },
        ],
      },
      value: "Choose Workplace",
      validation: {
        required: true,
      },
      valid: true,
    },
    insurance: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Insurance Policy",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    time: {
      label: "FormData.time",
      elementType: "input",
      elementConfig: {
        type: "time",
      },
      value: "",

      valid: false,
      touched: false,
    },

    carType: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "personally", displayValue: "Personally Car" },
          { value: "official", displayValue: "Official Car" },
          { value: "motorbike", displayValue: "MotorBike" },
          { value: "truck", displayValue: "Truck" },
        ],
      },
      value: "Personally Car",
      validation: {
        required: true,
      },
      valid: true,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const applyHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in Form) {
      formData[formElementIdentifier] = Form[formElementIdentifier].value;
    }
    const Data = {
      applyData: formData,
      userId: props.userId,
    };

    props.onApply(Data, props.token);
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(Form[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        Form[inputIdentifier].validation
      ),
      touched: true,
    });
    const updatedForm = updateObject(Form, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    setForm(updatedForm);
    setFormIsValid(formIsValid);
  };

  const formElementsArray = [];
  for (let key in Form) {
    formElementsArray.push({
      id: key,
      config: Form[key],
    });
  }
  let form = (
    <form onSubmit={applyHandler}>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          label={props.t(formElement.config.label)}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
        />
      ))}
      <Button btnType="Success" disabled={!formIsValid}>
        {props.t("DataForm.sa")}
      </Button>
    </form>
  );
  if (props.loading) {
    form = <Spinner />;
  }
  let message = "";
  if (props.message) {
    message = (
      <div>
        <h4 className={classes.Message}>{props.t("DataForm.SuccApp")}</h4>
      </div>
    );
  }

  console.log("render***");
  return (
    <Fragment>
      {props.isAuthenticated ? (
        <div className={classes.InspectionData}>
          <Logo />
          <h4>{props.t("DataForm.Instruction")}</h4>
          {props.message ? message : form}
        </div>
      ) : (
        <h1 className={classes.RedirectMessage}>
          {props.t("DataForm.AuthMess")}
          <br />
          <a href="/auth">CLICK HERE!</a>
        </h1>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.apply.message,
    loading: state.apply.loading,
    token: state.auth.token,
    userId: state.auth.userId,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onApply: (applyData, token) =>
      dispatch(actions.applyInspectionData(applyData, token)),
  };
};

export default withTranslation()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withErrorHandler(InspectionData, axios))
);
