# Messenger

## What is this?

Messenger project. [Figma layout](https://www.figma.com/file/gsvfLgmxRtYrGRpZFuhWJF/Chat?node-id=0%3A1).
UI is inspired by the font [JetBrains Mono](https://www.jetbrains.com/lp/mono/).

<img width="487" alt="Screenshot 2023-10-03 at 14 01 15" src="https://github.com/itwassoclear/messenger/assets/27809896/3993238b-c289-4af5-b526-c67b18e5c0c9">

sprint 1: added layout with Handlebars

sprint 2: added simple routing and form validation. created reusable components

sprint 3: added API for authorization, registration and user settings. Websockets for chats and messages, store to update components

sprint 4: using Mocha and Chai added tests for component, router and request sending module. used Docker and Render.com for deploy the app

## Stack

HTML, JavaScript, Less, Handlebars, Parcel, Netlify, Node, Express

## Try it

development build on http://localhost:3000/

```
$ git clone
$ npm i
$ npm run dev
```

production build on http://localhost:3000/

```
$ npm run start
```

run tests

```
$ npm run test
```

## Check how it works

Delpoy on Netlify [here](https://chic-marigold-dd7f73.netlify.app/)

Delpoy on Render.com using Docker [here](https://messenger-9e9m.onrender.com)
