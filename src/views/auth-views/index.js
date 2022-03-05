import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Login = React.lazy(() => import("./LoginPanel"));
const Register = React.lazy(() => import("./Register"));
const ForgotPassword = React.lazy(() => import("./ForgottenPass"));

export const AuthViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path={`login`} element={<Login />} />
        <Route path={`register`} element={<Register />} />
        <Route path={`forgot-password`} element={<ForgotPassword />} />
        <Route path="/*" element={<Navigate to="login" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AuthViews;
