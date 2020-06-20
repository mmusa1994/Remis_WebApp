import React, { useState } from "react";
import { connect } from "react-redux";

import Logo from "../../components/Logo/Logo";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./MailForm.module.css";
import axios from "../../axios-order";
import Input from "../../components/UI/Input/Input";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";

import { withTranslation } from "react-i18next";

const MailForm = (props) => {
  const [Form, setForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Full Name",
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
        placeholder: "Your City",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    emailType: {
      label: "FormData.mailType",
      elementType: "select",
      elementConfig: {
        options: [
          { value: "information", displayValue: "Information" },
          { value: "suggestion", displayValue: "Suggestion" },
          { value: "complaint", displayValue: "Complaint" },
          { value: "for meeting", displayValue: "For Meeting" },
        ],
      },
      value: "Information",
      validation: {
        required: true,
      },
      valid: true,
    },
    text: {
      elementType: "textarea",
      elementConfig: {
        type: "text",
        placeholder: "Write your message here",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const mailHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in Form) {
      formData[formElementIdentifier] = Form[formElementIdentifier].value;
    }
    const Data = {
      mailData: formData,
      userId: props.userId,
    };

    props.onMail(Data, props.token);
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
    <form onSubmit={mailHandler}>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          label={props.t(formElement.config.label)}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
        />
      ))}
      <Button btnType="Success" disabled={!formIsValid}>
        {props.t("DataForm.sb")}
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
        <h4 className={classes.Message}>{props.t("DataForm.SuccMess")}</h4>
      </div>
    );
  }

  return (
    <div className={classes.MailForm}>
      <Logo />
      <h4>{props.t("DataForm.Instruction")}</h4>
      {props.message ? message : form}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.mail.message,
    loading: state.mail.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMail: (mailData, token) => dispatch(actions.mailData(mailData, token)),
  };
};

export default withTranslation()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withErrorHandler(MailForm, axios))
);
