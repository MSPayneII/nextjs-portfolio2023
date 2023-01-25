import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../context";
import Link from "next/link";
import { useRouter } from "next/router";

const Submenu = () => {
  const router = useRouter();
  const {
    isSubmenuOpen,
    location,
    page: { links },
  } = useGlobalContext();

  const [columns, setColumns] = useState("col-1");

  const container = useRef(null);
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <nav className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, label, category } = link;
          return (
            <Link
              href={url}
              className={router.pathname === { url } ? "link active" : "link"}
              key={index}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Submenu;
