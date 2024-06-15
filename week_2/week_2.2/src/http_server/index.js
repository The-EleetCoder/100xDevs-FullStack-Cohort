// Creating a server
const express = require("express");
const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/conversations", (req, res) => {
  console.log(req.body);
  res.send({
    message: "Hello bitches!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
