import { RouterProvider } from "react-router-dom";
import { router } from "./shared/providers/routing/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
