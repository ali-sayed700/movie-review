import { motion } from "framer-motion";
import { useMotion } from "@hooks/motions/UseMotion";
import { useOnClickOutside } from "@hooks/useClickOutside/useClickOutSide";
import { useTheme } from "@hooks/context/themeContext";
import { useOnKeyPress } from "@hooks/useOnpress/useOnpress";
import { themeOptions } from "@data/index";
import style from "./styles.module.css";

const { dropdown } = style;

const DarkMode = () => {
  const { theme, setTheme, checkSystemTheme, setShowThemeOptions, closeMenu } =
    useTheme();

  // for animation
  const { zoomIn } = useMotion();

  /*handle click for  hide dark mode menu*/
  const { ref } = useOnClickOutside({
    action: closeMenu,
  });
  useOnKeyPress({
    action: closeMenu,
    key: "Escape",
  });
  /*handle click for hide dark mode menu*/
  const changeTheme = (theme: string) => {
    if (theme === "System") {
      checkSystemTheme();
    } else {
      setTheme(theme);
    }
    setShowThemeOptions(false);
  };
  return (
    <>
      <motion.ul
        className={dropdown}
        ref={ref}
        variants={zoomIn(0.9, 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        style={{
          background: `${theme === "Light" ? "#FAFAFA" : "rgba(0,0,0,0.7)"}`,
        }}
      >
        {themeOptions.map((icon, index) => (
          <li key={index}>
            <button
              className={`btn ${theme === "Light" && "text-dark"}`}
              onClick={() => {
                changeTheme(icon.title);
              }}
            >
              {<icon.icon />}
              <span>{icon.title}</span>
            </button>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default DarkMode;
