import React, { useState } from "react";

import { updateObject, checkValidity } from "../../shared/utility";
import Spinner from "../../components/UI/Spinner/Spinner";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import classes from "./Auth.module.css";
import Logo from "../../components/Logo/Logo";
import { Redirect } from "react-router";

import { withTranslation } from "react-i18next";

const Auth = (props) => {
  const [controls, setControls] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Mail Address",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });
  const [isSignup, setIsSignup] = useState(true);

  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
    });
  }
  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation
        ),
        touched: true,
      }),
    });
    setControls(updatedControls);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(controls.email.value, controls.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  if (props.loading) {
    form = <Spinner />;
  }
  let errorMessage = null;

  if (props.error) {
    errorMessage = <p className={classes.Error}>{props.error.message}</p>;
  }

  return (
    <div className={classes.Auth}>
      <form onSubmit={submitHandler}>
        <Logo />
        <h4>{props.t("DataForm.Instruction")}</h4>
        {errorMessage}
        {form}
        <Button btnType="Success">{props.t("DataForm.Submit")}</Button>
      </form>
      <Button clicked={switchAuthModeHandler} btnType="Default">
        {props.t("DataForm.Switch")}
        {isSignup ? props.t("DataForm.Switch1") : props.t("DataForm.Switch2")}
      </Button>
      {props.isAuthenticated ? <Redirect to="/Home" /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Auth)
);
