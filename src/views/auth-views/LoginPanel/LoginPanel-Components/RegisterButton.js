import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const RegisterButton = ({ dark }) => {
  return (
    <>
      <Link to="/auth/register">
        <button
          className={`${
            dark
              ? "border-gray-400 text-gray-400"
              : "border-blue-400 text-blue-400 "
          } link-button`}
        >
          <i className="fa-solid fa-user-plus"></i> REGISTER
        </button>
      </Link>
    </>
  );
};
const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return { dark };
};

export default connect(mapStateToProps)(RegisterButton);
