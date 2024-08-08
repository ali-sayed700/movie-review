/* eslint-disable react-refresh/only-export-components */
import { getTheme, saveTheme } from "@utils/helper";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const context = createContext({
  checkSystemTheme: () => {},
  setShowThemeOptions: (_prev: boolean): void => {},
  showThemeOptions: false,
  openMenu: () => {},
  closeMenu: () => {},
  setTheme: (_prev: string): void => {},
  theme: "Dark",
});

interface Props {
  children: React.ReactNode;
}
const initialTheme = getTheme();

const ThemeProvider = ({ children }: Props) => {
  const [showThemeOptions, setShowThemeOptions] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(initialTheme);

  const checkSystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  const checkTheme = useCallback(() => {
    if (initialTheme) return;
    setTheme("Dark");
    // checkSystemTheme();
  }, []);

  useEffect(() => {
    checkTheme();
  }, [checkTheme]);

  useEffect(() => {
    if (theme === "Light") {
      document.documentElement.classList.add("light");
      saveTheme("Light");
    } else if (theme === "Dark") {
      document.documentElement.classList.remove("light");
      saveTheme("Dark");
    }
  }, [theme]);
  const openMenu = useCallback(() => {
    setShowThemeOptions(true);
  }, []);

  const closeMenu = useCallback(() => {
    setShowThemeOptions(false);
  }, []);

  return (
    <context.Provider
      value={{
        showThemeOptions,
        openMenu,
        closeMenu,
        setTheme,
        theme,
        checkSystemTheme,
        setShowThemeOptions,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  return useContext(context);
};
