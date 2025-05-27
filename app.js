const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// API
const data = require("./data/data.json");
app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
