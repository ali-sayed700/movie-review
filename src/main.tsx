import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
// context
import ThemeProvider from "@hooks/context/themeContext";
import GlobalContext from "@hooks/context/GlobalContext";
// redux
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { movieApi } from "@store/store";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";
import "swiper/css";
import "react-loading-skeleton/dist/skeleton.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApiProvider api={movieApi}>
    <ThemeProvider>
      <GlobalContext>
        <AppRouter />
      </GlobalContext>
    </ThemeProvider>
  </ApiProvider>
);
