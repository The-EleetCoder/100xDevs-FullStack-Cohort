const express = require("express");

const app = express();
app.use(express.json());

// const userMiddleware = (req, res, next) => {
//   const { username, password } = req.headers;
//   if (username !== "Harkirat" || password !== "1234") {
//     return res.status(400).json({
//       message: "Invalid username or password",
//     });
//   }
//   next();
// };

// const kidneyIdMiddleware = (req, res, next) => {
//   const kidneyId = req.query.kidneyId;
//   if (kidneyId !== "1" && kidneyId != "2") {
//     return res.status(400).json({
//       message: "Invalid KidneyId",
//     });
//   }
//   next();
// };

// app.get("/health-checkup", userMiddleware, kidneyIdMiddleware, (req, res) => {
//   res.json({
//     message: "Your kidney is healthy!",
//   });
// });

app.post("/health-checkup", (req, res) => {
  const { kidneys } = req.body;
  const kidneyLength = kidneys.length;

  res.json({
    message: "You have " + kidneyLength + " kidneys",
  });
});

// global catches
app.use((err,req,res,next)=>{
  res.json({
    message: "Sorry, something is up with our server!"
  })
})

app.listen(3000, () => {
  console.log("listening on port 3000");
});
