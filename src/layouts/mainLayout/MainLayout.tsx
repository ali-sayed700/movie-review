import { Header } from "@components/common";
import { ModalVideo } from "@components/common";
import { Footer } from "@components/common";
import { SideBar } from "@components/common";

import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
const { container } = styles;
const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={container}>
      <Header />
      <SideBar />
      <ModalVideo />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
