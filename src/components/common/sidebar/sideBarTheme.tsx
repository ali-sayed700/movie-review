// interface IsideBarTheme {}

import { GlobalModalContext } from "@hooks/context/GlobalContext";
import { useTheme } from "@hooks/index";
import { ITheme } from "@types";
import { ImMobile2 } from "react-icons/im";

const SideBarTheme = ({ theme }: { theme: ITheme }) => {
  const { setTheme, checkSystemTheme } = useTheme();
  const { setShowSidebar } = GlobalModalContext();

  const { title } = theme;

  const changeTheme = () => {
    if (title === "System") {
      checkSystemTheme();
    } else {
      setTheme(title);
    }
    setShowSidebar(false);
  };
  return (
    <li>
      <button
        type="button"
        onClick={changeTheme}
        className="btn px-3 d-flex align-items-center gap-2  textColor text-light "
      >
        {theme.title === "System" ? <ImMobile2 /> : <theme.icon />}
        <span>{theme.title}</span>
      </button>
    </li>
  );
};

export default SideBarTheme;
