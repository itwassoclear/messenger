import "./src/index.less";

import { renderDOM } from "./src/utils/renderDOM";
import LoginPage from "./src/pages/Login";
import RegistrationPage from "./src/pages/Registration";
import Error404 from "./src/pages/Error404";
import Error500 from "./src/pages/Error500";
import ChatsPage from "./src/pages/Chats";
import ProfilePage from "./src/pages/Profile";
import EditProfilePage from "./src/pages/EditProfile";
import ChangePasswordPage from "./src/pages/ChangePassword";

document.addEventListener("DOMContentLoaded", () => {
  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();
  const error404 = new Error404();
  const error500 = new Error500();
  const chatsPage = new ChatsPage();
  const profilePage = new ProfilePage();
  const editProfilePage = new EditProfilePage();
  const changePasswordPage = new ChangePasswordPage();

  function renderPage(page: any): void {
    renderDOM("#app", page);
  }

  renderDOM("#app", loginPage);

  const path = document.location.pathname;

  switch (path) {
    case "/":
      break;

    case "/Login/login.hbs":
      renderPage(loginPage);
      break;

    case "/Registration/registration.hbs":
      renderPage(registrationPage);
      break;

    case "/Error404/error404.hbs":
      renderPage(error404);
      break;

    case "/Error500/error500.hbs":
      renderPage(error500);
      break;

    case "/Chats/chats.hbs":
      renderPage(chatsPage);
      break;

    case "/Profile/profile.hbs":
      renderPage(profilePage);
      break;

    case "/EditProfile/edit-profile.hbs":
      renderPage(editProfilePage);
      break;

    case "/ChangePassword/change-pass.hbs":
      renderPage(changePasswordPage);
      break;

    default:
      renderPage(loginPage);
  }
});
