import React from "react";
import { connect } from "react-redux";

const LoginButton = ({ dark }) => {
  return (
    <>
      <button
        type="submit"
        className={` ${
          dark ? "btn-gradient" : "btn-gradient-bright"
        } submit-button`}
      >
        <i className="fa-solid fa-right-to-bracket"></i> LOGIN
      </button>
    </>
  );
};
const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return { dark };
};

export default connect(mapStateToProps)(LoginButton);
