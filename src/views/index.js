import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "layout/app-layout";
import AuthLayout from "layout/auth-layout";
function RouteInterceptor({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/auth" replace />;
}

const Views = ({ token }) => {
  return (
    <>
      <Routes>
        <Route path={`/auth/*`} element={<AuthLayout />} />
        <Route
          path="/*"
          element={
            <RouteInterceptor isAuthenticated={token} element={<AppLayout />} />
          }
        ></Route>
      </Routes>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { token } = auth;
  return { token };
};

export default connect(mapStateToProps)(Views);
