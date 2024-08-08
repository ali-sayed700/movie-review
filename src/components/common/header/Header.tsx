import { useEffect, useState } from "react";
import { DarkMode } from "@components/feedback";
import { Container } from "react-bootstrap";
import { AnimatePresence } from "framer-motion";
import throttle from "lodash.throttle";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

import HeaderNav from "./HeaderNav";
import { useTheme } from "@hooks/index";
import { THROTTLE_DELAY } from "@utils/config";
import { navLinks } from "@data/index";
import Logo from "../logo/Logo";

import style from "./styles.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { GlobalModalContext } from "@hooks/context/GlobalContext";
const { navlink, ulNav, butn, headerDark, headerLight } = style;

const Header = () => {
  const { openMenu, theme, showThemeOptions } = useTheme();
  const { setShowSidebar } = GlobalModalContext();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleBackgroundChange = () => {
      const body = document.body;
      if (
        window.scrollY > 0 ||
        (body.classList.contains("no-scroll") &&
          parseFloat(body.style.top) * -1 > 0)
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    const throttledHandleBackgroundChange = throttle(
      handleBackgroundChange,
      THROTTLE_DELAY
    );
    window.addEventListener("scroll", throttledHandleBackgroundChange);

    return () => {
      window.removeEventListener("scroll", throttledHandleBackgroundChange);
    };
  }, []);

  const isTheme = isActive && theme === "Light";
  const ThemeMode = isActive && (theme === "Dark" ? headerDark : headerLight);
  return (
    <header className={`${navlink} ${ThemeMode} `}>
      <Container>
        <nav className="d-flex justify-content-between align-items-center ">
          <Logo className={isTheme ? "text-dark" : "text-light"} />
          <div className=" gap-3 align-items-center d-none d-md-flex">
            <ul className={`${ulNav} `}>
              {navLinks.map((link: { title: string; path: string }) => {
                return (
                  <HeaderNav key={link.title} link={link} showBg={isTheme} />
                );
              })}
            </ul>
            <div className="d-none d-md-block position-relative">
              <button
                className={`btn ${butn} ${isTheme && "darkBtn"} `}
                onClick={openMenu}
              >
                {theme === "Dark" ? <BsMoonStarsFill /> : <FiSun />}
              </button>
              <AnimatePresence>
                {showThemeOptions && <DarkMode />}
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            name="menu"
            onClick={() => setShowSidebar(true)}
            className={`btn  fs-3 text-light  d-md-none ${
              isActive ? "textColor" : "text-light"
            }`}
          >
            <AiOutlineMenu />
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
