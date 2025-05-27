const express = require("express");
const app = express();
const port = 3000;

// load data
const data = require("../data/data.json");

// middleware to serve static files
app.use(express.static("frontend"));

// route to send JSON data
app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
