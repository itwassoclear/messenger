import express from 'express';

const app = express();
const PORT = 1312;

app.use(express.static('./dist'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
