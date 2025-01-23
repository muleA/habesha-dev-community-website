import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { router } from "./router";

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
}; 