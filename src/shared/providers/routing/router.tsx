import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/shared/components/Layout/MainLayout";
import { HomePage } from "@/features/home/pages/HomePage";
import { PostsPage } from "@/features/posts/pages/PostsPage";
import { ROUTES } from "./routes";
import { AboutPage } from "@/features/about/components/AboutPage";
import { LoginPage } from "@/features/auth/components/LoginPage";
import { NotFoundPage } from "@/features/error/pages/NotFoundPage";
import { ProfilePage } from "@/features/profile/components/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.POSTS,
        element: <PostsPage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <ProfilePage />,
      }
   
   
    ],
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]); 