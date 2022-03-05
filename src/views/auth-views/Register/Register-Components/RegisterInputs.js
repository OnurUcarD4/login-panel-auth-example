import React from "react";
import { connect } from "react-redux";

const RegisterInputs = ({ dark }) => {
  return (
    <div className="form-wrap">
      <div className={`${dark ? "dark" : "bright"} relative duration-300`}>
        <input id="register-mail" type="email" required placeholder="E-Mail" />
        <i
          className={`${
            dark ? "text-gray-400" : "text-blue-400"
          } fa-solid fa-user input-user`}
        ></i>
      </div>

      <div className={`${dark ? "dark" : "bright"} input-wrapper`}>
        <input
          id="register-pass"
          type="password"
          required
          placeholder="Password"
        />
        <i
          className={`${
            dark ? "text-gray-400" : "text-blue-400"
          } fa-solid fa-key password-wrapper`}
        ></i>
      </div>
    </div>
  );
};
const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;

  return { dark };
};

export default connect(mapStateToProps)(RegisterInputs);
