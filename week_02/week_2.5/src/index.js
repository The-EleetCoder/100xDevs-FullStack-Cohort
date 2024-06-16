const express = require("express");
const { join } = require("path");

const app = express();
app.use(express.json());

// dummy user
const users = [
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
  const johnKidneys = users[0].kidneys;
  const kidneyCount = johnKidneys.length;
  const healthyKidneyCount = johnKidneys.filter(
    (kidney) => kidney.healthy == true
  ).length;
  const unhealthyKidneyCount = kidneyCount - healthyKidneyCount;

  res.send({
    kidneyCount,
    healthyKidneyCount,
    unhealthyKidneyCount,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.send({
    message: "Kidney inserted",
  });
});

app.put("/", (req, res) => {
  users[0].kidneys.map((kidney) => (kidney.healthy = true));
  res.send({
    message: "All Kidneys updated",
  });
});

app.delete("/", (req, res) => {
  users[0].kidneys = users[0].kidneys.filter(
    (kidney) => kidney.healthy == true
  );
  res.send({
    message: "All unhealthyKidneys removed",
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
