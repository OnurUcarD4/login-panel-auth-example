import React, { lazy, Suspense } from "react";
import { Routes, Route, Redirect, Navigate } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));

export const AuthViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AuthViews;
