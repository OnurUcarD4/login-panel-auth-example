import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ForgotButton from "./ForgottenPass-Components/ForgotButton";
import HeaderText from "./ForgottenPass-Components/HeaderText";
import MailInput from "./ForgottenPass-Components/MailInput";
import "./ForgottenPass.css";

const ForgottenPass = ({ dark }) => {
  return (
    <div>
      <div className="login-panel">
        <HeaderText />
        <form className="gap-2 p-2 items-center">
          <MailInput />
          <ForgotButton />
          <Link to="/auth/login">
            <span className="back-sign">Back to sign in</span>
          </Link>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return { dark };
};

export default connect(mapStateToProps)(ForgottenPass);
