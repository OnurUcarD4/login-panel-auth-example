import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "redux/actions/Auth";
import Form from "./LoginPanel-Components/Form";
import FormHeader from "./LoginPanel-Components/FormHeader";
import "./LoginPanel.css";

const LoginPanel = (props) => {
  const { signIn, token } = props;
  let history = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const mail = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    signIn(mail, pass);
  };

  useEffect(() => {
    if (token !== null) {
      history("/");
    }
  });

  return (
    <div className="login-panel ">
      <FormHeader />
      <Form submitHandler={submitHandler} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { token } = auth;
  return { token };
};

const mapDispatchToProps = {
  signIn,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);
