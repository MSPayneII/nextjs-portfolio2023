import React, { useState, useContext } from "react";
import { subLinks } from "./data/nav-links";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const [screenSize, setScreenSize] = useState(getWindowWidth());

  const checkSize = () => {
    setScreenSize(getWindowWidth());
  };

  function getWindowWidth() {
    const hasWindow = typeof window !== "undefined";
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  const openMenu = () => {
    console.log("menu open");
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openSubmenu = (label, coordinates) => {
    const page = subLinks.find((link) => link.page === label);

    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        openMenu,
        closeMenu,
        screenSize,
        checkSize,
        page,
        location,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
