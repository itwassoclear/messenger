interface IPattern {
  error: string;
  regExp: RegExp;
}

export const pattern: Record<string, IPattern> = {
  login: {
    error: "3-20 characters",
    regExp: /(?!^\d+$)^[a-zA-Z0-9_-]{3,20}$/,
  },
  email: {
    error: "please use any@any.any",
    regExp: /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})$/,
  },
  first_name: {
    error: "3-15 characters from capital letter",
    regExp: /^[А-ЯA-Z]{1}[а-яa-z0-9_-]{3,15}$/,
  },
  second_name: {
    error: "3-15 characters from capital letter",
    regExp: /^[А-ЯA-Z]{1}[а-яa-z0-9_-]{3,15}$/,
  },
  phone: {
    error: "10-15 numbers",
    regExp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/,
  },
  diaplay_name: {
    error: "10-12 characters",
    regExp: /^[а-яa-zА-ЯA-Z0-9_-]{3,15}$/,
  },
  password: {
    error: "8-40 characters (at least 1 number, 1 capital)",
    regExp: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40})$/,
  },
  message: {
    error: "write something",
    regExp: /(.|\s)*\S(.|\s)*$/,
  },
  search: {
    error: "write something",
    regExp: /^/,
  },
  avatar: {
    error: "you need to select a file",
    regExp: /(.|\s)*\S(.|\s)*$/,
  },
};
