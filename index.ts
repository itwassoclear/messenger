import "./src/index.less";

import LoginPage from "./src/pages/Login";
import RegistrationPage from "./src/pages/Registration";
import Error404 from "./src/pages/Error404";
import Error500 from "./src/pages/Error500";
import ChatsPage from "./src/pages/Chats";
import ProfilePage from "./src/pages/Profile";
import Router from "./src/utils/Router";

document.addEventListener("DOMContentLoaded", () => {
  Router.use("/", LoginPage)
    .use("/sign-up", RegistrationPage)
    .use("/messenger", ChatsPage)
    .use("/settings", ProfilePage)
    .use("/error-404", Error404)
    .use("/error-500", Error500);

  Router.start();
});
