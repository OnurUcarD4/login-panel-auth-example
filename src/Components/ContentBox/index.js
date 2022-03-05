import React from "react";
import { connect } from "react-redux";
import "./index.css";

const ContentBox = ({ dark, children }) => {
  return (
    <div className={`${dark ? "bg-primary" : "bg-secondary"} content-box`}>
      {children}
    </div>
  );
};

const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return {
    dark,
  };
};

export default connect(mapStateToProps)(ContentBox);
