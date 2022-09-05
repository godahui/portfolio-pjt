const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/api/host", (req, res) => {
  res.send({ host: "dahui" });
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
