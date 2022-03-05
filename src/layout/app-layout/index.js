import Wrapper from "Components/Wrapper";
import "index.css";
import React from "react";
import AppViews from "views/app-views";
import "views/auth-views/LoginPanel/LoginPanel.css";
const AppLayout = () => {
  return (
    <Wrapper>
      <AppViews />
    </Wrapper>
  );
};

export default AppLayout;
