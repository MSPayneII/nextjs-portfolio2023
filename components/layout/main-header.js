import React from "react";
import MobileNavigation from "../navigation/mobile-navigation";
import MainNavigation from "../navigation/main-navigation";
import Submenu from "../navigation/submenu";

const MainHeader = () => {
  return (
    <header className="header">
      <MobileNavigation />
      <Submenu />
      <MainNavigation />
    </header>
  );
};

export default MainHeader;
