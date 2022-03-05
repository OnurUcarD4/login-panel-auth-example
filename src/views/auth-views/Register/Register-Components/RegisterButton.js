import React from "react";
import { connect } from "react-redux";

const RegisterButton = ({ dark }) => {
  return (
    <button
      type="submit"
      className={`${
        dark
          ? "border-gray-400 text-gray-400"
          : "border-blue-400 text-blue-400 "
      } register-button`}
    >
      <i className="fa-solid fa-user-plus"></i> REGISTER
    </button>
  );
};

const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return { dark };
};

export default connect(mapStateToProps)(RegisterButton);
