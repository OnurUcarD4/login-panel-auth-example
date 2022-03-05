import React from "react";
import ForgotPassword from "./ForgotPassword";
import LoginButton from "./LoginButton";
import LoginPanelInputs from "./LoginPanelInputs";
import RegisterButton from "./RegisterButton";

const Form = ({ submitHandler }) => {
  return (
    <>
      <form className="login-form" onSubmit={submitHandler}>
        <LoginPanelInputs />
        <ForgotPassword />
        <LoginButton />
        <RegisterButton />
      </form>
    </>
  );
};

export default Form;
