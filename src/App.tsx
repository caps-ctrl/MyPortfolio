import { Suspense, lazy } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
const RootLayout = lazy(() => import("./Layout/RootLayout"));
const Home = lazy(() => import("./pages/Home"));
const Docs = lazy(() => import("./pages/DocsPage"));

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "docs",
          element: <Docs />,
        },
      ],
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
