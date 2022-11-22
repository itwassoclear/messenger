// import template from "./hello.hbs";
// import button from "./button.hbs";
// import Handlebars = require("handlebars/dist/handlebars.runtime");
import "./src/index.less";

// import profileTemplate from "./profile.hbs";

// const PAGES: any = {
//   home: template,
//   profile: profileTemplate,
// };

import { renderDOM } from "./src/utils/renderDOM";
import LoginPage from "./src/pages/Login";
import RegistrationPage from "./src/pages/Registration";
import Error404 from "./src/pages/Error404";
import Error500 from "./src/pages/Error500";
import ChatsPage from "./src/pages/Chats";
import { ProfilePage } from "./src/pages/Profile/profile";

// function renderPage(name: any): void {
//   const root: any = document.querySelector("#app");
//   const template = PAGES[name];

//   const html = template();

//   root.innerHTML = html;
// }

// window.renderPage = renderPage;

document.addEventListener("DOMContentLoaded", () => {
  // Handlebars.registerPartial("button", button);
  // const html = template({ username: "Masha" });

  // const root = document.querySelector("#app")!;

  // const button = new Button({
  //   label: "Click",
  //   events: {
  //     click: () => console.log("kek"),
  //   },
  // });

  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();
  const error404 = new Error404();
  const error500 = new Error500();
  const chatsPage = new ChatsPage();
  const profilePage = new ProfilePage();
  renderDOM("#app", profilePage);

  // const path = document.location.pathname;

  // switch (path) {
  //   case "/":
  //     break;
  //   case "/auth":
  //     renderPage(new SignIn({ title: "Вход" }));
  //     break;
  // }
});
