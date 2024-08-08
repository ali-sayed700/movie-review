import LogoImg from "@assets/svg/logo.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const { logo } = styles;

interface logoProps {
  className?: string;
}

const Logo = ({ className }: logoProps) => {
  return (
    <Link to="/" className={logo}>
      <div className="d-flex gap-2 align-items-center ">
        <img src={LogoImg} alt="logo" />
        <span className={`rounded ${className} `}>TMovies</span>
      </div>
    </Link>
  );
};

export default Logo;
