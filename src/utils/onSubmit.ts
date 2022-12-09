import { pattern } from "./pattern";
import Router from "./Router";

export function onSubmit(e: Event) {
  e.preventDefault();
  const inputs = document.querySelectorAll(".validated-input");
  const windowError: HTMLElement | null =
    document.querySelector(".window-error");
  windowError!.textContent = "fill in the form correctly";

  const isError: boolean = Array.from(inputs).some((input: Element) => {
    const inputWithType = input as HTMLInputElement | null;
    const value = inputWithType!.value;
    const name = inputWithType!.name;

    if (name === "message") {
      windowError!.textContent = "message is empty";
    }
    return !pattern[name].regExp.test(value);
  });

  if (isError) {
    windowError!.style.display = "block";
    return;
  }

  windowError!.style.display = "none";
  const values: Record<string, string> = {};
  inputs.forEach((input) => {
    const inputWithType = input as HTMLInputElement | null;
    const value = inputWithType!.value;
    const name = inputWithType!.name;
    values[name] = value;
  });

  console.log(values); // вывод в консоль данных из инпутов

  // и сразу переход на нужную страницу, если всё ок
  const button = e.target as HTMLElement;
  if (button.innerText === "Log in" || button.innerText === "Register") {
    Router.go("/messenger");
  } else if (button.innerText === "Save") {
    // Router.go("/settings");
  }
}
