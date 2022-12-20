import "./src/index.less";

import LoginPage from "./src/pages/Login";
import RegistrationPage from "./src/pages/Registration";
import Error404 from "./src/pages/Error404";
import Error500 from "./src/pages/Error500";
import ChatsPage from "./src/pages/Chats";
import ProfilePage from "./src/pages/Profile";
import Router from "./src/utils/Router";
import AuthController from "./src/controllers/AuthController";

enum Routes {
  Index = "/",
  SignUp = "/sign-up",
  Chat = "/messenger",
  Profile = "/settings",
  Error404 = "/error-404",
  Error500 = "/error-500",
}

document.addEventListener("DOMContentLoaded", async () => {
  Router.use(Routes.Index, LoginPage)
    .use(Routes.SignUp, RegistrationPage)
    .use(Routes.Chat, ChatsPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Error404, Error404)
    .use(Routes.Error500, Error500);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.SignUp:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Chat);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

  // Router.start();
});
