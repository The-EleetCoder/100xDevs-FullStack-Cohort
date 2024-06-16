const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const { username, password } = req.headers;
  const kidneyId = req.query.kidneyId;

  if (username !== "Harkirat" || password !== "1234") {
    return res.status(400).json({
      message: "Invalid username or password",
    });
  }

  if (kidneyId !== "1" && kidneyId != "2") {
    return res.status(400).json({
      message: "Invalid KidneyId",
    });
  }

  res.json({
    message: "Your kidney is healthy!",
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
