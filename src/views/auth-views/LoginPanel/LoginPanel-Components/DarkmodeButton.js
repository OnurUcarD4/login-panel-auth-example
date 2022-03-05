import React from "react";
import { connect } from "react-redux";
import { setDarkMode } from "redux/actions/dark-mode";

const DarkmodeButton = ({ setDarkMode, dark }) => {
  return (
    <>
      <button
        onClick={() => setDarkMode(!dark)}
        className={` ${
          dark ? "bg-slate-800 border-gray-700" : "bg-[#407cd3] border-blue-600"
        }  darkmode-button`}
      >
        <i className={dark ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
      </button>
    </>
  );
};
const mapStateToProps = ({ darkmode }) => {
  const { dark } = darkmode;
  return { dark };
};

const mapDispatchToProps = {
  setDarkMode,
};
export default connect(mapStateToProps, mapDispatchToProps)(DarkmodeButton);
