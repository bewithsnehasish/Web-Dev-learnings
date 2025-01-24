const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static("public"));

// POST route to handle form submission
app.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({ message: body });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
