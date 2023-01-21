const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const port = 80;
const url = "https://api.telegram.org/bot";
const apiToken = "5879688415:AAGF4iw7W1I783o3zdRbx2i23KzSRs_xVEM";
// Configurations
app.use(bodyParser.json());
// Endpoints
app.post("/", (req, res) => {
  // console.log(req.body);
  const chatId = req.body.message.chat.id;
  const sentMessage = req.body.message.text;

  axios
    .post(`${url}${apiToken}/sendMessage`, {
      chat_id: chatId,
      text: "suijth",
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.send(error);
    });

  // Regex for hello
  if (sentMessage.match(/hello/gi)) {
    axios
      .post(`${url}${apiToken}/sendMessage`, {
        chat_id: chatId,
        text: "hello back 👋",
      })
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.send(error);
      });
  } else {
    // if no hello present, just respond with 200
    res.status(200).send({});
  }
});

// export 'app'
module.exports = app;
