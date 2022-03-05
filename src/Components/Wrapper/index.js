import ContentBox from "Components/ContentBox";
import Notification from "Components/Notification";
import React from "react";
import { connect } from "react-redux";

const Wrapper = ({ dark, children }) => {
  return (
    <div className="">
      <div
        className={`${dark ? "bg-image" : "bg-bright-image"} duration-300`}
      ></div>
      <Notification />
      <div className="container">
        <div className="content">
          <ContentBox>{children}</ContentBox>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return {
    dark,
  };
};

export default connect(mapStateToProps)(Wrapper);
