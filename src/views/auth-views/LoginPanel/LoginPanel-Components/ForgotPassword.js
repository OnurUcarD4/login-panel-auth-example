import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ForgotPassword = ({ dark }) => {
  return (
    <div className="forgot-wrapper">
      <Link to="/auth/forgot-password">
        <span
          className={`${
            dark ? "text-gray-400" : "text-white"
          } font-semibold text-xs`}
        >
          Forgotten password?
        </span>
      </Link>
    </div>
  );
};
const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return { dark };
};

export default connect(mapStateToProps)(ForgotPassword);
