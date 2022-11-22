import { Block } from "../../utils/Block";
import template from "./chat.hbs";
import "./chat.less";

interface IChat {
  avatar: string;
  name: string;
  from: string;
  message: string;
  date: string;
  newMessages: string;
}

export class Chat extends Block {
  constructor(props: IChat) {
    const events = {
      click: (e: Event): void => this.onClick(e),
    };
    super({ ...props, events });
  }

  onClick = (e: Event): void => {
    const attach: any = document.querySelector(".attach");
    const attachPopup: any = document.querySelector(".attach-popup");
    const settings: any = document.querySelector(".settings");
    const settingsPopup: any = document.querySelector(".settings-popup");

    const listener = (event: any) => {
      if (event.target.dataset.type === "attach") {
        attachPopup.classList.toggle("visible");
      } else if (event.target.dataset.type === "settings") {
        settingsPopup.classList.toggle("visible");
      }
    };

    attach.addEventListener("click", listener);
    settings.addEventListener("click", listener);

    const plug: any = document.querySelector(".plug");
    const chatLayout: any = document.querySelector(".chat");
    const preview = this.getContent();
    const chatFeed: any = document.querySelector(".chat-feed");

    const userName: any = document.querySelector(".user-name");

    const messages = [
      {
        name: "Sasha",
        feed: [
          {
            type: "date",
            content: "19 июня",
            from: "",
            time: "",
          },
          {
            type: "text",
            content: "Привет!",
            from: "user",
            time: "15:02",
          },
          {
            type: "text",
            content: "Нашёл несколько вариантов квартир, чуть позже скину тебе",
            from: "user",
            time: "15:02",
          },
          {
            type: "text",
            content: "Круто",
            from: "me",
            time: "15:04",
          },
        ],
      },
      {
        name: "Peter",
        feed: [
          {
            type: "date",
            content: "18 июня",
            from: "",
            time: "",
          },
          {
            type: "text",
            content: "Привет, как на счёт встретиться в пятницу после работы",
            from: "user",
            time: "15:43",
          },
          {
            type: "text",
            content: "привет! здорово, я не против",
            from: "me",
            time: "16:02",
          },
          {
            type: "text",
            content: "Мы будем ждать тебя на первом этаже",
            from: "user",
            time: "16:10",
          },
        ],
      },
      {
        name: "Anna",
        feed: [
          {
            type: "date",
            content: "18 июня",
            from: "",
            time: "",
          },
          {
            type: "text",
            content: "Сегодня будет встреча по поводу дизайн системы",
            from: "user",
            time: "10:05",
          },
          {
            type: "text",
            content: "хорошо, нужно прийти пораньше?",
            from: "me",
            time: "10:07",
          },
          {
            type: "text",
            content: "Да, было бы здорово!",
            from: "",
            time: "10:07",
          },
          {
            type: "text",
            content: "постараюсь быть минут за 15",
            from: "me",
            time: "10:07",
          },
          {
            type: "text",
            content: "Спасибо! До встречи",
            from: "",
            time: "10:07",
          },
        ],
      },
      {
        name: "Tanya",
        feed: [
          {
            type: "date",
            content: "17 июня",
            from: "",
            time: "",
          },
          {
            type: "text",
            content: "Привет! Мне сказали тебе можно прислать резюме",
            from: "user",
            time: "11:50",
          },
          {
            type: "text",
            content: "да, кидай прямо сюда",
            from: "me",
            time: "11:52",
          },
          {
            type: "text",
            content: "Я доделываю :) Скоро пришлю",
            from: "user",
            time: "11:55",
          },
        ],
      },
    ];

    const previews = document.querySelectorAll(".preview");
    previews!.forEach((el) => {
      el.classList.remove("selected");
    });

    preview?.classList.add("selected");

    chatFeed.textContent = "";

    plug.style.display = "none";
    chatLayout.style.display = "flex";

    const name = preview!.querySelector(".name")?.textContent;
    userName.textContent = name;

    const feeds = messages.filter(
      (el: { name: string | null | undefined }) => el.name === name
    );

    feeds[0].feed.forEach((el) => {
      if (el.type === "date") {
        const date = document.createElement("p");
        date.className = "chat-date";
        date.textContent = el.content;
        chatFeed.appendChild(date);
      } else if (el.type === "text") {
        const message = document.createElement("div");
        const time = document.createElement("p");
        message.className = "text-message";
        time.className = "time-message";
        if (el.from === "me") {
          message.className += " from-me";
          time.className += " read";
        }
        message.textContent = el.content;
        time.textContent = el.time;
        chatFeed.appendChild(message);
        message.appendChild(time);
      } else if (el.type === "image") {
        const image = document.createElement("img");
        image.className = "image-message";
        chatFeed.appendChild(image);
      }
    });
  };

  render() {
    return this.compile(template, { ...this.props });
  }
}
