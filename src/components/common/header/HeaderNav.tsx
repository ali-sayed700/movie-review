import { NavLink } from "react-router-dom";
import style from "./styles.module.css";
const { headNav } = style;
interface IHeaderNav {
  link: { title: string; path: string };
  showBg: boolean;
}

const HeaderNav = ({ link, showBg }: IHeaderNav) => {
  return (
    <li className={`${headNav}`}>
      <NavLink className={`${showBg && "text-dark"}`} to={link.path}>
        {link.title}
      </NavLink>
    </li>
  );
};

export default HeaderNav;
