import React from "react";
import { connect } from "react-redux";
import { setNotificationOptions } from "redux/actions/notification";

const ForgotButton = ({ dark, setNotificationOptions }) => {
  const buttonHandler = () => {
    setTimeout(() => {
      const option2 = {
        isVisible: false,
      };
      setNotificationOptions(option2);
    }, 3000);
    const option = {
      isVisible: true,
      error: false,
      message: "Password reset mail sent. Please check your mail adress.",
      icon: "fa-solid fa-circle-check",
    };
    setNotificationOptions(option);
  };
  return (
    <>
      <button
        onClick={buttonHandler}
        className={`${
          dark
            ? "border-gray-400 text-gray-400"
            : "border-blue-400 text-blue-400 "
        } forgot-button`}
      >
        <i className="fa-solid fa-envelope"></i> Request Password Reset
      </button>
    </>
  );
};

const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return { dark };
};

const mapDispatchToProps = {
  setNotificationOptions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotButton);
