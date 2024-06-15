const express = require("express");
const { join } = require("path");

const app = express();

// dummy user
const user = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidneys = user[0].kidneys;
  const kidneyCount = johnKidneys.length;
  const healthyKidneyCount = johnKidneys.filter(
    (kidney) => (kidney.healthy = true)
  ).length;
  const unhealthyKidneyCount = kidneyCount - healthyKidneyCount;

  res.send({
    kidneyCount,
    healthyKidneyCount,
    unhealthyKidneyCount
  })
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
