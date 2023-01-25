import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context";
import { AiOutlineClose } from "react-icons/ai";
import { mobileLinks } from "../../data/nav-links";

const MobileNavigation = () => {
  const router = useRouter();
  const { screenSize, checkSize, isMenuOpen, closeMenu } = useGlobalContext();

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    if (screenSize > 767) {
      closeMenu();
    }
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [screenSize, checkSize, closeMenu]);

  return (
    <div
      className={`${
        isMenuOpen ? "mobile-nav-overlay show" : "mobile-nav-overlay"
      }`}
    >
      <div className="mobile-nav-container">
        <header className="mobile-nav-header">
          <h1 className="mobile-nav-title">Menu</h1>
          <button className="close-btn" onClick={closeMenu}>
            Close <AiOutlineClose className="menu-icon" />
          </button>
        </header>
        <div className="mobile-nav-divider-line"></div>
        <nav>
          <ul className="mobile-nav-links">
            {mobileLinks.map((link) => {
              const { id, url, label } = link;
              return (
                <li key={id}>
                  <Link
                    href={url}
                    className={
                      router.pathname === { url }
                        ? "link mobile-nav-link active"
                        : "link mobile-nav-link"
                    }
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
