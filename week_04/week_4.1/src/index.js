const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    msg: "Hello Peter!",
  });
});

app.post("/calculateInterest", (req, res) => {
  const { principal, rate, time } = req.query;
  const interest = (principal * rate * time) / 100;
  res.status(200).json({
    interest,
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
