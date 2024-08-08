import { INavLink } from "@types";
import { NavLink } from "react-router-dom";

interface SidebarNavItemProps {
  link: INavLink;
  closeSideBar: () => void;
}
const SideBarNavlink = ({ link, closeSideBar }: SidebarNavItemProps) => {
  return (
    <li>
      <NavLink
        to={link.path}
        onClick={closeSideBar}
        className="d-flex align-items-center px-3  gap-2 textColor text-light"
      >
        {<link.icon className="" />}
        <span>{link.title}</span>
      </NavLink>
    </li>
  );
};

export default SideBarNavlink;
