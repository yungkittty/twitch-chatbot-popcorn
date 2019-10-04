import React from "react";
import HeaderContainer from "./components/header-container";
import HeaderImage from "./components/header-image";
import HeaderTitle from "./components/header-title";

const AppHeader = () => (
  <HeaderContainer>
    <HeaderImage />
    <HeaderTitle>
      {/* eslint-disable-line */}
      Chat watcher
    </HeaderTitle>
  </HeaderContainer>
);

export default AppHeader;
