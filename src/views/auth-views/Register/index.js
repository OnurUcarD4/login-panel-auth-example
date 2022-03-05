import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNotificationOptions } from "redux/actions/notification";
import { register } from "redux/actions/users";
import Form from "./Register-Components/Form";
import RegisterHeader from "./Register-Components/RegisterHeader";
import "./Register.css";

const Register = ({ register, userinfo, setNotificationOptions }) => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const mail = document.getElementById("register-mail").value;
    const pass = document.getElementById("register-pass").value;
    let userFind = userinfo.find((x) => x.mail === mail);
    setTimeout(() => {
      const option2 = {
        isVisible: false,
      };
      setNotificationOptions(option2);
    }, 3000);
    if (userFind !== undefined) {
      const option = {
        isVisible: true,
        message: "This mail already taken.",
        icon: "fa-solid fa-triangle-exclamation",
        error: true,
      };
      setNotificationOptions(option);

      return;
    }

    const user = {
      mail,
      pass,
    };
    register([...userinfo, user]);
    const option3 = {
      isVisible: true,
      message: "Successfully registered.",
      icon: "fa-solid fa-circle-check",
      error: false,
    };
    setNotificationOptions(option3);
    navigate("/auth/login");
  };

  return (
    <div className="login-panel ">
      <RegisterHeader />
      <Form submitHandler={submitHandler} />
    </div>
  );
};

const mapStateToProps = ({ darkmode, user }) => {
  const { dark } = darkmode;
  const { userinfo } = user;

  return { dark, userinfo };
};
const mapDispatchToProps = {
  register,
  setNotificationOptions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
