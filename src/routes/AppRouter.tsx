import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("../layouts/mainLayout/MainLayout"));
const Home = lazy(() => import("@pages/home/Home"));
const Category = lazy(() => import("@pages/catalog/Category"));
const Details = lazy(() => import("@pages/details/Details"));

import Error from "@pages/error/Error";
import LottieHandler from "@components/feedback/lottieHandler/LottieHandler";
import PageSuspenseFallback from "@components/feedback/pageSuspense/PageSuspense";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div style={{ marginTop: "10%" }}>
            <LottieHandler type="loading" message="Loading please wait..." />
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <Home />,
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/:category",
        element: (
          <PageSuspenseFallback>
            <Category />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/:category/:id",
        element: (
          <PageSuspenseFallback>
            <Details />
          </PageSuspenseFallback>
        ),
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
