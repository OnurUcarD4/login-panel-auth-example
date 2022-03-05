import React from "react";
import ButtonLogout from "./Home-Components/ButtonLogout";
import "./home.css";
const Home = () => {
  return (
    <div className="login-panel p-8">
      <div className="mt-8 mb-2">
        <span className="text-2xl font-bold text-glow test">
          You successfully signed in.
        </span>
        <ButtonLogout />
      </div>
    </div>
  );
};

export default Home;
