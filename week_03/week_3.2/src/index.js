const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://jaijain1803:8WCx3hnKxkI24nwP@cluster0.i50slka.mongodb.net/practiceApp"
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;
  const existingUser = await User.findOne({ username: username });

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const user = new User({
    name,
    username,
    password,
  });
  user.save();

  res.json({
    message: "User saved successfully",
    user,
  });
});

app.post("/signin", async (req, res) => {
  const { username } = req.body;
  const existingUser = await User.findOne({ username });

  if (!existingUser) {
    return res.status(400).json({
      message: "User doesn't exist!",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const allUsers = await User.find();
    const otherUsers = allUsers.filter((user) => user.username != username);
    res.status(200).json(otherUsers);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
