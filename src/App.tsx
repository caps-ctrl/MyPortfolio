
import { Suspense } from "react";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  return <Suspense fallback={<LoadingScreen/>}><Home /></Suspense>;
};

export default App;
