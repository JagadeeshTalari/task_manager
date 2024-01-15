const express = require("express");
const app = express();

const port = 5000;

//routes
app.use("/", (req, res) => {
  res.status(200).send("Task Manager App");
});

app.listen(port, (req, res) => {
  console.log(`Server is listening on port ${port}`);
});
