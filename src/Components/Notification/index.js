import React from "react";
import { connect } from "react-redux";
import "./notification.css";
const Notification = (props) => {
  const { notificationOptions } = props;

  return (
    <div
      className={`notify ${
        notificationOptions.isVisible ? "fadeIn" : "fadeOut"
      } ${notificationOptions.error ? "bg-red-300" : "bg-white"}  `}
    >
      <i
        className={`${notificationOptions.icon} ${
          notificationOptions.error ? "text-red-500" : "text-green-500"
        } text-2xl mr-2 `}
      ></i>{" "}
      {notificationOptions.message}
    </div>
  );
};
const mapStateToProps = ({ notification }) => {
  const { notificationOptions } = notification;
  return {
    notificationOptions,
  };
};

export default connect(mapStateToProps)(Notification);
