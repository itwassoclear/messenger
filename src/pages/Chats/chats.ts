import { Block } from "../../utils/Block";
import Preview from "../../components/Preview";
import Chat from "../../components/Chat";
import template from "./chats.hbs";
import "./chats.less";

export class ChatsPage extends Block {
  constructor() {
    super();
  }

  // const messages = [
  //   {
  //     name: "Sasha",
  //     feed: [
  //       {
  //         type: "date",
  //         content: "19 июня",
  //         from: "",
  //         time: "",
  //       },
  //       {
  //         type: "text",
  //         content: "Привет!",
  //         from: "user",
  //         time: "15:02",
  //       },
  //       {
  //         type: "text",
  //         content: "Нашёл несколько вариантов квартир, чуть позже скину тебе",
  //         from: "user",
  //         time: "15:02",
  //       },
  //       {
  //         type: "text",
  //         content: "Круто",
  //         from: "me",
  //         time: "15:04",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Peter",
  //     feed: [
  //       {
  //         type: "date",
  //         content: "18 июня",
  //         from: "",
  //         time: "",
  //       },
  //       {
  //         type: "text",
  //         content: "Привет, как на счёт встретиться в пятницу после работы",
  //         from: "user",
  //         time: "15:43",
  //       },
  //       {
  //         type: "text",
  //         content: "привет! здорово, я не против",
  //         from: "me",
  //         time: "16:02",
  //       },
  //       {
  //         type: "text",
  //         content: "Мы будем ждать тебя на первом этаже",
  //         from: "user",
  //         time: "16:10",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Anna",
  //     feed: [
  //       {
  //         type: "date",
  //         content: "18 июня",
  //         from: "",
  //         time: "",
  //       },
  //       {
  //         type: "text",
  //         content: "Сегодня будет встреча по поводу дизайн системы",
  //         from: "user",
  //         time: "10:05",
  //       },
  //       {
  //         type: "text",
  //         content: "хорошо, нужно прийти пораньше?",
  //         from: "me",
  //         time: "10:07",
  //       },
  //       {
  //         type: "text",
  //         content: "Да, было бы здорово!",
  //         from: "",
  //         time: "10:07",
  //       },
  //       {
  //         type: "text",
  //         content: "постараюсь быть минут за 15",
  //         from: "me",
  //         time: "10:07",
  //       },
  //       {
  //         type: "text",
  //         content: "Спасибо! До встречи",
  //         from: "",
  //         time: "10:07",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Tanya",
  //     feed: [
  //       {
  //         type: "date",
  //         content: "17 июня",
  //         from: "",
  //         time: "",
  //       },
  //       {
  //         type: "text",
  //         content: "Привет! Мне сказали тебе можно прислать резюме",
  //         from: "user",
  //         time: "11:50",
  //       },
  //       {
  //         type: "text",
  //         content: "да, кидай прямо сюда",
  //         from: "me",
  //         time: "11:52",
  //       },
  //       {
  //         type: "text",
  //         content: "Я доделываю :) Скоро пришлю",
  //         from: "user",
  //         time: "11:55",
  //       },
  //     ],
  //   },
  // ];

  protected initChildren(): void {
    this.children.preview = new Preview({
      previews: [
        new Chat({
          avatar: "",
          name: "Sasha",
          from: "Me: ",
          message: "круто!",
          date: "15:04",
          newMessages: "",
        }),
        new Chat({
          avatar: "",
          name: "Peter",
          from: "",
          message: "Мы будем ждать тебя на первом этаже",
          date: "16:10",
          newMessages: "1",
        }),
        new Chat({
          avatar: "",
          name: "Anna",
          from: "",
          message: "Спасибо! До встречи",
          date: "10:07",
          newMessages: "",
        }),
        new Chat({
          avatar: "",
          name: "Tanya",
          from: "",
          message: "Я доделываю :) Скоро пришлю",
          date: "11:55",
          newMessages: "",
        }),
      ],
    });
  }

  render() {
    return this.compile(template, {});
  }
}
