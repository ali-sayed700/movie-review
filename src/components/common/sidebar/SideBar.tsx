import {
  GlobalModalContext,
  useMotion,
  useOnClickOutside,
  useTheme,
} from "@hooks/index";
import { AnimatePresence, motion } from "framer-motion";
import { Logo, Overlay } from "@components/common";
import SideBarNavlink from "./sideBarNavlink";
import { INavLink } from "@types";
import { navLinks, themeOptions } from "@data/index";
import { useCallback } from "react";
import SideBarTheme from "./sideBarTheme";
import styles from "./styles.module.css";
const { sideNav } = styles;

const SideBar = () => {
  const { theme } = useTheme();
  const { showSidebar, setShowSidebar } = GlobalModalContext();
  const closeSideBar = useCallback(() => {
    setShowSidebar(false);
  }, [setShowSidebar]);
  const { slideIn } = useMotion();
  const { ref } = useOnClickOutside({
    action: closeSideBar,
    enable: showSidebar,
  });

  return (
    <AnimatePresence>
      {showSidebar && (
        <Overlay>
          <motion.nav
            ref={ref}
            variants={slideIn("right", "tween", 0, 0.3)}
            className={`${sideNav} ${
              theme === "Dark" ? "dark-glass" : "light-glass"
            } textColor shadow `}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="d-flex aligns-items-center justify-content-center  ">
              <Logo className="textColor" />
            </div>

            <div className="p-3 pt-sm-5 h-100 d-flex flex-column">
              <h3 className="fs-5 fw-bold text-light textColor textColor">
                Menu
              </h3>
              <ul className="d-flex flex-column pt-1 gap-2 text-capitalize fs-6 ">
                {navLinks.map((link: INavLink) => {
                  return (
                    <SideBarNavlink
                      link={link}
                      closeSideBar={closeSideBar}
                      key={link.title}
                    />
                  );
                })}
              </ul>

              <h3 className="fs-5 fw-bold  pt-4 text-light textColor">Theme</h3>
              <ul className="d-flex flex-column pt-1 gap-2 text-capitalize fs-6 py-3 ">
                {themeOptions.map((theme) => {
                  return <SideBarTheme theme={theme} key={theme.title} />;
                })}
              </ul>

              <p className="xs:text-[12px] text-[11.75px] mt-auto sm:mb-6 mb-[20px] text-center font-nunito dark:text-gray-200">
                &copy; 2023 by tMovies. All right reserved.
              </p>
            </div>
          </motion.nav>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
