import React from "react";
import { connect } from "react-redux";
import { signOutSuccess } from "redux/actions/Auth";

const ButtonLogout = ({ dark, signOutSuccess }) => {
  return (
    <>
      <button
        onClick={() => signOutSuccess()}
        className={`${
          dark
            ? "border-gray-400 text-gray-400"
            : "border-blue-400 text-blue-400 "
        } sign-out-button`}
      >
        <i className="fa-solid fa-right-from-bracket"></i> Logout
      </button>
    </>
  );
};
const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return {
    dark,
  };
};
const mapDispatchToProps = {
  signOutSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLogout);
