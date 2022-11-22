const PAGES: any = {
  home: template,
  profile: profileTemplate,
};

export function renderPage(name: any): void {
  // для роутинга
  const root: any = document.querySelector("#app");
  const template = PAGES[name];

  const html = template();

  root.innerHTML = html;
}

window.renderPage = renderPage;
