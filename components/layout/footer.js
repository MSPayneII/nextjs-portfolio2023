import { useEffect } from "react";
import Image from "next/image";
import { FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import { scrollBackToTop } from "../../helpers/helpers";
import SmallLogo from "../../public/assets/logo/small-logo-white.svg";
import BigLogo from "../../public/assets/logo/big-logo-white.svg";

const Footer = () => {
  const { screenSize, checkSize } = useGlobalContext();

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [checkSize]);

  return (
    <footer className="footer">
      <div className="footer-center">
        <Image
          src={screenSize > 1024 ? BigLogo : SmallLogo}
          alt="Michael S. Payne II"
        />
        <button className="back-top-link" onClick={scrollBackToTop}>
          Back to top
          <FaChevronUp className="footer-icon" />
        </button>

        <p className="footer-copy">Coded with Next, 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
