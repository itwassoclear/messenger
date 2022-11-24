import { pattern } from "./pattern";

export const validate = (
  event: Event,
  elem: HTMLElement,
  className: string
) => {
  const error: HTMLElement | null = elem.querySelector(className);

  const input = event.target as HTMLInputElement;
  const regExp: RegExp = pattern[input.name].regExp;
  const isValid: boolean = regExp.test(input.value);

  if (isValid) {
    if (event.type === "focusout") {
      error!.textContent = "";
    }
  } else {
    error!.textContent = pattern[input.name].error;
  }
};
