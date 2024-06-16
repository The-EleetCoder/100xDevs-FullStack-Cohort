# Week 3

MongoDB Atlas connection string for `Practice_01` project under `Harkirat_0-100_cohort` is `mongodb+srv://jaijain1803:8WCx3hnKxkI24nwP@cluster0.i50slka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

PostgreSQL connection string `postgresql://Practice_01_owner:eGAtJ2F0hjRL@ep-long-butterfly-a54yv6pm.us-east-2.aws.neon.tech/Practice_01?sslmode=require`

Ugly way of doing auth and input checks :
```js
const express = require("express");

const app = express();
app.use(express.json());

app.get("/health-checkup", (req, res) => {
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
```
Good way is to use `middlewares` :
```js
const express = require("express");

const app = express();
app.use(express.json());

const userMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  if (username !== "Harkirat" || password !== "1234") {
    return res.status(400).json({
      message: "Invalid username or password",
    });
  }
  next();
};

const kidneyIdMiddleware = (req, res, next) => {
  const kidneyId = req.query.kidneyId;
  if (kidneyId !== "1" && kidneyId != "2") {
    return res.status(400).json({
      message: "Invalid KidneyId",
    });
  }
  next();
};

app.get("/health-checkup", userMiddleware, kidneyIdMiddleware, (req, res) => {
  res.json({
    message: "Your kidney is healthy!",
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
```
Global Catches 
```js
// global catches
app.use((err,req,res,next)=>{
  res.json({
    message: "Sorry, something is up with our server!"
  })
})
```
