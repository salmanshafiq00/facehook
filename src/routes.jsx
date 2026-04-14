import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomePage
  },
  {
    path: "/login",
    Component: LoginPage
  },
  {
    path: "/register",
    Component: RegisterPage
  },
  {
    path: "/profile",
    Component: ProfilePage  
  },
  {
    path: "*",
    Component: NotFoundPage
  }
]);

export default routes;