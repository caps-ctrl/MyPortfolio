import { Suspense, lazy } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import RootLayout from "./Layout/RootLayout";
import Docs from "./pages/DocsPage";

// Lazy load stron
const Home = lazy(() => import("./pages/Home"));

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ path: "/", element: <Home /> },{
        path:"docs",
        element:<Docs/>
      }],
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
