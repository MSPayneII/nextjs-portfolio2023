import React, { useEffect } from "react";
import Footer from "./footer";
import MainHeader from "./main-header";
import { useGlobalContext } from "../../context";

const Layout = ({ children }) => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <div className="page-container">
        <MainHeader />
        <main onMouseOver={closeSubmenu}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
