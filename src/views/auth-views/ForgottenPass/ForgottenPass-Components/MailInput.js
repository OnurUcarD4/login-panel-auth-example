import React from "react";
import { connect } from "react-redux";

const MailInput = ({ dark }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className={`${dark ? "dark" : "bright"} relative`}>
          <input type="email" required placeholder="E-Mail" />
          <i
            className={`${
              dark ? "text-gray-400" : "text-blue-400"
            } fa-solid fa-user input-user `}
          ></i>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return { dark };
};

export default connect(mapStateToProps)(MailInput);
