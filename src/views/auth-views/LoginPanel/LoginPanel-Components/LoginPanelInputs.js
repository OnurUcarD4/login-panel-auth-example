import React from "react";
import { connect } from "react-redux";

const LoginPanelInputs = ({ dark }) => {
  return (
    <div className="login-form-wrapper">
      <div className={`${dark ? "dark" : "bright"} relative duration-300`}>
        <input id="email" type="email" required placeholder="E-Mail" />
        <i
          className={`${
            dark ? "text-gray-400" : "text-blue-400"
          } fa-solid fa-user input-user`}
        ></i>
      </div>

      <div className={`${dark ? "dark" : "bright"} relative w-full`}>
        <input id="pass" type="password" required placeholder="Password" />
        <i
          className={`${
            dark ? "text-gray-400" : "text-blue-400"
          } fa-solid fa-key input-pass`}
        ></i>
      </div>
    </div>
  );
};

const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return { dark };
};

export default connect(mapStateToProps)(LoginPanelInputs);
