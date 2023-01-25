import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import SmallLogo from "../../public/assets/logo/small-logo-black.svg";
import BigLogo from "../../public/assets/logo/big-logo-black.svg";

const MainNavigation = () => {
  const router = useRouter();
  const { checkSize, screenSize, openMenu, openSubmenu, closeSubmenu } =
    useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [checkSize]);

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Image
            src={screenSize > 1024 ? BigLogo : SmallLogo}
            alt="Michael S. Payne II"
          />
          <button className="action-btn nav-toggle" onClick={openMenu}>
            Menu <AiOutlineMenu className="menu-icon" />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link
              href="/"
              className={router.pathname === "/" ? "link active" : "link"}
            >
              Home
            </Link>
          </li>
          <li>
            <button
              className="link link-btn"
              onClick={displaySubmenu}
              onMouseOver={displaySubmenu}
              onFocus={displaySubmenu}
            >
              Work
            </button>
          </li>
          <li>
            <Link
              href="/resume"
              className={router.pathname === "/resume" ? "link active" : "link"}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/contact-me"
              className={
                router.pathname === "/contact-me" ? "link active" : "link"
              }
            >
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
