const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.status(400).json({ status: "error", message: "Invalid data types" });
    return;
  }
  if (num1 < -1000000 || num2 < -1000000 || num1 + num2 < -1000000) {
    res.status(400).json({ status: "error", message: "Underflow" });
    return;
  }
  if (num1 > 1000000 || num2 > 1000000 || num1 + num2 > 1000000) {
    res.status(400).json({ status: "error", message: "Overflow" });
    return;
  }

  const sum = num1 + num2;
  res.json({ status: "success", message: "The sum of given two numbers", sum });
});

app.post("/sub", (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.status(400).json({ status: "error", message: "Invalid data types" });
    return;
  }
  if (num1 < -1000000 || num2 < -1000000 || num1 - num2 < -1000000) {
    res.status(400).json({ status: "error", message: "Underflow" });
    return;
  }
  if (num1 > 1000000 || num2 > 1000000 || num1 - num2 > 1000000) {
    res.status(400).json({ status: "error", message: "Overflow" });
    return;
  }

  const difference = num1 - num2;
  res.json({
    status: "success",
    message: "The difference of given two numbers",
    difference,
  });
});

app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.status(400).json({ status: "error", message: "Invalid data types" });
    return;
  }
  if (num1 < -1000000 || num2 < -1000000 || num1 * num2 < -1000000) {
    res.status(400).json({ status: "error", message: "Underflow" });
    return;
  }
  if (num1 > 1000000 || num2 > 1000000 || num1 * num2 > 1000000) {
    res.status(400).json({ status: "error", message: "Overflow" });
    return;
  }

  const result = num1 * num2;
  res.json({
    status: "success",
    message: "The product of given numbers",
    result,
  });
});

app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;

  if (num2 === 0) {
    res.status(400).json({ status: "error", message: "Cannot divide by zero" });
    return;
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.status(400).json({ status: "error", message: "Invalid data types" });
    return;
  }
  if (num1 < -1000000 || num2 < -1000000 || num1 / num2 < -1000000) {
    res.status(400).json({ status: "error", message: "Underflow" });
    return;
  }
  if (num1 > 1000000 || num2 > 1000000 || num1 / num2 > 1000000) {
    res.status(400).json({ status: "error", message: "Overflow" });
    return;
  }
  const result = num1 / num2;
  res.json({
    status: "success",
    message: "The division of given numbers",
    result,
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
