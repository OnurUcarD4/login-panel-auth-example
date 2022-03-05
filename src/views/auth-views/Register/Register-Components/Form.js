import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RegisterButton from "./RegisterButton";
import RegisterInputs from "./RegisterInputs";

const Form = ({ submitHandler, dark }) => {
  return (
    <div>
      <form onSubmit={submitHandler} className="form-wrapper">
        <RegisterInputs />
        <RegisterButton />
        <Link to="/auth/login">
          <span className="back-sign">Back to sign in</span>
        </Link>
      </form>
    </div>
  );
};
const mapStateToProps = ({ darkmode, user }) => {
  const { dark } = darkmode;
  const { userinfo } = user;

  return { dark, userinfo };
};

export default connect(mapStateToProps)(Form);
